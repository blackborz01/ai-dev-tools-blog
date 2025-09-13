'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Code, Zap, Brain, Rocket, Target, GitBranch, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Lock, AlertTriangle, Search, Settings, CheckCircle2, FileSearch, Bug } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const semgrepData = {
  name: 'Semgrep',
  tagline: 'AI-powered static analysis for secure code at scale',
  description: 'Semgrep is an extensible developer-friendly application security platform that combines AI-assisted SAST, SCA, and Secrets Detection to find and fix vulnerabilities faster. Trusted by security teams at Snowflake, Figma, and GitLab.',
  url: 'https://semgrep.dev',
  category: 'Security & Code Analysis',
  logo: '/logos/semgrep.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Community',
        price: '$0',
        features: [
          'Up to 10 contributors',
          'Open-source SAST engine',
          '20,000+ detection rules',
          'Local scanning only',
          'CLI and CI integration',
          'Community support',
          'GitHub integration'
        ]
      },
      {
        name: 'Teams',
        price: 'Per contributor',
        features: [
          'Everything in Community',
          'AI noise reduction (20% less)',
          'Cross-file dataflow analysis',
          'Supply Chain (SCA) scanning',
          'Secrets Detection',
          'Private rule publishing',
          'Priority support',
          'Semgrep Assistant AI'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Teams',
          'Custom deployment options',
          'White glove onboarding',
          'Dedicated support team',
          'Roadmap influence',
          'Custom rule development',
          'SSO & advanced security',
          'SLA guarantees'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Managed Scans',
        price: 'Add-on',
        features: [
          'Cloud-based scanning',
          'No CI configuration needed',
          'Automatic updates',
          'Centralized management',
          'Advanced reporting',
          'Team analytics',
          'Compliance tracking'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'AI-Powered Noise Reduction',
      description: 'Semgrep Assistant reduces false positives by ~20% and provides step-by-step remediation guidance that developers find actionable >80% of the time.'
    },
    {
      icon: Shield,
      title: 'Triple Threat Detection',
      description: 'Comprehensive security with SAST for code vulnerabilities, SCA for dependencies, and Secrets Detection in a single platform.'
    },
    {
      icon: Zap,
      title: '10-Second CI Scans',
      description: 'Median CI scan time is just 10 seconds. Even advanced dataflow analyses run faster than a developer\'s commit flow.'
    },
    {
      icon: Code,
      title: '30+ Languages',
      description: 'Support for Python, JavaScript, Go, Java, C++, Ruby, Rust, TypeScript, Kotlin, Swift, PHP, and 20+ more languages.'
    },
    {
      icon: FileSearch,
      title: 'Cross-File Analysis',
      description: 'Advanced dataflow reachability reduces false positives by 25% and increases true positive detection by 250%.'
    },
    {
      icon: Package,
      title: 'Supply Chain Security',
      description: 'Reduces false positives in dependency vulnerabilities by up to 98% with reachability analysis across 15 package managers.'
    }
  ],

  comparisons: [
    {
      feature: 'AI Assistance',
      tool: 'Built-in Assistant',
      competitors: { 'SonarQube': 'Limited', 'Snyk': 'Available', 'Checkmarx': 'Add-on' }
    },
    {
      feature: 'Scan Speed',
      tool: '10 seconds median',
      competitors: { 'SonarQube': 'Minutes', 'Snyk': '1-2 minutes', 'Checkmarx': '5+ minutes' }
    },
    {
      feature: 'Language Support',
      tool: '30+ languages',
      competitors: { 'SonarQube': '29 languages', 'Snyk': '14 languages', 'Checkmarx': '25+ languages' }
    },
    {
      feature: 'False Positive Rate',
      tool: '-25% with AI',
      competitors: { 'SonarQube': 'Standard', 'Snyk': 'Standard', 'Checkmarx': 'Standard' }
    },
    {
      feature: 'Free Tier',
      tool: '10 contributors',
      competitors: { 'SonarQube': 'Community edition', 'Snyk': '200 tests/month', 'Checkmarx': 'No free tier' }
    },
    {
      feature: 'Custom Rules',
      tool: 'Easy YAML syntax',
      competitors: { 'SonarQube': 'Java required', 'Snyk': 'Limited', 'Checkmarx': 'Complex' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Version Control', icon: '🔗', description: 'PR comments and checks' },
    { name: 'GitLab', category: 'Version Control', icon: '🦊', description: 'Merge request integration' },
    { name: 'Jenkins', category: 'CI/CD', icon: '🔧', description: 'Pipeline integration' },
    { name: 'CircleCI', category: 'CI/CD', icon: '⭕', description: 'Orb available' },
    { name: 'VS Code', category: 'IDE', icon: '💻', description: 'Extension available' },
    { name: 'Slack', category: 'Communication', icon: '💬', description: 'Alert notifications' },
    { name: 'Jira', category: 'Issue Tracking', icon: '📋', description: 'Ticket creation' },
    { name: 'Docker', category: 'Container', icon: '🐳', description: 'Container scanning' }
  ],

  reviews: [
    {
      author: 'David Martinez',
      role: 'Security Engineer',
      company: 'Snowflake',
      rating: 5,
      comment: 'The AI-powered remediation guidance has cut our vulnerability resolution time in half. Developers actually fix issues now.',
      verified: true
    },
    {
      author: 'Lisa Thompson',
      role: 'DevSecOps Lead',
      company: 'Figma',
      rating: 5,
      comment: 'Fastest SAST tool we\'ve tested. 10-second scans mean developers actually wait for results instead of skipping security.',
      verified: true
    },
    {
      author: 'James Wilson',
      role: 'Principal Engineer',
      company: 'GitLab',
      rating: 4,
      comment: 'The cross-file analysis catches issues other tools miss. Custom rule creation is surprisingly simple.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://semgrep.dev/docs',
    github: 'https://github.com/semgrep/semgrep',
    discord: 'https://r2c.dev/slack',
    youtube: 'https://youtube.com/@semgrep',
    blog: 'https://semgrep.dev/blog'
  },

  faqs: [
    {
      question: 'How is Semgrep different from SonarQube?',
      answer: 'Semgrep offers faster scans (10 seconds vs minutes), AI-powered noise reduction that cuts false positives by 20%, easier custom rule creation with YAML syntax, and a more generous free tier with 10 contributors. SonarQube has broader IDE integration but requires more setup and maintenance.'
    },
    {
      question: 'Does my code leave my environment?',
      answer: 'No, if you use local or CI scanning, your code never leaves your environment. Only metadata about scan results is sent to Semgrep. With optional Managed Scans, code is temporarily cloned for scanning then immediately destroyed.'
    },
    {
      question: 'What is a contributor in pricing?',
      answer: 'A contributor is someone who made a commit to your organization\'s private repository scanned by Semgrep in the past 90 days. This rolling window means you only pay for active developers.'
    },
    {
      question: 'Can I write custom rules?',
      answer: 'Yes! Semgrep has one of the easiest custom rule syntaxes. Rules are written in YAML with patterns that look like source code. No need to learn complex query languages or AST manipulation.'
    },
    {
      question: 'How accurate is the AI Assistant?',
      answer: 'Semgrep Assistant reduces false positives by ~20% and provides remediation guidance that developers find actionable over 80% of the time. It uses contextual analysis to understand your specific codebase patterns.'
    },
    {
      question: 'What languages are best supported?',
      answer: 'While Semgrep supports 30+ languages, it has exceptional support for Python, JavaScript/TypeScript, Go, Java, and Ruby with the most comprehensive rule sets and deepest analysis capabilities.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://semgrep.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Semgrep</a> revolutionizes application security as an AI-powered static analysis platform that combines SAST, SCA, and Secrets Detection to eliminate vulnerabilities at developer speed. Unlike traditional tools like <Link href="/tools/sonarqube" className="text-purple-400 hover:text-purple-300">SonarQube</Link> or <Link href="/tools/checkmarx" className="text-purple-400 hover:text-purple-300">Checkmarx</Link>, Semgrep achieves median CI scan times of just 10 seconds while supporting 30+ languages including <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Python</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">JavaScript</a>, <a href="https://go.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Go</a>, and <a href="https://www.rust-lang.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Rust</a>, making it the fastest enterprise SAST solution trusted by <a href="https://www.snowflake.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Snowflake</a>, <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Figma</a>, and <a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitLab</a>.
      </p>
      
      <p className="text-lg leading-relaxed">
        Powered by advanced AI through Semgrep Assistant, this developer-friendly platform reduces false positives by 20% while increasing true positive detection by 250% through cross-file dataflow analysis. Starting free for up to 10 contributors with access to 20,000+ proprietary detection rules, Semgrep transforms security from a bottleneck into an enabler—with remediation guidance developers find actionable over 80% of the time. As the most popular open-source SAST engine on <a href="https://github.com/semgrep/semgrep" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</a> with millions of developer users, Semgrep bridges the gap between security and development teams through <Link href="/agents" className="text-purple-400 hover:text-purple-300">AI-assisted vulnerability detection</Link> that integrates seamlessly into modern <a href="https://www.jenkins.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">CI/CD pipelines</a> and <Link href="/tools" className="text-purple-400 hover:text-purple-300">developer workflows</Link>.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Semgrep?',
    segments: [
      {
        name: 'Security Teams',
        description: 'AppSec teams use {toolData.name} to scale security reviews and reduce vulnerability backlog with AI-powered triage.',
        icon: Shield,
        stats: '98% less false positives'
      },
      {
        name: 'DevOps Engineers',
        description: 'DevOps teams integrate {toolData.name} into CI/CD pipelines for shift-left security without slowing deployments.',
        icon: Rocket,
        stats: '10-second scans'
      },
      {
        name: 'Software Developers',
        description: 'Developers use {toolData.name} IDE extensions and PR comments to fix vulnerabilities before code review.',
        icon: Code,
        stats: '80% actionable fixes'
      },
      {
        name: 'Enterprise Organizations',
        description: 'Fortune 500 companies deploy {toolData.name} for comprehensive AppSec across thousands of repositories.',
        icon: Building2,
        stats: 'Millions of users'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Semgrep Unique?',
    points: [
      {
        title: 'Lightning Fast Analysis',
        description: 'Median scan time of 10 seconds makes {toolData.name} the fastest enterprise SAST tool, enabling true shift-left security.',
        icon: Zap
      },
      {
        title: 'AI That Actually Helps',
        description: 'Semgrep Assistant doesn\'t just find issues—it provides remediation guidance developers find actionable 80% of the time.',
        icon: Brain
      },
      {
        title: 'Pattern-Based Rules',
        description: 'Write custom rules that look like source code, not complex queries. The easiest rule syntax in the industry.',
        icon: Search
      },
      {
        title: 'Cross-File Intelligence',
        description: 'Advanced dataflow analysis tracks vulnerabilities across files and functions, catching what other tools miss.',
        icon: FileSearch
      },
      {
        title: 'Developer-First Design',
        description: 'Built by developers for developers. No security expertise required to understand and fix issues.',
        icon: Code
      }
    ]
  }
}

export default function SemgrepPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={semgrepData} />
    </>
  )
}