# CLAUDE DESKTOP PROJECT CONTEXT & INSTRUCTIONS

## PROJECT OVERVIEW
**Project**: AI Dev Tools Blog (SEO-optimized blog platform)
**Location**: `/Users/faridmuradov/Desktop/ai-dev-tools-blog`
**Type**: Next.js 14 blog with TypeScript, Tailwind CSS
**Purpose**: High-traffic SEO blog about AI coding tools, MCP servers, productivity

## CRITICAL INSTRUCTIONS FOR CLAUDE

### 1. ALWAYS USE SEQUENTIAL THINKING
```
MANDATORY: Use sequential-thinking MCP for EVERY task:
- Break down complex tasks into steps
- Think through problems systematically
- Don't skip steps or make assumptions
- Complete one task fully before moving to next
```

### 2. PROJECT STRUCTURE
```
/src/lib/articles.ts - Main articles array (5 completed articles)
/src/app/blog/[slug]/page.tsx - Article display page
/public/ - Images and static assets
```

### 3. COMPLETED ARTICLES (DON'T RECREATE)
1. ✅ ai-makes-developers-slower
2. ✅ mcp-servers-not-connecting-claude-complete-troubleshooting-guide  
3. ✅ the-70-percent-problem-ai-code-almost-there
4. ✅ ai-security-vulnerabilities-hidden-crisis
5. ✅ context-blindness-ai-missing-65-percent

### 4. SEO BLOG WRITING AGENT
**File**: `/Users/faridmuradov/Desktop/ai-dev-tools-blog/seo-content-writer-agent.md`

This agent contains:
- Complete blog writing framework
- SEO optimization rules
- Content structure templates
- Backlink strategies (UPDATED)
- 25 blog topics list

**USE THIS AGENT FOR ALL NEW ARTICLES**

### 5. BACKLINK STRATEGY (CRITICAL)
Internal links to include in EVERY article:
- `/blog/ai-makes-developers-slower`
- `/blog/mcp-servers-not-connecting-claude-complete-troubleshooting-guide`
- `/blog/the-70-percent-problem-ai-code-almost-there`
- `/blog/ai-security-vulnerabilities-hidden-crisis`
- `/blog/context-blindness-ai-missing-65-percent`

### 6. MCP SERVERS TO USE
- **sequential-thinking**: ALWAYS use for planning
- **filesystem**: Read/write project files
- **memory**: Track completed work
- **brave-search**: Research current AI tool information

### 7. WORKING PROCESS
```
1. START: Use sequential-thinking to plan
2. CHECK: Read articles.ts to see what exists
3. REFERENCE: Read seo-content-writer-agent.md for guidelines
4. CREATE: Write new article following the framework
5. ADD: Insert into articles.ts maintaining structure
6. VERIFY: Ensure no duplicates, proper TypeScript syntax
```

### 8. ARTICLE REQUIREMENTS
- Length: 3,000+ words minimum
- Include: Table of contents, author bio, related articles
- Format: HTML in template literals (escape special characters)
- Images: Use Unsplash URLs with proper dimensions
- SEO: Focus keywords in title, headers, first paragraph

### 9. COMMON ISSUES TO AVOID
❌ DON'T create duplicate slugs
❌ DON'T break TypeScript syntax
❌ DON'T use invalid HTML in content
❌ DON'T forget to escape quotes in template literals
❌ DON'T skip sequential thinking

### 10. RESPONSE FORMAT
**Keep responses SHORT and INFORMATIVE:**
```
✅ Task completed: [what was done]
📁 File updated: [which file]
🔗 New article: [slug]
⚠️ Any issues: [if any]
```

**NO LONG EXPLANATIONS AFTER TASK COMPLETION**

## EXAMPLE PROMPT FOR NEW CHAT
"Continue working on the AI Dev Tools Blog project. Check articles.ts for existing articles, then create the next article from the topic list in seo-content-writer-agent.md. Use sequential thinking to plan, follow the SEO framework, and add proper internal backlinks. Keep response brief."

## QUICK COMMANDS
- "Add next article from topic list"
- "Fix any TypeScript errors in articles.ts"
- "Update article [slug] with full content"
- "Check for duplicate slugs"
- "Verify all articles have proper backlinks"

## PROJECT STATUS
- 5/25 articles completed
- Next articles to write: Topics 6-25 from seo-content-writer-agent.md
- All articles need full content (currently have placeholders)

## REMEMBER
1. ALWAYS use sequential-thinking FIRST
2. READ seo-content-writer-agent.md for guidelines
3. CHECK articles.ts before adding new content
4. MAINTAIN TypeScript/Next.js compatibility
5. KEEP responses SHORT and INFORMATIVE

---
Last Updated: January 2025
Project Owner: Farid Muradov
