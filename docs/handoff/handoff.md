# Handoff Protocol

You are about to run out of context or processing capacity. Before this session ends, you need to prepare a thorough handoff so that a fresh instance of Claude can pick up exactly where you left off with minimal ramp-up time.

All handoff-related files live in `docs/handoff/`. If this directory does not exist, create it.

Complete the following steps in order:

---

## 1. Update CLAUDE.md

Review and update `docs/handoff/CLAUDE.md`. Make sure it reflects the current state of:

- Project architecture and key design decisions (especially any that changed during this session)
- Conventions and patterns in use (naming, file organization, error handling, etc.)
- Known gotchas or non-obvious behaviors a new instance would stumble on
- Dependencies or environment details that matter

If `docs/handoff/CLAUDE.md` doesn't exist, create it.

## 2. Update the Glossary

Review and update the **Glossary** section at the bottom of `docs/handoff/CLAUDE.md`. This section captures the tribal knowledge — the gap between what the code says and what it actually means. Include entries for:

- Domain-specific terms and what they mean in the context of *this* project
- Custom abstractions or patterns that don't follow standard conventions
- Abbreviations or shorthand used in the codebase
- Terms that mean something different here than in the broader ecosystem
- Relationships between concepts that aren't obvious from file structure alone

Only add entries where the meaning is not self-evident from reading the code. Remove entries that have become obsolete. The goal is a living document, not a comprehensive dump.

If the Glossary section doesn't exist, create it using this format:

```markdown
## Glossary

| Term | Meaning |
|------|---------|
| Example Term | What it actually means in this project |
```

## 3. Write or Update STATUS.md

Create or update `docs/handoff/STATUS.md` with the following sections:

### Current State
What is the project's current state? What works, what doesn't, what's partially built?

### What I Was Working On
Describe the specific task or feature you were in the middle of. Be precise — name the files, functions, and components involved.

### What's Done
List what you completed this session, with brief reasoning for any non-obvious decisions.

### What's Not Done
List what remains to be done on the current task. Be specific about next steps — not just "finish the feature" but "implement the validation logic in `src/validators/order.ts`, then wire it into the route handler in `src/routes/orders.ts`."

### Decisions Made and Why
Document any architectural or implementation decisions you made and the reasoning behind them. This prevents the next instance from re-debating settled questions.

### Concerns and Uncertainties
Be honest. What are you unsure about? What might be wrong? What felt fragile or hacky? What trade-offs did you make that the next instance should reconsider if time allows? Do not write an optimistic summary — write an accurate one.

### Relevant Files
List the files most relevant to the current work, with a one-line note on each explaining its role in the current task.

## 4. Commit Your Work

Stage and commit all changes with a detailed commit message that summarizes the session's work. Use the format:

```
[handoff] <brief summary>

- What was accomplished
- What's in progress
- What's next
```

## 5. Confirm Completion

Once all steps are done, say so and provide a one-paragraph summary I can quickly scan to confirm the handoff looks complete.

---

## Prompt for the New Instance

Paste this when starting a fresh session:

> Read all files in `docs/handoff/`, starting with `CLAUDE.md` then `STATUS.md`. Review the last 5 git commits with `git log --oneline -5` and scan the diffs of the most recent commit. Before doing any work, give me a brief summary of your understanding of the current project state, what was just being worked on, and what needs to happen next. Flag anything that seems unclear or concerning.
