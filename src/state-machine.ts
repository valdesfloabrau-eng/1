import type { TaskState } from './types.js';

const allowed: Record<TaskState, TaskState[]> = {
  'task.created': ['task.asking', 'task.coding', 'task.failed'],
  'task.asking': ['task.options_ready', 'task.failed'],
  'task.options_ready': ['task.selected', 'task.failed'],
  'task.selected': ['task.coding', 'task.failed'],
  'task.coding': ['task.pr_open', 'task.failed'],
  'task.pr_open': ['task.in_review', 'task.failed'],
  'task.in_review': ['task.changes_requested', 'task.approved', 'task.failed'],
  'task.changes_requested': ['task.coding', 'task.failed'],
  'task.approved': ['task.merged', 'task.failed'],
  'task.merged': ['task.deploying', 'task.failed'],
  'task.deploying': ['task.deployed', 'task.failed'],
  'task.deployed': [],
  'task.failed': []
};

export function canTransition(from: TaskState, to: TaskState): boolean {
  return allowed[from].includes(to);
}
