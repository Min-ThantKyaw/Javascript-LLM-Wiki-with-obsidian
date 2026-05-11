# Idea from
[LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f0)

# JavaScript Second Brain — AI-Powered Wiki & Dev Mentor

> A personal knowledge base and learning system built on **Obsidian**, powered by an **AI Mentor** (Claude), designed to take you from Vanilla JavaScript all the way to TypeScript, React, and Node.js.

---

## 📖 What Is This?

This repository is a **Second Brain** — a structured, interconnected knowledge vault where every concept you learn gets documented, linked, and made retrievable. It combines:

- **Obsidian** as the note-taking and knowledge graph interface.
- **Claude AI** as a Senior Full-stack JavaScript Mentor that ingests raw learning material, produces structured wiki pages, and guides your learning roadmap.
- **Git + GitHub** for version control and backup of your entire knowledge base.

The goal is simple: never lose what you've learned. Every explanation, every code snippet, every project — all organized and interlinked in one place.

---

## 🗂️ Folder Structure

```
javascript/
│
├── raw/                        # Source documents (READ-ONLY — never modify)
│   └── Javascript/             # Raw notes, articles, or learning material
│
├── wiki/                       # Structured, atomic knowledge pages
│   ├── index.md                # Master table of contents for the entire wiki
│   ├── log.md                  # Append-only operation log
│   └── Javascript/             # Mirrors the raw/ folder structure
│       └── variables/          # One subfolder per topic
│           ├── what-is-a-variable.md
│           ├── declaring-and-initializing.md
│           ├── var-vs-let.md
│           └── ...
│
├── projects/                   # Practice project source code
│   └── todolist/               # One subfolder per project
│       ├── index.html
│       ├── script.js
│       └── refactor-note-*.md  # Auto-generated refactor documentation
│
├── templates/                  # Obsidian note templates
│
├── cheat-sheet.md              # Central quick-reference for patterns & snippets
├── CLAUDE.md                   # AI Mentor instruction set (system prompt)
└── README.md                   # This file
```

---

## ⚙️ How It Works

### The Three-Layer System

```
raw/  ──(AI Ingest)──►  wiki/  ──(Obsidian)──►  Your Brain
```

1. **Layer 1 — `raw/`**: You drop in raw learning material here (copied notes, articles, documentation). These files are **never modified** — they are the single source of truth.

2. **Layer 2 — `wiki/`**: The AI Mentor reads the `raw/` source and transforms it into clean, atomic, interlinked Markdown pages. Each concept gets its own page. Related pages link to each other using Obsidian's `[[wiki-link]]` syntax.

3. **Layer 3 — Obsidian**: You open this repository as an Obsidian Vault. The `wiki/` pages become a navigable knowledge graph. You can see connections between concepts visually, search instantly, and review everything in one place.

---

### The AI Mentor (Claude + `CLAUDE.md`)

The `CLAUDE.md` file at the root is the **system prompt** that configures the AI's behavior. It defines:

- **Role**: Senior Full-stack JavaScript Mentor and Technical Librarian.
- **Language**: All explanations are written in **Burmese**; technical terms stay in English.
- **Tech Stack**: JavaScript (ES6+) → TypeScript → React → Node.js.
- **Workflow**: How to ingest raw material, structure wiki pages, and update the index.

When you open this project in an AI-powered editor (like Zed with Claude), the AI reads `CLAUDE.md` and automatically follows these rules in every interaction.

---

### Ingest Workflow (Raw → Wiki)

When you provide a raw document, the AI Mentor follows this process:

```
1. Read     → Processes the full source from raw/
2. Mirror   → Creates matching folder structure in wiki/
3. Organize → Breaks large topics into atomic concept pages
4. Link     → Connects related pages with [[wiki-links]]
5. Update   → Adds new entries to wiki/index.md and wiki/log.md
```

---

## ✨ Key Features

### `cheat-sheet.md` — Living Quick Reference
A single file that accumulates reusable patterns, snippets, and gotchas as you learn. Triggered by the `/cheat` command or automatically when the AI finds highly reusable logic.

**Example entries:**
- `typeof` usage patterns
- `const` vs `let` golden rules
- `var` vs `let` hoisting comparison
- String vs Number coercion gotchas

### `/refactor [file-path]` Command
Ask the AI to review any project file. It will:
1. Analyze the code against modern ES6+ standards.
2. Suggest improvements (Clean Code, performance, readability).
3. Auto-generate a `refactor-note-[date].md` in the same project folder with a Before/After comparison.

### `wiki/log.md` — Operation Log
An append-only record of every wiki update. Lets you track the history of what was learned and when.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Knowledge Interface | [Obsidian](https://obsidian.md) |
| AI Mentor | Claude (via Zed Editor or API) |
| Languages | JavaScript (ES6+), TypeScript |
| Frontend | React, Tailwind CSS |
| Backend | Node.js (Express / NestJS) |
| Version Control | Git + GitHub |

---

## 🚀 Setup Guide

### Prerequisites
- [Obsidian](https://obsidian.md/download) installed on your machine.
- [Git](https://git-scm.com/) installed and configured.
- [Zed Editor](https://zed.dev/) (or any editor with Claude AI integration) for AI Mentor features.

### 1. Clone the Repository

```sh
git clone https://github.com/Min-ThantKyaw/Javascript-LLM-Wiki-with-obsidian.git
cd Javascript-LLM-Wiki-with-obsidian
```

### 2. Open as an Obsidian Vault

1. Launch Obsidian.
2. Click **"Open folder as vault"**.
3. Select the cloned `javascript/` directory.
4. Obsidian will index all Markdown files and build the knowledge graph automatically.

### 3. Enable the AI Mentor

Open the project in **Zed Editor**. The `CLAUDE.md` file is automatically picked up as the project's AI instruction set. Start chatting with the AI to ingest new material, get explanations, or request project reviews.

### 4. Configure Git Identity (First-Time Setup)

```sh
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

For pushing to GitHub, use a **Personal Access Token (PAT)** with `repo` scope:
- GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token.
- Use the token as your password when prompted during `git push`.

---

## 📋 Obsidian Recommended Plugins

| Plugin | Purpose |
|---|---|
| **Dataview** | Query wiki pages like a database |
| **Calendar** | Track daily learning entries |
| **Graph View** | Visualize concept connections (built-in) |
| **Templates** | Use the `templates/` folder for consistent note structure |

---

## 📌 Conventions

- All wiki filenames use `kebab-case.md`.
- Files in `raw/` are **immutable** — never edit them directly.
- Every project lives in its own isolated subfolder under `projects/`.
- Technical terms (Hook, Middleware, Component, State, etc.) are **never translated** — they stay in English throughout all notes.

---

## 🗺️ Learning Roadmap

```
Vanilla JavaScript (ES6+)
    └── Variables, Functions, Arrays, Objects
    └── DOM Manipulation, Events
    └── Asynchronous JS (Callbacks, Promises, async/await)
        └── TypeScript
            └── Types, Interfaces, Generics
                └── React
                    └── Components, Hooks, Context, State Management
                        └── Node.js
                            └── Express / NestJS, REST APIs, Authentication
```

Progress is tracked in `wiki/index.md`. Completed topics have wiki pages; upcoming topics are marked *Coming soon*.

---

*Built with curiosity. Maintained with discipline.*
