# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root — this project's glossary, in place of the usual `GLOSSARY.md`. It describes the full intended product model (`guess-the-move`, the live chess-trainer app), including terms not yet shipped in this repo's own code, each marked `_Status: ..._`.
- **`docs/adr/`**: read ADRs that touch the area you're about to work in. None exist yet — the `/domain-modeling` skill creates them lazily when an architectural decision actually gets resolved.

## File structure

Single-context repo (this one):

```
/
├── CONTEXT.md        ← glossary (not GLOSSARY.md — pre-existing project convention)
├── docs/adr/          ← not yet created
└── src/
```

This repo has no monorepo signals (no workspaces, no `packages/*`), so it stays single-context. If that ever changes, switch to a root `GLOSSARY-MAP.md` pointing at per-context `GLOSSARY.md`/`docs/adr/` pairs, per the standard multi-context layout.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids (each term's `_Avoid_` line).

If the concept you need isn't in the glossary yet, that's a signal: either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-000X (...), but worth reopening because…_
