'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Code, Zap, Brain, Rocket, Target, GitBranch, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Lock, AlertTriangle, Search, Settings, CheckCircle2, FileSearch, Bug, Container, Cpu, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const snykData = {
  name: 'Snyk',
  tagline: 'AI-powered developer security platform for modern application development',
  description: 'Snyk is the trusted AI-driven security platform that helps developers find, prioritize, and fix vulnerabilities in code, dependencies, containers, and cloud configurations. 2x faster scanning with 80% auto-fix accuracy.',
  url: 'https://snyk.io',
  category: 'Security & Code Analysis',
  logo: '/logos/snyk.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '200 tests per month',
          'Up to 10 developers',
          'SAST for all languages',
          'SCA vulnerability scanning',
          'Basic container scanning',
          'IDE plugins',
          'Community support'
        ]
      },
      {
        name: 'Team',
        price: '$25/user',
        features: [
          'Everything in Free',
          'Unlimited tests',
          'Priority intelligence',
          'License compliance',
          'PR checks & monitoring',
          'JIRA integration',
          'Email support',
          'Auto-fix PRs'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$98/user',
        features: [
          'Everything in Team',
          'Advanced reporting',
          'SSO & audit logs',
          'Custom policies',
          'API access',
          'Dedicated support',
          'On-premise option',
          'SLA guarantees'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Custom',
        price: 'Contact Sales',
        features: [
          'Volume discounts',
          'Custom integrations',
          'Professional services',
          'Training & certification',
          'Executive reporting',
          'Compliance automation',
          'Multi-org management'
        ],
        highlighted: false
      }
    ]
  },

  features: [
    {
      icon: Brain,
      title: 'AI-Powered Fixes',
      description: 'DeepCode AI provides 80% accurate auto-fixes in seconds. Real-time suggestions in IDE with pre-screened, validated remediation guidance.'
    },
    {
      icon: Zap,
      title: '2x Faster Scanning',
      description: 'Industry\'s fastest SAST engine. Complete project scans in seconds, not minutes. 50% faster than competitors with higher accuracy.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Security',
      description: 'SAST, SCA, container, and IaC security in one platform. Cover code, dependencies, containers, and cloud configurations.'
    },
    {
      icon: Package,
      title: 'World\'s Best Vuln DB',
      description: 'Most comprehensive vulnerability database with 2.8M+ advisories. 60 days faster disclosure than NVD. Proprietary research team.'
    },
    {
      icon: Container,
      title: 'Container & K8s Security',
      description: 'Deep container scanning with base image recommendations. Kubernetes security posture management and runtime monitoring.'
    },
    {
      icon: GitBranch,
      title: 'Developer-First Workflow',
      description: 'Native IDE plugins, PR automation, and CLI tools. Security integrated into existing developer workflows without friction.'
    }
  ],

  comparisons: [
    {
      feature: 'Scanning Speed',
      tool: '2x faster',
      competitors: { 'Semgrep': '10 seconds', 'SonarQube': 'Minutes', 'Checkmarx': '5+ minutes' }
    },
    {
      feature: 'Auto-Fix Accuracy',
      tool: '80% accurate',
      competitors: { 'Semgrep': '20% reduction', 'SonarQube': 'Manual', 'Checkmarx': 'Limited' }
    },
    {
      feature: 'Language Support',
      tool: '14+ languages',
      competitors: { 'Semgrep': '30+ languages', 'SonarQube': '29 languages', 'Checkmarx': '25+ languages' }
    },
    {
      feature: 'Container Security',
      tool: 'Full support',
      competitors: { 'Semgrep': 'No', 'SonarQube': 'Limited', 'Checkmarx': 'Add-on' }
    },
    {
      feature: 'Free Tier',
      tool: '200 tests/month',
      competitors: { 'Semgrep': '10 contributors', 'SonarQube': 'Community edition', 'Checkmarx': 'None' }
    },
    {
      feature: 'Vulnerability DB',
      tool: '2.8M+ advisories',
      competitors: { 'Semgrep': '20K+ rules', 'SonarQube': 'Standard', 'Checkmarx': 'Proprietary' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Version Control', icon: '🔗', description: 'PR checks & auto-fix' },
    { name: 'GitLab', category: 'Version Control', icon: '🦊', description: 'Pipeline integration' },
    { name: 'VS Code', category: 'IDE', icon: '💻', description: 'Real-time scanning' },
    { name: 'IntelliJ', category: 'IDE', icon: '🧠', description: 'IDE plugin' },
    { name: 'Docker', category: 'Container', icon: '🐳', description: 'Image scanning' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'K8s security' },
    { name: 'Jenkins', category: 'CI/CD', icon: '🔧', description: 'Build integration' },
    { name: 'JIRA', category: 'Issue Tracking', icon: '📋', description: 'Ticket creation' }
  ],

  reviews: [
    {
      author: 'Michael Chen',
      role: 'Engineering Manager',
      company: 'Salesforce',
      rating: 5,
      comment: 'Snyk\'s scanning is 2x faster and much more integrated to our tooling. The AI-powered fixes save our team hours every week.',
      verified: true
    },
    {
      author: 'Sarah Johnson',
      role: 'DevSecOps Lead',
      company: 'Atlassian',
      rating: 5,
      comment: 'Best vulnerability database in the industry. We find issues 60 days before they hit NVD. Container security is top-notch.',
      verified: true
    },
    {
      author: 'Alex Kumar',
      role: 'Security Architect',
      company: 'Spotify',
      rating: 4,
      comment: 'Great for developers, though pricing scales quickly. The IDE integration and auto-fix PRs are game-changers.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.snyk.io',
    github: 'https://github.com/snyk',
    discord: 'https://discord.gg/snyk',
    youtube: 'https://youtube.com/@snyksec',
    blog: 'https://snyk.io/blog'
  },

  faqs: [
    {
      question: 'How is Snyk different from Semgrep?',
      answer: 'Snyk offers broader security coverage including container and Kubernetes security, has 80% accurate AI auto-fixes vs Semgrep\'s 20% noise reduction, and includes the world\'s most comprehensive vulnerability database with 2.8M+ advisories. However, Semgrep supports more languages (30+ vs 14+) and has a more generous free tier.'
    },
    {
      question: 'What makes Snyk\'s AI different?',
      answer: 'Snyk\'s DeepCode AI provides 80% accurate auto-fixes that are pre-validated and tested. The AI is privately hosted for data security and provides real-time fixes in your IDE with contextual explanations. It\'s trained on millions of code patterns and security fixes.'
    },
    {
      question: 'How much does Snyk cost at scale?',
      answer: 'Snyk starts at $25/user/month for teams, with enterprise pricing at $98/user/month. Volume discounts are available for larger organizations. The free tier supports up to 10 developers with 200 tests/month.'
    },
    {
      question: 'Does Snyk scan containers?',
      answer: 'Yes! Snyk provides comprehensive container security including base image recommendations, layer analysis, Dockerfile scanning, and Kubernetes configuration security. It integrates with Docker Hub, ECR, ACR, and other registries.'
    },
    {
      question: 'How fast is Snyk compared to other tools?',
      answer: 'Snyk is 2x faster than most competitors. Full project scans complete in seconds vs minutes for tools like SonarQube. The speed advantage is especially noticeable in CI/CD pipelines where every second counts.'
    },
    {
      question: 'Can Snyk handle large codebases?',
      answer: 'Yes, though some users report challenges with very large monorepos. Snyk is optimized for modern microservices architectures and handles most enterprise codebases well. For massive monorepos, incremental scanning and policy customization help manage scan times.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://snyk.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Snyk</a> revolutionizes developer security as the AI-powered platform that seamlessly integrates vulnerability detection and remediation into modern development workflows. Unlike <Link href="/tools/semgrep" className="text-purple-400 hover:text-purple-300">Semgrep</Link>\'s focus on static analysis or <Link href="/tools/sonarqube" className="text-purple-400 hover:text-purple-300">SonarQube</Link>\'s code quality approach, Snyk delivers comprehensive security across code, dependencies, containers, and cloud infrastructure with 80% accurate AI-powered auto-fixes. Trusted by <a href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Salesforce</a>, <a href="https://www.atlassian.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Atlassian</a>, and <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Spotify</a>, Snyk scans 2x faster than competitors while maintaining the industry\'s most comprehensive vulnerability database with 2.8M+ advisories.
      </p>
      
      <p className="text-lg leading-relaxed">
        Built on the pioneering DeepCode AI engine, Snyk transforms security from a development bottleneck into an enabler through native <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">VS Code</a> and <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">IntelliJ</a> integrations, automated PR fixes, and real-time vulnerability detection. Starting free for teams up to 10 developers with 200 monthly tests, this developer-first security platform excels at <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Kubernetes</a> and <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Docker</a> container security while providing <Link href="/tools/github-copilot" className="text-purple-400 hover:text-purple-300">AI-assisted</Link> remediation that developers actually use. With <Link href="/agents" className="text-purple-400 hover:text-purple-300">intelligent security agents</Link> that find vulnerabilities 60 days before they appear in NVD, Snyk empowers organizations to ship secure code faster without sacrificing development velocity in the age of <Link href="/tools" className="text-purple-400 hover:text-purple-300">AI-powered development tools</Link>.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Snyk?',
    segments: [
      {
        name: 'Enterprise Dev Teams',
        description: 'Fortune 500 companies use {toolData.name} to secure thousands of applications with automated vulnerability management.',
        icon: Building2,
        stats: '8M+ developers'
      },
      {
        name: 'DevSecOps Teams',
        description: 'DevSecOps engineers integrate {toolData.name} into CI/CD pipelines for shift-left security without slowing releases.',
        icon: Rocket,
        stats: '2x faster scanning'
      },
      {
        name: 'Cloud Native Orgs',
        description: 'Companies running Kubernetes use {toolData.name} for comprehensive container and infrastructure security.',
        icon: Cloud,
        stats: '1.5B+ containers scanned'
      },
      {
        name: 'Open Source Projects',
        description: 'OSS maintainers use {toolData.name} free tier to secure dependencies and prevent supply chain attacks.',
        icon: Package,
        stats: '2.8M+ vulnerabilities'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Snyk Unique?',
    points: [
      {
        title: 'Industry\'s Best Vuln Database',
        description: 'With 2.8M+ advisories, {toolData.name} finds vulnerabilities 60 days before they appear in NVD through proprietary research.',
        icon: Database
      },
      {
        title: '80% Accurate AI Auto-Fixes',
        description: 'DeepCode AI doesn\'t just find issues—it provides validated fixes developers can apply with one click.',
        icon: Brain
      },
      {
        title: 'True Container Security',
        description: 'Beyond basic scanning, {toolData.name} provides base image recommendations and Kubernetes posture management.',
        icon: Container
      },
      {
        title: 'Developer-Native Integration',
        description: 'Security that doesn\'t slow down development with IDE plugins, PR automation, and CLI tools developers love.',
        icon: Code
      },
      {
        title: '2x Faster Than Competitors',
        description: 'Complete scans in seconds, not minutes. Fast enough for pre-commit hooks and PR checks.',
        icon: Zap
      }
    ]
  }
}

export default function SnykPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={snykData} />
    </>
  )
}