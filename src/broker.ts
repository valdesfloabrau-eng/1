import type { CodexProvider, DeployAdapter, GitHubProvider } from './providers.js';
import type { TaskSpec, TaskState } from './types.js';
import type { ProjectRegistry } from './project-registry.js';
import type { TaskStore } from './task-store.js';
import { canTransition } from './state-machine.js';

export class Broker {
  constructor(
    private readonly codex: CodexProvider,
    private readonly github: GitHubProvider,
    private readonly deploy: DeployAdapter,
    private readonly projects: ProjectRegistry,
    private readonly tasks: TaskStore
  ) {}

  async ask(task: TaskSpec): Promise<void> {
    const project = this.projects.get(task.project_id);
    if (!project) {
      throw new Error(`Unknown project: ${task.project_id}`);
    }

    this.tasks.createTask(task, 'task.created');
    this.transition(task.task_id, 'task.asking');
    const memo = await this.codex.askFirst(task);
    await this.github.createTaskArtifact(`runs/${task.task_id}/ask-memo.json`, JSON.stringify(memo, null, 2));
    this.transition(task.task_id, 'task.options_ready');
  }

  async deployProject(taskId: string, projectId: string): Promise<void> {
    this.transition(taskId, 'task.deploying');
    const result = await this.deploy.deploy(projectId);
    this.tasks.setState(taskId, result.status === 'deployed' ? 'task.deployed' : 'task.failed');
  }

  private transition(taskId: string, next: TaskState): void {
    const stored = this.tasks.getTask(taskId);
    const current = stored?.state;
    if (!current) {
      throw new Error(`Unknown task in transition: ${taskId}`);
    }
    if (!canTransition(current, next)) {
      throw new Error(`Invalid transition: ${current} -> ${next}`);
    }
    this.tasks.setState(taskId, next);
  }
}
