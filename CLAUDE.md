# AI-Blog-Website Project Rules for Claude

## 🚨 CRITICAL RULES - MUST FOLLOW

### 1. ALWAYS USE MCP SERVERS
**⚠️ MANDATORY: Always use MCP (Model Context Protocol) servers when available!**

When working on this project, you MUST:
- **ALWAYS use `mcp__context7__` tools** for fetching documentation and best practices
- **ALWAYS use `mcp__filesystem__` tools** when available for file operations
- **NEVER use basic tools when MCP alternatives exist**

Available MCP servers:
- `context7` - For documentation and code examples
  - `mcp__context7__resolve-library-id`
  - `mcp__context7__get-library-docs`
- `filesystem` - For file operations
  - `mcp__filesystem__create_directory`
  - `mcp__filesystem__list_directory`
  - `mcp__filesystem__directory_tree`
  - `mcp__filesystem__read_text_file`
  - `mcp__filesystem__edit_file`

### 2. Code Quality Standards
- **NO rushing** - Take time to understand issues deeply
- **HIGH QUALITY ONLY** - Provide only production-ready solutions
- **TEST thoroughly** - Always verify fixes work correctly
- **CLEAR CACHE** - Always clear cache after making changes:
  ```bash
  rm -rf .next && rm -rf node_modules/.cache
  ```

### 3. Spacing and Layout Rules
- **Fixed navbar requires padding-top** on first content element (64px / pt-16)
- **NO spacer divs** after fixed navbar
- **Proper spacing between sections** - Use consistent padding (py-16 or pt-20 pb-16)
- **Visual hierarchy** - Ensure elements have breathing room

### 4. Development Workflow
1. **Kill all processes properly** before starting new servers
2. **Use port 3000** as default
3. **Hard refresh browser** after changes (Cmd+Shift+R)
4. **Check screenshots carefully** - Look at ALL spacing issues before fixing

### 5. Communication
- **Listen to user feedback** - If user says something isn't fixed, believe them
- **Check screenshots thoroughly** - Look at all elements mentioned
- **Acknowledge mistakes** - Don't pretend fixes worked if they didn't

## Project-Specific Information

### Tech Stack
- Next.js 14.2.0
- TypeScript
- Tailwind CSS
- Dark mode (forced)

### Key Components
- Navbar: Fixed position, 64px height (h-16)
- Hero sections: Need pt-16 or pt-20 for navbar clearance
- Sticky elements: Use top-16 to account for navbar

### Common Issues & Solutions
1. **Extra space below navbar**: Remove spacer divs, use padding-top instead
2. **Cramped layout**: Increase py-* values, add mt-* between sections
3. **Cache issues**: Always clear .next folder and restart server

## Remember
**QUALITY OVER SPEED** - Take time to do things right!
**USE MCP SERVERS** - They provide better context and tools!
**TEST EVERYTHING** - Verify all fixes actually work!