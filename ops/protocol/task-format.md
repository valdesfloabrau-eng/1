# Task format

## Required fields
- task_id
- project_id
- mode
- title
- goal
- constraints
- success_criteria
- context_refs

## Modes
- ask-first
- code-after-selection

## Example
```yaml
task_id: task-001
project_id: example.ru
mode: ask-first
title: Establish broker skeleton direction
goal: Choose the best broker MVP structure for ChatGPT ↔ Codex workflow.
constraints:
  - keep infra separate from site repos
  - domain remains project_id
  - Host-3 remains adapter-only
success_criteria:
  - exactly 2 or 3 options
  - one recommended option
context_refs:
  - docs/architecture.md
  - ops/project.example.yml
```
