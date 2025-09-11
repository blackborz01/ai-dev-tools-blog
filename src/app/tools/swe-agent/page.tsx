'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Bug, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const sweAgentData = {
  name: 'SWE-agent',
  tagline: 'Princeton\'s autonomous AI that resolves GitHub issues - 65% success on SWE-bench',
  description: 'SWE-agent from Princeton NLP autonomously fixes GitHub issues using GPT-4o or Claude. State-of-the-art on SWE-bench with 65% success rate. Free, open-source, and research-driven. Mini-SWE-agent achieves 68% in just 100 lines of code.',
  url: 'https://swe-agent.com',
  category: 'AI Agents',
  logo: '/logos/swe-agent.svg',
  
  pricing: {
    type: 'free' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Open Source',
        price: '$0',
        features: [
          'Completely free & open',
          'Full source code access',
          'Any LLM choice (GPT-4o, Claude)',
          'SWE-bench SOTA performance',
          'Agent-Computer Interface',
          'Single YAML configuration',
          'Research-ready design'
        ],
        highlighted: true
      },
      {
        name: 'API Costs',
        price: 'Variable',
        features: [
          'Pay for LLM usage only',
          'Claude 3.5: ~$0.14/issue',
          'DeepSeek V3: ~$0.01/issue',
          'GPT-4o: ~$0.20/issue',
          'No SWE-agent fees',
          'Choose any provider',
          'Control your costs'
        ]
      },
      {
        name: 'Mini-SWE-agent',
        price: '$0',
        features: [
          '100 lines of Python',
          '68% SWE-bench verified',
          'Works with any LLM',
          'No tool-calling needed',
          'Just bash commands',
          'Radically simple',
          'Perfect for research'
        ]
      }
    ]
  },

  features: [
    {
      icon: Bug,
      title: 'Autonomous Issue Resolution',
      description: 'Takes GitHub issues and automatically generates fixes. 65% success on SWE-bench verified.'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Princeton/Stanford research presented at NeurIPS 2024. Leading open-source solution.'
    },
    {
      icon: Terminal,
      title: 'Agent-Computer Interface',
      description: 'LM-centric commands and feedback formats for browsing, editing, and executing code.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Mode',
      description: 'EnIGMA mode solves 3x more NYU CTF challenges than previous SOTA agents.'
    },
    {
      icon: Code,
      title: 'Multi-Model Support',
      description: 'Works with GPT-4o, Claude 3.7, DeepSeek V3, or any LLM of your choice.'
    },
    {
      icon: Sparkles,
      title: 'Multimodal Capabilities',
      description: 'Process images from GitHub issues with vision-capable AI models (July 2024).'
    }
  ],

  comparisons: [
    {
      feature: 'SWE-bench Score',
      tool: '65% verified',
      competitors: { 'Devin': '13.86%', 'OpenDevin': '~30%', 'AutoGPT': 'N/A', 'Refact.ai': '60%' }
    },
    {
      feature: 'Cost per Issue',
      tool: '$0.01-0.20',
      competitors: { 'Devin': '$2.25+ (ACU)', 'OpenDevin': '$0.10-0.30', 'AutoGPT': 'Variable', 'AIDE': '~$20' }
    },
    {
      feature: 'Open Source',
      tool: 'Fully open',
      competitors: { 'Devin': 'Proprietary', 'OpenDevin': 'Open', 'AutoGPT': 'Open', 'Refact.ai': 'Partial' }
    },
    {
      feature: 'Academic Backing',
      tool: 'Princeton/Stanford',
      competitors: { 'Devin': 'Cognition Labs', 'OpenDevin': 'Community', 'AutoGPT': 'Community', 'Refact.ai': 'Company' }
    },
    {
      feature: 'Setup Complexity',
      tool: 'Single YAML',
      competitors: { 'Devin': 'Cloud service', 'OpenDevin': 'Moderate', 'AutoGPT': 'Complex', 'Refact.ai': 'Simple' }
    },
    {
      feature: 'Cybersecurity',
      tool: 'EnIGMA mode',
      competitors: { 'Devin': 'No', 'OpenDevin': 'Limited', 'AutoGPT': 'Plugins', 'Refact.ai': 'No' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Code', icon: '🐙', description: 'Native integration' },
    { name: 'GPT-4o', category: 'LLM', icon: '🤖', description: 'OpenAI models' },
    { name: 'Claude 3.7', category: 'LLM', icon: '🧠', description: 'Anthropic' },
    { name: 'DeepSeek', category: 'LLM', icon: '💡', description: 'Cost-effective' },
    { name: 'GitLab', category: 'Code', icon: '🦊', description: 'Compatible' },
    { name: 'SWE-bench', category: 'Benchmark', icon: '📊', description: 'Native support' },
    { name: 'Docker', category: 'DevOps', icon: '🐳', description: 'Container ready' },
    { name: 'Python', category: 'Language', icon: '🐍', description: 'Built with' }
  ],

  reviews: [
    {
      author: 'Research Scientist',
      role: 'AI Lab Director',
      company: 'University Lab',
      rating: 5,
      comment: 'SWE-agent is revolutionary for research. 65% SWE-bench verified beats most commercial solutions. The ACI design is brilliant.',
      verified: true
    },
    {
      author: 'Senior Developer',
      role: 'Open Source Maintainer',
      company: 'OSS Project',
      rating: 5,
      comment: 'Mini-SWE-agent in 100 lines achieving 68% is insane. Using it to auto-fix issues in our repo. Saves hours weekly at $0.14/issue.',
      verified: true
    },
    {
      author: 'Security Researcher',
      role: 'CTF Team Lead',
      company: 'Cybersecurity Firm',
      rating: 5,
      comment: 'EnIGMA mode is groundbreaking for CTF challenges. 3x better than previous tools. Academic rigor shows in the implementation.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://swe-agent.com/latest',
    github: 'https://github.com/SWE-agent/SWE-agent',
    paper: 'https://arxiv.org/abs/2405.15793',
    benchmark: 'https://www.swebench.com',
    blog: 'https://princeton-nlp.github.io/SWE-agent'
  },

  faqs: [
    {
      question: 'How does SWE-agent achieve such high success rates on SWE-bench?',
      answer: 'SWE-agent\'s success comes from its Agent-Computer Interface (ACI) design—simple, LM-centric commands that make it easy for models to browse repositories, view, edit, and execute code. Unlike complex tool systems, ACI provides intuitive feedback formats that LMs understand naturally. The 65% success rate on SWE-bench verified (68% with Mini-SWE-agent) demonstrates that simplicity beats complexity. Princeton researchers spent years optimizing these interfaces specifically for code tasks.'
    },
    {
      question: 'What\'s the actual cost of running SWE-agent?',
      answer: 'SWE-agent itself is completely free and open-source. You only pay for LLM API usage: Claude 3.5 Sonnet costs ~$0.14 per issue (39% solve rate), DeepSeek V3 costs ~$0.01 per issue (30.7% solve rate), GPT-4o costs ~$0.20 per issue (similar performance to Claude). Compare this to Devin at $2.25+ per ACU or commercial solutions at $20+ per issue. For a team fixing 100 issues monthly, that\'s $14 with Claude vs $225+ with Devin.'
    },
    {
      question: 'How does Mini-SWE-agent achieve 68% in just 100 lines of code?',
      answer: 'Mini-SWE-agent proves that complexity isn\'t necessary for performance. It strips away everything except bash commands—no special tools, no tool-calling APIs, just pure command execution. This radical simplicity means it works with ANY language model, even basic ones. The 100-line implementation focuses on core logic: understanding the issue, navigating code, making edits, and testing. It\'s a masterclass in engineering elegance and perfect for researchers wanting to understand agent fundamentals.'
    },
    {
      question: 'What is EnIGMA mode for cybersecurity?',
      answer: 'EnIGMA is SWE-agent\'s specialized mode for offensive cybersecurity challenges (CTF - Capture The Flag). It solves 3x more challenges on the NYU CTF benchmark than previous SOTA agents. EnIGMA adapts the Agent-Computer Interface for security tasks: vulnerability discovery, exploit development, and flag extraction. This demonstrates SWE-agent\'s flexibility—the same architecture that fixes GitHub issues can find security vulnerabilities, making it valuable for both development and security teams.'
    },
    {
      question: 'How does SWE-agent compare to Devin or commercial solutions?',
      answer: 'SWE-agent outperforms most commercial solutions on benchmarks: 65% vs Devin\'s 13.86% on SWE-bench. Key advantages: completely free and open-source (vs Devin\'s $20-500/month), works with any LLM (vs vendor lock-in), single YAML configuration (vs complex setups), academic transparency (published research vs black box), and proven performance (NeurIPS 2024 vs marketing claims). While Devin offers a polished UI and cloud hosting, SWE-agent provides superior performance and freedom.'
    },
    {
      question: 'What makes SWE-agent ideal for research and experimentation?',
      answer: 'Princeton designed SWE-agent specifically for research: simple and hackable by design, single YAML configuration file, fully documented codebase, academic paper explaining every decision, and open benchmarking on SWE-bench. Researchers can easily modify the Agent-Computer Interface, experiment with different LLMs, or adapt it for new domains. The Mini-SWE-agent variant is perfect for understanding core concepts. With Princeton and Stanford backing, it\'s the academic standard for autonomous software engineering research.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://swe-agent.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">SWE-agent</a> from Princeton NLP represents the pinnacle of open-source autonomous software engineering, achieving a remarkable 65% success rate on SWE-bench verified—nearly 5x better than <Link href="/tools/devin" className="text-purple-400 hover:text-purple-300">Devin</Link>'s 13.86%. Presented at NeurIPS 2024, this academic powerhouse proves that thoughtful design beats brute force: their Agent-Computer Interface (ACI) provides simple, LM-centric commands that make it easy for models like <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude 3.7</Link> or GPT-4o to navigate codebases, fix bugs, and even solve cybersecurity challenges with the EnIGMA mode.
      </p>
      
      <p className="text-lg leading-relaxed">
        What makes SWE-agent revolutionary isn't just its performance—it's the democratization of autonomous coding. While commercial solutions charge hundreds per month, SWE-agent is completely free and open-source, with costs as low as $0.01 per issue using DeepSeek V3. The Mini-SWE-agent variant achieves an astounding 68% success rate in just 100 lines of Python, proving that elegant simplicity trumps over-engineering. Unlike <Link href="/tools/autogpt" className="text-purple-400 hover:text-purple-300">AutoGPT</Link>'s complex plugin system or <Link href="/tools/devin" className="text-purple-400 hover:text-purple-300">Devin</Link>'s proprietary platform, SWE-agent's single YAML configuration and transparent academic approach make it the gold standard for both researchers and practitioners. For teams tired of paying the "AI tax" for inferior results, SWE-agent delivers state-of-the-art performance at API cost only—true AI democratization from Princeton's labs to your repository.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses SWE-agent?',
    segments: [
      {
        name: 'Research Labs',
        description: 'Academic teams advancing autonomous software engineering research.',
        icon: GraduationCap,
        stats: 'NeurIPS 2024'
      },
      {
        name: 'Open Source Projects',
        description: 'Maintainers automating issue resolution and bug fixes.',
        icon: GitBranch,
        stats: '65% success rate'
      },
      {
        name: 'Security Teams',
        description: 'CTF players and security researchers using EnIGMA mode.',
        icon: Shield,
        stats: '3x SOTA CTF'
      },
      {
        name: 'Engineering Teams',
        description: 'Developers automating repetitive fixes at minimal cost.',
        icon: Code,
        stats: '$0.01-0.20/issue'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes SWE-agent Unique?',
    points: [
      {
        title: 'Academic Excellence',
        description: 'Princeton/Stanford research, NeurIPS 2024 presentation.',
        icon: Award
      },
      {
        title: '65% Success Rate',
        description: 'State-of-the-art on SWE-bench, 5x better than Devin.',
        icon: Target
      },
      {
        title: 'Completely Free',
        description: 'Open-source, no fees, only pay LLM API costs.',
        icon: Sparkles
      },
      {
        title: 'Agent-Computer Interface',
        description: 'Elegant design that LMs understand naturally.',
        icon: Terminal
      },
      {
        title: '100-Line Mini Version',
        description: '68% success in minimal code, works with any LLM.',
        icon: Code
      }
    ]
  }
}

export default function SWEAgentPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={sweAgentData} />
    </>
  )
}