import type { AskMemo, TaskSpec } from './types.js';

export interface CodexProvider {
  askFirst(task: TaskSpec): Promise<AskMemo>;
  codeAfterSelection(task: TaskSpec, selectedOptionId: string): Promise<{ summary: string }>;
}

export interface GitHubProvider {
  createTaskArtifact(path: string, content: string): Promise<void>;
  openPullRequest(title: string, body: string, headBranch: string, baseBranch: string): Promise<{ number: number }>;
}

export interface DeployAdapter {
  deploy(projectId: string): Promise<{ status: 'deployed' | 'failed' }>;
}
