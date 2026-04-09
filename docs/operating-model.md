# Operating model

## Roles
- ChatGPT: architect, task director, reviewer
- Codex: implementation agent
- GitHub: communication bus and audit trail
- Hosting: replaceable deploy target

## Core rule
Site code and infra code stay separate. This repository is staging-only for the future dedicated infra repo `site-ops-broker`.

## Project model
- one domain = one project_id
- one domain = one site repository
- language subdomains stay linked to the main domain in one project model
- each project has its own separate root folder

## Current mode
Until direct broker automation exists, GitHub artifacts represent the communication contract that Codex app Win can follow.
