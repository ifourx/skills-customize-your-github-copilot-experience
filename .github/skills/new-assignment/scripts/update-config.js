#!/usr/bin/env node

/**
 * update-config.js
 *
 * Registers a new assignment in config.json so it appears on the website.
 *
 * Usage:
 *   node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"
 *
 * Example:
 *   node .github/skills/new-assignment/scripts/update-config.js recursion "Recursion" "Recursive functions and backtracking"
 */

const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '..', '..', '..', '..', 'config.json');

// ── Parse arguments ────────────────────────────────────────────────
const [,, id, title, description] = process.argv;

if (!id || !title || !description) {
  console.error('Usage: node update-config.js <id> "<title>" "<description>"');
  process.exit(1);
}

// ── Read existing config ───────────────────────────────────────────
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// ── Check for duplicate id ─────────────────────────────────────────
if (config.assignments.some((a) => a.id === id)) {
  console.error(`Error: Assignment with id "${id}" already exists in config.json.`);
  process.exit(1);
}

// ── Generate due date (2 weeks from today) ─────────────────────────
const due = new Date();
due.setDate(due.getDate() + 14);
const dueDate = due.toISOString().split('T')[0];

// ── Build and append new entry ─────────────────────────────────────
const entry = {
  id,
  title,
  description,
  path: `assignments/${id}`,
  dueDate,
};

config.assignments.push(entry);

// ── Write back ─────────────────────────────────────────────────────
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');

console.log(`✓ Added assignment "${id}" to config.json (due: ${dueDate})`);
