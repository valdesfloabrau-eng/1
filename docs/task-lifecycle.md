# Task lifecycle

## States
- task.created
- task.asking
- task.options_ready
- task.selected
- task.coding
- task.pr_open
- task.in_review
- task.changes_requested
- task.approved
- task.merged
- task.deploying
- task.deployed
- task.failed

## Labels
- state:created
- state:asking
- state:options-ready
- state:selected
- state:coding
- state:pr-open
- state:in-review
- state:changes-requested
- state:approved
- state:merged
- state:deploying
- state:deployed
- state:failed

## Happy path
1. Create task spec
2. Produce ask-first memo
3. Select option
4. Open implementation branch or PR
5. Review
6. Merge
7. Deploy via adapter
