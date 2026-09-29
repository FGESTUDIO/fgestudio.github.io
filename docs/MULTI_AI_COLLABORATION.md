# Multi-AI Collaboration Rules

Applies to ChatGPT / Codex / Work, Claude / Claude Code, and future development agents.

## Source of truth
GitHub is the authoritative long-term project state. Chat history is not the baseline.

Before working, every AI must read:
1. root `AI_HANDOFF.md`
2. `docs/PROJECT_STATE.md`
3. this file
4. `docs/CURRENT_HANDOFF.md` if another AI has active unfinished work

## Branch ownership
- Do not have two AI agents edit the same task on the same branch at the same time.
- ChatGPT/Codex branches: `codex/<task-or-release>`
- Claude branches: `claude/<task-or-release>`
- If continuing work from another AI, branch from the exact latest commit identified in CURRENT_HANDOFF, not from an older main snapshot.
- Do not force-push shared branches.
- Do not resolve conflicts by blindly replacing whole files or deleting unknown changes.

## Task flow
1. Understand the user's desired outcome.
2. Confirm the actual current baseline.
3. Create/use the agent's task branch.
4. Implement and test.
5. Update relevant project docs.
6. Commit to the task branch.
7. If handing off, update `docs/CURRENT_HANDOFF.md` with branch, commit, completed work, remaining work, risks and tests.

## Reuse-first
Check current code first. If a mature existing solution is needed, GitHub/public sources may be researched and adapted.
Before integration check license, maintenance, compatibility, security/privacy and dependency cost.
Record external reuse in `docs/THIRD_PARTY_REUSE.md`.

## Risk boundaries
Normal reversible changes can be autonomous.
Ask before irreversible data loss, new paid services, sensitive credentials, unclear licensing/compliance, force-push/destructive shared-Git actions, or major product-direction changes.

## Handoff quality
Keep handoff notes compact and factual. Do not paste entire chats into the repository.
