# Automation — GitHub Actions

What runs automatically on this repo, why, and how to control it.

## Workflows

| Workflow | Trigger | What it does |
|---|---|---|
| [`deploy.yml`](../.github/workflows/deploy.yml) | push to `main`/`v2026`, PRs | Build → URL-freeze contract (`--complete`) → JSON-LD scan → deploy to Pages (deploy only on `main`) |
| [`claude.yml`](../.github/workflows/claude.yml) | `@claude` in an issue/PR/review comment | Interactive Claude — picks up the thread, works in-repo, replies or opens a PR |
| [`claude-code-review.yml`](../.github/workflows/claude-code-review.yml) | PR opened / updated | Automated code review focused on YMYL correctness, URL contract, JSON-LD, CWV |
| [`roadmap-agent.yml`](../.github/workflows/roadmap-agent.yml) | schedule (4×/day) + manual | Autonomous agent that advances `CHECKLIST.md` one small step per run, via a PR |

## The scheduled roadmap agent

- **Cadence:** four runs a day, 5 hours apart — cron `0 1,6,11,16 * * *` (UTC) =
  **06:30 / 11:30 / 16:30 / 21:30 IST**. Edit the `cron:` line in
  [`roadmap-agent.yml`](../.github/workflows/roadmap-agent.yml) to change it.
  (Note: GitHub cron is UTC-only and scheduled runs can start several minutes late
  under load.)
- **Time budget:** ~20 min of agent work per run (`timeout-minutes: 25`, `--max-turns 60`).
- **Mandate & guardrails:** [`.github/roadmap-agent.md`](../.github/roadmap-agent.md) —
  edit this file to change *what* the agent works on. Key rules baked in:
  - Opens a **PR against `v2026`** every time; **never** pushes to `main`/`v2026`,
    never merges its own PR, never edits workflow triggers or secrets.
  - Does **one** small, verified task per run; runs `npm run check` before proposing.
  - **Never invents or changes financial figures** (rates, tax slabs, premiums) or
    fabricates citations/bios/FAQ answers — those need your human verification. When a
    task needs verified data, it opens an issue asking you for the figure + source.
- **Steering it:** open an issue and label it `agent` (or `automation`) — the agent
  prioritises those. Create the label once:
  ```bash
  gh label create agent --description "Tasks for the scheduled roadmap agent" --color 5319e7
  ```
- **Pause it:** disable the workflow in the Actions tab, or comment out the `schedule:`
  block. **Trigger a one-off:** Actions tab → *roadmap-agent* → *Run workflow*.

## Setup (one-time)

1. **Add the API key secret** (see the README setup step): repo → Settings → Secrets
   and variables → Actions → new secret `ANTHROPIC_API_KEY`.
2. **Allow Actions to open PRs:** repo → Settings → Actions → General → *Workflow
   permissions* → enable **"Allow GitHub Actions to create and approve pull requests"**
   (otherwise the agent can't open its PR with the default `GITHUB_TOKEN`).
3. (Optional) create the `agent` label as above.

## Usage limits & billing

**The automation runs on API-key billing (`ANTHROPIC_API_KEY`), not on a Claude
subscription — so it NEVER counts against the Pro/Max 5-hour rolling limit.** That
limit only governs your own interactive Claude usage (claude.ai and Claude Code signed
in with your subscription). The two are separate pools:

| Usage | Billed against | Pro 5-hour limit? |
|---|---|---|
| `roadmap-agent` / `claude` / `claude-code-review` workflows | API key (per token) | ❌ no |
| Your interactive Claude / Claude Code sessions | Pro/Max subscription | ✅ yes |

Do **not** switch these workflows to `claude_code_oauth_token` unless you *want* them
to consume your subscription's 5-hour window — using the API key is the deliberate
choice that keeps CI from ever exhausting your Pro limit.

### Keeping API cost bounded

API billing has no 5-hour cap, but it does cost per token, so each run is capped:

- `roadmap-agent`: `timeout-minutes: 25`, `--max-turns 60`, `claude-sonnet-5`, one task
  per run, single non-overlapping run (`concurrency` group).
- `claude` / `claude-code-review`: 20 / 15 min timeouts.
- Four scheduled runs/day + per-PR review is the steady-state spend. Watch it for the
  first week (Anthropic Console → Usage) and tune cadence (`cron`), model, or
  `--max-turns` in the workflow files. Set a spend limit on the API key in the Console
  as a hard backstop.

## Safety

- Nothing the agent produces reaches production without a human merging its PR — and
  every PR still has to pass `deploy.yml`'s URL-freeze + JSON-LD gates.

## Commit attribution

All automation commits are authored as **Anupam Mondal `<a09051985@gmail.com>`**, not
`github-actions[bot]`. This is pinned three ways: repo-local `git config`, a
`git config` step after checkout, and job-level `GIT_AUTHOR_*` / `GIT_COMMITTER_*` env
vars in [`claude.yml`](../.github/workflows/claude.yml) and
[`roadmap-agent.yml`](../.github/workflows/roadmap-agent.yml). The agent is also
instructed not to add any assistant `Co-Authored-By` trailer. To re-attribute later,
change the email in those two workflow files (and `git config user.email` locally).
