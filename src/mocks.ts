import type { AskMemo, TaskSpec } from './types.js';
import type { CodexProvider, DeployAdapter, GitHubProvider } from './providers.js';

export class MockCodexProvider implements CodexProvider {
  async askFirst(task: TaskSpec): Promise<AskMemo> {
    return {
      summary: `Mock ask-first result for ${task.task_id}`,
      options: [
        {
          id: 'A',
          what_changes: 'Keep docs-only workflow.',
          pros: ['Fastest path'],
          risks: ['Too weak operationally'],
          implementation_cost: 'low'
        },
        {
          id: 'B',
          what_changes: 'Use minimal typed broker core.',
          pros: ['Strong MVP boundary', 'Clear extension seam'],
          risks: ['Needs real provider wiring later'],
          implementation_cost: 'medium'
        }
      ],
      recommended_option_id: 'B'
    };
  }

  async codeAfterSelection(_task: TaskSpec, selectedOptionId: string): Promise<{ summary: string }> {
    return { summary: `Mock code-after-selection for option ${selectedOptionId}` };
  }
}

export class MockGitHubProvider implements GitHubProvider {
  public readonly artifacts = new Map<string, string>();

  async createTaskArtifact(path: string, content: string): Promise<void> {
    this.artifacts.set(path, content);
  }

  async openPullRequest(_title: string, _body: string, _headBranch: string, _baseBranch: string): Promise<{ number: number }> {
    return { number: 1 };
  }
}

export class MockDeployAdapter implements DeployAdapter {
  async deploy(_projectId: string): Promise<{ status: 'deployed' | 'failed' }> {
    return { status: 'deployed' };
  }
}
