'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, Server, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const codewhispererData = {
  name: 'Amazon CodeWhisperer',
  tagline: 'Now Amazon Q Developer - AWS-optimized AI coding assistant with security scanning',
  description: 'Amazon CodeWhisperer evolved into Amazon Q Developer in 2024, expanding from code completion to autonomous agents. Features AWS-optimized suggestions, security vulnerability scanning, and deep integration with AWS services.',
  url: 'https://aws.amazon.com/codewhisperer',
  category: 'AI Code Assistant',
  logo: '/logos/codewhisperer.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free Tier',
        price: '$0',
        features: [
          'Code suggestions & completion',
          'Reference tracking',
          '50 security scans/month',
          '50 agent requests/month',
          '1,000 LOC transforms/month',
          'AWS Builder ID access',
          'Basic IDE support'
        ],
        highlighted: true
      },
      {
        name: 'Q Developer Pro',
        price: '$19',
        features: [
          'Everything in Free',
          '1,000 agent requests/month',
          '4,000 LOC transforms/month',
          'SSO with IAM Identity Center',
          'Admin dashboards',
          'IP indemnity protection',
          'Priority AWS support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: 'Volume pricing',
        features: [
          'All Pro features',
          'Unlimited users',
          'Custom policy controls',
          'Usage analytics',
          'Compliance certifications',
          'Private code base training',
          'Contact AWS sales'
        ]
      },
      {
        name: 'Overage Pricing',
        price: '$0.003/LOC',
        features: [
          'Additional transformations',
          'Beyond 4,000 LOC/month',
          'Aggregated at payer level',
          'Java/.NET upgrades',
          'Legacy code migration',
          'Automatic billing',
          'No commitment required'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: Bot,
      title: 'Autonomous Agents',
      description: 'Q Developer agents handle multi-step tasks like feature implementation, refactoring, and dependency upgrades.'
    },
    {
      icon: Cloud,
      title: 'AWS-Optimized',
      description: 'Deep integration with AWS services, APIs, and best practices. Generates CloudFormation, CDK, and Lambda code.'
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Identifies vulnerabilities in real-time. Scans for OWASP Top 10, crypto issues, and AWS security best practices.'
    },
    {
      icon: RefreshCw,
      title: 'Code Transformation',
      description: 'Automated Java 8→17 and .NET Framework→Core migrations. Handles entire codebases with minimal manual effort.'
    },
    {
      icon: Database,
      title: 'Reference Tracking',
      description: 'Flags code similar to open-source training data with license information to avoid IP issues.'
    },
    {
      icon: Package,
      title: 'Multi-IDE Support',
      description: 'Works in VS Code, JetBrains, Visual Studio, AWS Cloud9, Eclipse, and command line interfaces.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free / $19 Pro',
      competitors: { 'GitHub Copilot': '$10 / $19', 'Tabnine': '$12 / $39', 'Codeium': '$0 / $15' }
    },
    {
      feature: 'AWS Integration',
      tool: 'Native & Deep',
      competitors: { 'GitHub Copilot': 'Limited', 'Tabnine': 'None', 'Codeium': 'None' }
    },
    {
      feature: 'Security Scanning',
      tool: '50-1000/month',
      competitors: { 'GitHub Copilot': 'Basic', 'Tabnine': 'No', 'Codeium': 'No' }
    },
    {
      feature: 'Agent Capabilities',
      tool: 'Advanced',
      competitors: { 'GitHub Copilot': 'Yes', 'Tabnine': 'No', 'Codeium': 'Basic' }
    },
    {
      feature: 'Code Migration',
      tool: 'Java/.NET',
      competitors: { 'GitHub Copilot': 'No', 'Tabnine': 'No', 'Codeium': 'No' }
    },
    {
      feature: 'Compliance',
      tool: 'SOC/HIPAA/PCI',
      competitors: { 'GitHub Copilot': 'SOC 2', 'Tabnine': 'SOC 2', 'Codeium': 'SOC 2' }
    }
  ],

  integrations: [
    { name: 'VS Code', category: 'IDE', icon: '📝', description: 'AWS Toolkit' },
    { name: 'JetBrains', category: 'IDE', icon: '🧩', description: 'Full suite' },
    { name: 'AWS Lambda', category: 'AWS', icon: '⚡', description: 'Serverless' },
    { name: 'EC2', category: 'AWS', icon: '🖥️', description: 'Compute' },
    { name: 'S3', category: 'AWS', icon: '🪣', description: 'Storage' },
    { name: 'DynamoDB', category: 'AWS', icon: '🗄️', description: 'Database' },
    { name: 'CloudFormation', category: 'IaC', icon: '📋', description: 'Templates' },
    { name: 'CDK', category: 'IaC', icon: '🔧', description: 'Infrastructure' }
  ],

  reviews: [
    {
      author: 'AWS Architect',
      role: 'Solutions Architect',
      company: 'Enterprise Corp',
      rating: 5,
      comment: 'The AWS integration is unmatched. Q Developer agents save hours on CloudFormation templates and Lambda functions. Free tier is generous.',
      verified: true
    },
    {
      author: 'DevOps Engineer',
      role: 'Platform Lead',
      company: 'FinTech Startup',
      rating: 5,
      comment: 'Security scanning caught critical vulnerabilities before production. Java migration feature modernized our legacy codebase in days, not months.',
      verified: true
    },
    {
      author: 'Full-Stack Developer',
      role: 'Senior Engineer',
      company: 'SaaS Company',
      rating: 4,
      comment: 'Excellent for AWS projects. The evolution to Q Developer added powerful agent capabilities. Wish it had better support for non-AWS clouds.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.aws.amazon.com/codewhisperer',
    qDeveloper: 'https://aws.amazon.com/q/developer',
    toolkit: 'https://aws.amazon.com/toolkit-for-vscode',
    pricing: 'https://aws.amazon.com/q/developer/pricing',
    migration: 'https://docs.aws.amazon.com/codewhisperer/latest/userguide/whisper-legacy.html'
  },

  faqs: [
    {
      question: 'What happened to Amazon CodeWhisperer?',
      answer: 'As of April 30, 2024, Amazon CodeWhisperer became part of Amazon Q Developer. All CodeWhisperer features—code suggestions, reference tracking, and security scans—are preserved and enhanced in Q Developer. The transition added autonomous agents, chat capabilities, and expanded AWS integration. Existing users were automatically migrated with no disruption to service.'
    },
    {
      question: 'How does the free tier compare to GitHub Copilot?',
      answer: 'CodeWhisperer/Q Developer\'s free tier is remarkably generous: unlimited code suggestions, 50 security scans/month, and 50 agent requests/month with just an AWS Builder ID (no AWS account required). GitHub Copilot has no free tier for individuals. The free version is fully functional for individual developers, making it ideal for personal projects, learning AWS, or evaluating before upgrading to Pro.'
    },
    {
      question: 'What are Q Developer agents and how do they work?',
      answer: 'Q Developer agents are autonomous AI assistants that handle multi-step development tasks. You can ask them to "add a favorites button to my app" or "upgrade this Java 8 code to Java 17," and they\'ll analyze your codebase, create a plan, generate code, write tests, and implement changes across multiple files. Unlike simple code completion, agents understand context and can perform complex refactoring autonomously.'
    },
    {
      question: 'Is Q Developer Pro worth $19/month for AWS developers?',
      answer: 'For AWS-heavy development, absolutely. Pro offers 1,000 agent requests/month (vs. 50 free), 4,000 lines of code transformation (vs. 1,000), SSO integration, admin controls, and IP indemnity. The automated Java/.NET migrations alone can save weeks of work. Teams report 40% faster AWS development with Pro\'s enhanced limits and enterprise features.'
    },
    {
      question: 'How does security scanning work?',
      answer: 'Q Developer scans code in real-time as you write, identifying vulnerabilities based on OWASP Top 10, crypto best practices, and AWS security standards. It provides fix suggestions with explanations. Free tier includes 50 scans/month; Pro offers more. Scans cover Python, Java, JavaScript, TypeScript, C#, and more. It\'s particularly strong at catching AWS IAM permission issues and exposed credentials.'
    },
    {
      question: 'Can I use CodeWhisperer/Q Developer outside of AWS?',
      answer: 'Yes, but with limitations. While optimized for AWS services, Q Developer works for general programming in any environment. It supports 15+ languages and all major frameworks. However, its true strength lies in AWS integration—generating CloudFormation templates, Lambda functions, and AWS SDK code. For non-AWS projects, alternatives like GitHub Copilot or Cursor might offer better general-purpose support.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://aws.amazon.com/codewhisperer" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Amazon CodeWhisperer</a>, now evolved into <a href="https://aws.amazon.com/q/developer" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Amazon Q Developer</a>, represents AWS's comprehensive answer to AI-powered development. Launched in 2022 and transformed in April 2024, it expanded from a code completion tool to a full-featured development assistant with autonomous agents. The platform's deep integration with <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">AWS services</a> makes it indispensable for cloud-native development, offering AWS-optimized code suggestions, security vulnerability scanning, and automated code transformation capabilities. Unlike <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">GitHub Copilot</Link>'s general approach or <Link href="/tools/tabnine" className="text-purple-400 hover:text-purple-300">Tabnine</Link>'s privacy focus, CodeWhisperer/Q Developer excels at AWS-specific tasks like generating CloudFormation templates, Lambda functions, and IAM policies with best practices built-in.
      </p>
      
      <p className="text-lg leading-relaxed">
        The generous free tier sets it apart from competitors, offering unlimited code suggestions and 50 security scans monthly with just an email address—no credit card required. The Pro tier at $19/month matches <Link href="/tools/cursor" className="text-purple-400 hover:text-purple-300">Cursor</Link>'s pricing while delivering unique capabilities: automated Java 8-to-17 and .NET Framework-to-Core migrations that can modernize entire codebases, real-time security scanning that catches OWASP Top 10 vulnerabilities, and Q Developer agents that autonomously implement features across multiple files. With support for <a href="https://docs.aws.amazon.com/toolkit-for-vscode" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a>, JetBrains IDEs, and command-line interfaces, plus compliance certifications for SOC, HIPAA, and PCI environments, Amazon CodeWhisperer/Q Developer has become the definitive AI assistant for AWS development. While <Link href="/tools/gemini-code-assist" className="text-purple-400 hover:text-purple-300">Gemini Code Assist</Link> offers Google Cloud integration and <Link href="/tools/codeium-editor" className="text-purple-400 hover:text-purple-300">Codeium</Link> provides free unlimited completions, neither matches the depth of AWS ecosystem integration and enterprise-grade security features that make CodeWhisperer essential for teams building on AWS infrastructure.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Amazon CodeWhisperer?',
    segments: [
      {
        name: 'AWS Developers',
        description: 'Engineers building on AWS leveraging deep service integration and best practices.',
        icon: Cloud,
        stats: 'AWS-optimized'
      },
      {
        name: 'Enterprise Teams',
        description: 'Organizations needing SOC/HIPAA/PCI compliance with security scanning.',
        icon: Building2,
        stats: 'Compliance ready'
      },
      {
        name: 'DevOps Engineers',
        description: 'Teams automating infrastructure with CloudFormation and CDK generation.',
        icon: Server,
        stats: 'IaC automation'
      },
      {
        name: 'Migration Teams',
        description: 'Developers modernizing Java 8 and .NET Framework legacy applications.',
        icon: RefreshCw,
        stats: '4,000 LOC/month'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes CodeWhisperer Unique?',
    points: [
      {
        title: 'AWS Native',
        description: 'Deepest integration with AWS services, APIs, and best practices.',
        icon: Cloud
      },
      {
        title: 'Free & Generous',
        description: 'Best free tier in the industry with unlimited suggestions, no credit card.',
        icon: Sparkles
      },
      {
        title: 'Security First',
        description: 'Real-time vulnerability scanning with automated fix suggestions.',
        icon: Shield
      },
      {
        title: 'Code Migration',
        description: 'Automated Java and .NET modernization saves weeks of manual work.',
        icon: RefreshCw
      },
      {
        title: 'Q Developer Evolution',
        description: 'Expanded to autonomous agents that implement entire features.',
        icon: Bot
      }
    ]
  }
}

export default function AmazonCodeWhispererPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={codewhispererData} />
    </>
  )
}