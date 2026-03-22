# Architecture

## Recommended operating model

Use GitHub as the communication bus between ChatGPT and Codex.

- ChatGPT: architect, task director, reviewer
- Codex: implementation agent
- GitHub: source of truth and state carrier
- Deploy target: replaceable adapter

## Core separation

### Site repositories
- one repository per domain
- repository name must equal domain
- each site has its own project root

### Infra repository
- one shared repo for automation logic
- broker skeleton, schemas, adapters, docs, workflows
- never store website code here

## Lifecycle
1. task.created
2. task.asking
3. task.options_ready
4. task.selected
5. task.coding
6. task.pr_open
7. task.in_review
8. task.changes_requested
9. task.approved
10. task.merged
11. task.deploying
12. task.deployed
13. task.failed

## Weakest point of current MVP
Current access cannot directly launch a Codex cloud task from this chat. That gap must later be filled by Codex app Win usage and/or a broker runner via SDK.
