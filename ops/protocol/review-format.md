# Review format

## Required fields
- review_target
- review_depth
- concerns
- pass_fail_criteria

## Example
```yaml
review_target: PR broker skeleton
review_depth: architecture + protocol consistency
concerns:
  - domain isolation
  - repo separation
  - future Codex integration point
pass_fail_criteria:
  - infra code does not assume site code location
  - project config contains domain/subdomain mapping
  - task lifecycle is explicit
```
