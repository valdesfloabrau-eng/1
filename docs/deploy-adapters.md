# Deploy adapters

## Principle
Hosting must remain a replaceable adapter.

## Rules
- no direct production edits
- no manual FTP as the main workflow
- adapter-specific logic must stay outside the core broker
- REG.RU Host-3 is supported as an adapter target, not as a platform assumption

## Adapter contract
A deploy adapter must define:
- target id
- target type
- credentials source
- build output directory
- upload/apply method
- rollback capability
- health check hook

## Initial stance
This MVP defines the adapter contract only. Real deploy integration is intentionally deferred.
