# Communication protocol

## Modes

### ask-first
Use when the task is ambiguous, architectural, or has meaningful trade-offs.

Response format:
- one-line summary
- exactly 2 or 3 options
- per option:
  - what changes
  - pros
  - risks
  - implementation cost
- recommended option
- blockers only if strictly necessary

### code-after-selection
Use after an option is selected.

Response format:
- one-line summary
- files changed
- key implementation decisions
- tests/checks run
- known risks
- next high-value step only

## PR format
- intent
- scope
- changed files
- validation
- risks
- rollback note

## Review format
- review target
- expected review depth
- specific concerns
- pass/fail criteria
