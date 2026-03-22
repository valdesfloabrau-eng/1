import type { CodexProvider, DeployAdapter, GitHubProvider } from './providers.js';
import type { TaskSpec, TaskState } from './types.js';
import { canTransition } from './state-machine.js';

export class Broker {
  private state: TaskState = 'task.created';

  constructor(
    private readonly codex: CodexProvider,
    private readonly github: GitHubProvider,
    private readonly deploy: DeployAdapter
  ) {}

  async ask(task: TaskSpec): Promise<void> {
    this.transition('task.asking');
    const memo = await this.codex.askFirst(task);
    await this.github.createTaskArtifact(`runs/${task.task_id}/ask-memo.json`, JSON.stringify(memo, null, 2));
    this.transition('task.options_ready');
  }

  async deployProject(projectId: string): Promise<void> {
    this.transition('task.deploying');
    const result = await this.deploy.deploy(projectId);
    this.state = result.status === 'deployed' ? 'task.deployed' : 'task.failed';
  }

  private transition(next: TaskState): void {
    if (!canTransition(this.state, next)) {
      throw new Error(`Invalid transition: ${this.state} -> ${next}`);
    }
    this.state = next;
  }
}
