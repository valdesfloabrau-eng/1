# ChatGPT ↔ Codex bridge (GitHub transport)

This branch is a transport scaffold for a local Codex bridge.

## Purpose
Use GitHub as a mailbox between ChatGPT and a local agent running on the user's computer.

## Constraints
- No VPS
- No custom hosting
- No public HTTPS bridge
- GitHub is the only remote transport
- Local execution still happens on the user's computer

## Directories
- `.codex-bridge/tasks/` — task files created by ChatGPT side
- `.codex-bridge/results/` — result files written by local agent
- `.codex-bridge/state/` — heartbeat and status files from local agent

## Important limitation
This branch alone does not create a direct channel from this chat to the local computer. A local poller/worker must still run on the user's machine and sync this branch.
