import { Broker } from './broker.js';
import { MockCodexProvider, MockDeployAdapter, MockGitHubProvider } from './mocks.js';
import { InMemoryProjectRegistry } from './project-registry.js';
import { InMemoryTaskStore } from './task-store.js';
import type { TaskSpec } from './types.js';

const task: TaskSpec = {
  task_id: 'task-001',
  project_id: 'infra.site-ops-broker',
  mode: 'ask-first',
  title: 'Establish minimal broker MVP structure',
  goal: 'Choose the strongest minimal structure for a GitHub-centered ChatGPT ↔ Codex broker MVP.',
  constraints: [
    'keep infra separate from website repos',
    'use domain-centered project model',
    'keep REG.RU Host-3 adapter-only',
    'optimize for future automation'
  ],
  success_criteria: [
    'exactly 2 or 3 options',
    'one recommended option',
    'clear rejection of weaker options',
    'implementation can start immediately after selection'
  ],
  context_refs: ['docs/architecture.md', 'docs/communication.md', 'ops/project.example.yml']
};

async function main(): Promise<void> {
  const codex = new MockCodexProvider();
  const github = new MockGitHubProvider();
  const deploy = new MockDeployAdapter();
  const projects = new InMemoryProjectRegistry([
    {
      project_id: 'infra.site-ops-broker',
      primary_domain: 'site-ops-broker.local',
      repo_name: 'site-ops-broker',
      project_root_folder: '/infra/site-ops-broker'
    }
  ]);
  const store = new InMemoryTaskStore();

  const broker = new Broker(codex, github, deploy, projects, store);
  await broker.ask(task);

  const artifactPath = `runs/${task.task_id}/ask-memo.json`;
  const artifact = github.artifacts.get(artifactPath);
  console.log(artifactPath);
  console.log(artifact ?? 'no artifact written');
}

void main();
