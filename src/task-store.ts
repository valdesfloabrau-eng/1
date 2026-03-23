import type { TaskSpec, TaskState } from './types.js';

export interface StoredTask {
  spec: TaskSpec;
  state: TaskState;
}

export interface TaskStore {
  createTask(task: TaskSpec, initialState: TaskState): void;
  getTask(taskId: string): StoredTask | undefined;
  setState(taskId: string, state: TaskState): void;
}

export class InMemoryTaskStore implements TaskStore {
  private readonly tasks = new Map<string, StoredTask>();

  createTask(task: TaskSpec, initialState: TaskState): void {
    this.tasks.set(task.task_id, { spec: task, state: initialState });
  }

  getTask(taskId: string): StoredTask | undefined {
    return this.tasks.get(taskId);
  }

  setState(taskId: string, state: TaskState): void {
    const task = this.tasks.get(taskId);
    if (!task) {
      throw new Error(`Unknown task: ${taskId}`);
    }
    task.state = state;
  }
}
