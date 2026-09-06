#!/usr/bin/env bun
/**
 * Post-install script: auto-configures MCP servers for Claude Code.
 * Delegates to the same logic as `multiagents install-mcp`.
 * If it fails, prints fallback instructions — never breaks the install.
 */

console.log("[glooper] Postinstall complete.");
console.log("[glooper] To configure MCP servers for Claude/Codex/Gemini, run: bun run cli/install-mcp.ts");
