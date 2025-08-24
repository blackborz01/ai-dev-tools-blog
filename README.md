# AI Dev Tools Daily - High-Performance Blog Platform

A cutting-edge blog platform focused on AI development tools, Model Context Protocol (MCP), Claude Code, Cursor IDE, and the latest AI coding innovations.

## 🚀 Features

- **Daily AI Tool Updates**: Automated content generation using MCP integrations
- **Tools Directory**: Comprehensive database of MCP servers, AI agents, and dev tools
- **SEO Optimized**: Built with Next.js 14+ for optimal performance and search rankings
- **Dark Mode**: Beautiful dark theme with gradient accents
- **Responsive Design**: Mobile-first approach with tailored experiences
- **Real-time Search**: Instant search across all content
- **Newsletter Integration**: Email subscription system for daily updates

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.0
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics & Speed Insights
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository** (or copy the project folder):
```bash
cd /Users/faridmuradov/Desktop/ai-dev-tools-blog
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ai-dev-tools-blog/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Homepage
│   │   ├── layout.tsx    # Root layout
│   │   ├── globals.css   # Global styles
│   │   ├── blog/         # Blog section
│   │   └── tools/        # Tools directory
│   ├── components/       # React components
│   │   └── ui/          # UI components (buttons, cards, etc.)
│   └── lib/             # Utility functions
├── public/              # Static assets
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Key Pages

- **Homepage** (`/`): Hero section with latest articles and trending tools
- **Blog** (`/blog`): All blog posts with filtering and search
- **Tools Directory** (`/tools`): Comprehensive list of AI development tools
- **MCP Servers** (`/mcp-servers`): Dedicated section for MCP servers
- **Tutorials** (`/tutorials`): Step-by-step guides and tutorials

## 🔧 MCP Integrations Used

This project was built using the following MCPs:

- **B12 Website Generator**: Initial site structure
- **Filesystem MCP**: Project file management
- **Brave Search MCP**: Content research and trending topics
- **Memory MCP**: Knowledge graph for content relationships
- **Sequential Thinking MCP**: Content planning and strategy
- **Puppeteer MCP**: Screenshot generation
- **Chrome Control MCP**: Testing and quality assurance
- **GitHub MCP**: Version control (requires authentication)
- **Figma Dev Mode MCP**: Design system extraction
- **PDF Filler MCP**: Report generation

## 🚀 Production Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. Follow the prompts to link your project and deploy

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🎯 Next Steps

1. **Set up a database** (Supabase/PostgreSQL recommended)
2. **Implement authentication** (Clerk or NextAuth)
3. **Configure email service** for newsletter
4. **Set up content management** system
5. **Integrate AI APIs** for content generation
6. **Add analytics tracking**
7. **Configure CDN** for images

## 🤝 Contributing

Feel free to customize and extend this platform for your needs!

## 📄 License

MIT License - feel free to use this project for any purpose.

---

Built with ❤️ using Model Context Protocol (MCP) integrations

<!-- preview test -->
