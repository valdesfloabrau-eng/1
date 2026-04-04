task_id: akvatonus-hero-export-01
project_path: C:\Users\User\OneDrive\Документы\New project\akvatonus.ru
mode: execute
sandbox: workspace-write
approval: never

# Task

Export the current AkvaTonus desktop hero HTML for ChatGPT review.
Do not redesign the hero in this task.
Do not improve the layout in this task.
Do not change the existing HTML unless a read-only export requires a copy.

# Goal

Expose the current HTML source and a strict review handoff for ChatGPT.
Use the existing file only.
Do not create a new design.
Do not broaden scope.

# Output

Use this source file:
C:\Users\User\OneDrive\Документы\New project\akvatonus.ru\akvatonus-2026-04-04_hero-desktop-01.html

Create a result handoff for ChatGPT under the bridge results folder for this task.
Also include the full HTML source in the handoff.

# Hard constraints

- do not redesign anything
- do not build mobile
- do not change copy unless export requires escaping
- do not replace placeholders
- do not modify popup behavior
- use the existing HTML file only
- this is a review-export task only

# CTA rule

Do not alter the CTA text or popup wiring.
Only report the current implementation.

# Content direction

Return the current state exactly as implemented so ChatGPT can perform a strict art-direction review.

# Allowed factual base

- exact full file path of the current HTML file
- full HTML source in a markdown code block
- short structural summary of the section
- short note confirming whether the file was modified or only exported for review

# Recommended structure

- one handoff markdown file in bridge results
- exact file path
- full HTML source
- short structural summary
- modification note

# Design direction

No redesign.
No cleanup pass.
No visual changes.
Only export for review.

# Required report

Return a short handoff with:
- exact full file path of the current HTML file
- full HTML source in a markdown code block
- short structural summary
- short note confirming whether the file was modified during this task or only exported for review
