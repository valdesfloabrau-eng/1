# site-ops-broker (staging in repo `1`)

This branch turns the current test repository into a staging version of the future `site-ops-broker` infra repository.

## Purpose

Build the minimum broker/orchestrator layer for a future automated workflow:

ChatGPT -> task spec -> Codex ask-first -> selected option -> code PR -> review -> merge -> deploy

## Important limitation

This repository is a staging location because the current tool access can create branches, files and PRs, but cannot create or rename GitHub repositories. The correct long-term target is a dedicated private infra repository named `site-ops-broker`.

## Principles

- one site = one repo = one domain
- domain = project_id
- site repos stay separate from infra code
- hosting is only a deploy target
- REG.RU Host-3 must remain an adapter, not a core dependency
- no direct production edits
- all changes flow through branch -> PR -> review -> merge -> deploy

## What this branch includes

- broker skeleton in TypeScript
- project schema example
- Codex communication rules
- first real task cycle artifacts:
  - task spec
  - ask-first memo
  - selected option

## Next step

Promote this content into a dedicated infra repo and connect Codex app Win / SDK runner to the workflow.
