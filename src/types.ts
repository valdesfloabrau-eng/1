export type TaskMode = 'ask-first' | 'code-after-selection';

export type TaskState =
  | 'task.created'
  | 'task.asking'
  | 'task.options_ready'
  | 'task.selected'
  | 'task.coding'
  | 'task.pr_open'
  | 'task.in_review'
  | 'task.changes_requested'
  | 'task.approved'
  | 'task.merged'
  | 'task.deploying'
  | 'task.deployed'
  | 'task.failed';

export interface TaskSpec {
  task_id: string;
  project_id: string;
  mode: TaskMode;
  title: string;
  goal: string;
  constraints: string[];
  success_criteria: string[];
  context_refs: string[];
}

export interface AskOption {
  id: string;
  what_changes: string;
  pros: string[];
  risks: string[];
  implementation_cost: 'low' | 'medium' | 'high';
}

export interface AskMemo {
  summary: string;
  options: AskOption[];
  recommended_option_id: string;
  blockers?: string[];
}

export interface ProjectConfig {
  project_id: string;
  primary_domain: string;
  repo_name: string;
  project_root_folder: string;
}
