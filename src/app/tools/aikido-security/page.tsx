'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Zap, Lock, GitBranch, Bot, Target, Users, Globe, Package, Cloud, Terminal, FileCode, AlertTriangle, Brain, Layers, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const aikidoSecurityData = {
  name: 'Aikido Security',
  tagline: 'All-in-one developer security platform - SAST, DAST, SCA, cloud & runtime in one tool',
  description: 'Aikido combines SAST, DAST, SCA, CSPM, IaC scanning, and runtime protection in one platform. 95% less noise with AI triaging, one-click fixes, 100+ integrations. Free for 2 users/10 repos, from $250/month. SOC2 Type II & ISO 27001 certified.',
  url: 'https://www.aikido.dev',
  category: 'Security & Privacy',
  logo: '/logos/aikido-security.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free Forever',
        price: '$0',
        features: [
          '2 users included',
          '10 repositories',
          'SAST, DAST, SCA',
          'Cloud security scanning',
          'Container scanning',
          'Secrets detection',
          'Basic integrations'
        ],
        highlighted: true
      },
      {
        name: 'Startup',
        price: '$250',
        features: [
          'Up to 10 users',
          'Unlimited repos',
          'AI Autofix',
          'AI Autotriage',
          'All security scanners',
          'Priority support',
          '100+ integrations'
        ]
      },
      {
        name: 'Enterprise',
        price: '$350+',
        features: [
          'Unlimited users',
          'Advanced compliance',
          'SAML SSO',
          'Custom policies',
          'Dedicated support',
          'SLA guarantees',
          'On-premise option'
        ]
      }
    ]
  },

  features: [
    {
      icon: Layers,
      title: 'All-in-One Platform',
      description: 'SAST, DAST, SCA, CSPM, IaC, containers, secrets - everything in one tool.'
    },
    {
      icon: Brain,
      title: '95% Less Noise',
      description: 'AI-powered triaging reduces false positives by 85%, showing only what matters.'
    },
    {
      icon: Zap,
      title: 'One-Click AI Fixes',
      description: 'AI generates PRs to fix SAST, IaC, dependencies, and container issues instantly.'
    },
    {
      icon: Shield,
      title: 'Runtime Protection',
      description: 'Zen protects Node, Python, Java, PHP, .NET apps with one line of code.'
    },
    {
      icon: GitBranch,
      title: '100+ Integrations',
      description: 'Native GitHub, GitLab, Bitbucket, VS Code, IntelliJ, Jira, Slack, and more.'
    },
    {
      icon: CheckCircle,
      title: 'SOC2 & ISO Certified',
      description: 'Meets AICPA SOC 2 Type II & ISO 27001:2022 compliance requirements.'
    }
  ],

  comparisons: [
    {
      feature: 'Tools Combined',
      tool: '8+ in one',
      competitors: { 'Snyk': '3-4 tools', 'GitHub Advanced': '2-3 tools', 'SonarQube': '2 tools', 'Checkmarx': '3-4 tools' }
    },
    {
      feature: 'False Positive Rate',
      tool: '85% reduction',
      competitors: { 'Snyk': 'Standard', 'GitHub Advanced': 'Higher', 'SonarQube': 'Moderate', 'Checkmarx': 'Standard' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 forever',
      competitors: { 'Snyk': '$0 limited', 'GitHub Advanced': '$21/user', 'SonarQube': '$0 community', 'Checkmarx': 'Enterprise' }
    },
    {
      feature: 'AI Autofix',
      tool: 'Full PRs',
      competitors: { 'Snyk': 'Suggestions', 'GitHub Advanced': 'Copilot extra', 'SonarQube': 'Limited', 'Checkmarx': 'Basic' }
    },
    {
      feature: 'Runtime Protection',
      tool: 'Built-in Zen',
      competitors: { 'Snyk': 'Separate product', 'GitHub Advanced': 'No', 'SonarQube': 'No', 'Checkmarx': 'Separate' }
    },
    {
      feature: 'Setup Time',
      tool: 'Minutes',
      competitors: { 'Snyk': '30 mins', 'GitHub Advanced': 'Hours', 'SonarQube': 'Days', 'Checkmarx': 'Weeks' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Git', icon: '🐙', description: 'Native' },
    { name: 'GitLab', category: 'Git', icon: '🦊', description: 'Full CI/CD' },
    { name: 'VS Code', category: 'IDE', icon: '💻', description: 'Plugin' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'CSPM' },
    { name: 'Jira', category: 'PM', icon: '📋', description: 'Tickets' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Alerts' },
    { name: 'Docker', category: 'Container', icon: '🐳', description: 'Scanning' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Security' }
  ],

  reviews: [
    {
      author: 'DevSecOps Engineer',
      role: 'Security Lead',
      company: 'SaaS Startup',
      rating: 5,
      comment: 'Replaced 5 separate tools with Aikido. 85% less false positives is real. AI autofix actually works. Setup took 10 minutes. Best security investment we made.',
      verified: true
    },
    {
      author: 'CTO',
      role: 'Co-founder',
      company: 'FinTech',
      rating: 5,
      comment: 'Finally, security that developers actually use. No more ignored alerts. Zen runtime protection caught real attacks. SOC2 compliance was painless.',
      verified: true
    },
    {
      author: 'Full Stack Developer',
      role: 'Senior Engineer',
      company: 'E-commerce',
      rating: 4,
      comment: 'The all-in-one approach is brilliant. Free tier is genuinely useful. AI fixes save hours weekly. Wish it had more language support, but quality over quantity.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.aikido.dev',
    github: 'https://github.com/AikidoSec',
    blog: 'https://www.aikido.dev/blog',
    integrations: 'https://integrations.aikido.dev',
    support: 'support@aikido.dev'
  },

  faqs: [
    {
      question: 'How does Aikido replace multiple security tools?',
      answer: 'Aikido combines 8+ security scanners in one platform: SAST (static code analysis), DAST (dynamic testing), SCA (dependency scanning), CSPM (cloud security), IaC scanning, container security, secrets detection, and license compliance. Instead of juggling Snyk for dependencies, SonarQube for code quality, GitHub Advanced Security for secrets, and separate cloud security tools, Aikido provides everything with unified reporting. The platform contextualizes findings across all scanners, reducing noise by 95% and showing only vulnerabilities that actually matter.'
    },
    {
      question: 'Is the free plan really free forever with no catch?',
      answer: 'Yes, Aikido\'s free plan is genuinely free forever with no time limit or trial period. You get 2 users and 10 repositories with full access to SAST, DAST, SCA, cloud scanning, container scanning, and secrets detection. There\'s no credit card required and no automatic upgrades. The free tier is perfect for small teams, open source projects, or evaluating the platform. Many startups run successfully on the free plan until they need more users or repos. The $250/month Startup plan adds unlimited repos, AI features, and up to 10 users.'
    },
    {
      question: 'How does the 85% false positive reduction actually work?',
      answer: 'Aikido achieves 85% false positive reduction through intelligent context analysis and reachability testing. By combining multiple security scanners, Aikido cross-references findings to eliminate duplicates and irrelevant alerts. The AI-powered autotriage analyzes code paths, data flows, and actual exploitability to determine if vulnerabilities are reachable in production. For example, a SQL injection vulnerability in dead code or a CVE in an unused function gets automatically filtered out. This means developers see 10-20 actionable issues instead of 200+ alerts, making security actually manageable.'
    },
    {
      question: 'What makes Aikido\'s AI Autofix different from GitHub Copilot?',
      answer: 'Aikido\'s AI Autofix is purpose-built for security remediation, not general coding. It generates complete pull requests that fix multiple security issues at once, not just code suggestions. The AI understands security contexts—it knows how to properly sanitize inputs, update dependencies safely, fix IaC misconfigurations, and patch container vulnerabilities. Unlike Copilot which requires manual implementation, Aikido creates ready-to-merge PRs with proper testing. The fixes are security-aware, ensuring remediation doesn\'t break functionality or introduce new vulnerabilities. It\'s included in paid plans, not a separate subscription.'
    },
    {
      question: 'How does Zen runtime protection work?',
      answer: 'Zen is Aikido\'s runtime application self-protection (RASP) that blocks attacks in real-time with minimal overhead. Add one line of code to your Node.js, Python, Java, PHP, or .NET application, and Zen monitors for SQL injection, XSS, path traversal, and other attacks during execution. Unlike traditional WAFs, Zen understands application context and blocks attacks at the code level. It has near-zero performance impact (<1ms latency) and automatically adapts to your application. Zen is included in Aikido plans, not sold separately like competitor runtime products.'
    },
    {
      question: 'Why choose Aikido over GitHub Advanced Security?',
      answer: 'Aikido provides more comprehensive coverage at a lower cost than GitHub Advanced Security ($21/user/month). While GHAS offers code scanning and secret scanning, Aikido adds DAST, cloud security, container scanning, IaC, license compliance, and runtime protection. Aikido\'s AI autofix generates complete PRs, while GHAS requires separate Copilot subscription for AI assistance. Setup takes minutes vs hours for GHAS. Most importantly, Aikido reduces false positives by 85% compared to GHAS\'s higher noise levels. The free tier offers more than GHAS for small teams. For GitHub users, Aikido integrates seamlessly while providing superior security coverage.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://www.aikido.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Aikido Security</a> revolutionizes developer security by combining 8+ tools into one platform that actually gets used. While teams typically juggle <Link href="/tools/snyk" className="text-purple-400 hover:text-purple-300">Snyk</Link> for dependencies, <Link href="/tools/sonarqube" className="text-purple-400 hover:text-purple-300">SonarQube</Link> for code quality, and <Link href="/tools/github" className="text-purple-400 hover:text-purple-300">GitHub Advanced Security</Link> for secrets—each generating hundreds of alerts—Aikido provides everything with 95% less noise. The platform's AI triaging shows only vulnerabilities that matter, while one-click autofix generates complete PRs to remediate issues across SAST, dependencies, infrastructure, and containers.
      </p>
      
      <p className="text-lg leading-relaxed">
        What makes Aikido transformative isn't just consolidation—it's making security invisible to developers. Setup takes minutes, not weeks. The free tier (2 users, 10 repos) includes all scanners, not stripped-down versions. Runtime protection via Zen blocks real attacks with one line of code, something <Link href="/tools/checkmarx" className="text-purple-400 hover:text-purple-300">Checkmarx</Link> or <Link href="/tools/bearer" className="text-purple-400 hover:text-purple-300">Bearer</Link> sell separately. With SOC2 Type II and ISO 27001 certification, Aikido delivers enterprise-grade security at startup-friendly prices ($250/month for 10 users). For teams drowning in security alerts or avoiding security tools altogether, Aikido isn't just another scanner—it's security that developers actually embrace, cutting through noise to deliver actionable fixes that ship.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Aikido Security?',
    segments: [
      {
        name: 'Startups',
        description: 'Small teams needing enterprise security without complexity or cost.',
        icon: Zap,
        stats: 'Free for 2 users'
      },
      {
        name: 'DevSecOps Teams',
        description: 'Engineers wanting unified security with minimal false positives.',
        icon: Shield,
        stats: '85% less noise'
      },
      {
        name: 'Scale-ups',
        description: 'Growing companies consolidating multiple security tools.',
        icon: Target,
        stats: '8+ tools in one'
      },
      {
        name: 'Compliance Teams',
        description: 'Organizations needing SOC2, ISO 27001, and GDPR compliance.',
        icon: CheckCircle,
        stats: 'Auto compliance'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Aikido Security Unique?',
    points: [
      {
        title: '8+ Tools in One',
        description: 'SAST, DAST, SCA, CSPM, IaC, containers, secrets, licenses.',
        icon: Layers
      },
      {
        title: '95% Less Noise',
        description: 'AI triaging eliminates 85% of false positives automatically.',
        icon: Brain
      },
      {
        title: 'Complete PR Fixes',
        description: 'AI generates ready-to-merge PRs, not just suggestions.',
        icon: Bot
      },
      {
        title: 'Runtime Protection',
        description: 'Zen blocks attacks in production with one line of code.',
        icon: Shield
      },
      {
        title: 'Minutes to Deploy',
        description: 'Fastest setup in the industry - results in minutes.',
        icon: Zap
      }
    ]
  }
}

export default function AikidoSecurityPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={aikidoSecurityData} />
    </>
  )
}