# Ask-first memo

Summary: choose the smallest broker MVP that is operational now and extensible later.

## Option A — docs-only protocol
What changes:
- only markdown docs, no code skeleton
Pros:
- fastest to write
- easiest to explain
Risks:
- not executable enough
- no clear integration point for Codex/SDK later
Implementation cost: low

## Option B — minimal typed broker core
What changes:
- typed task model
- state machine
- provider interfaces
- broker skeleton
- protocol docs and examples
Pros:
- strong MVP boundary
- real integration seam for Codex/GitHub later
- enough structure for first operational cycle
Risks:
- still needs real provider wiring later
Implementation cost: medium

## Option C — overbuilt workflow engine
What changes:
- full queueing, persistence, workflow execution, deploy orchestration upfront
Pros:
- ambitious
Risks:
- too much too early
- high complexity without validated need
Implementation cost: high

Recommended option: B

Blockers:
- direct Codex launch from this chat is not available yet
