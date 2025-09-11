'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Database, Lock, GitBranch, Zap, Target, Users, Globe, Package, Cloud, Terminal, FileCode, AlertTriangle, Brain, Eye, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const bearerData = {
  name: 'Bearer',
  tagline: 'Data-first SAST platform - Scan code for security & privacy risks with AI-powered remediation',
  description: 'Bearer (now part of Cycode) is a developer-first SAST platform that identifies security vulnerabilities and data privacy risks. Detects 120+ data types, covers OWASP Top 10, generates GDPR compliance reports. Free CLI, Pro version via Cycode. 60% faster scanning with AI-assisted fixes.',
  url: 'https://www.bearer.com',
  category: 'Security & Privacy',
  logo: '/logos/bearer.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Bearer CLI',
        price: '$0',
        features: [
          'Open source (ELv2 license)',
          '120+ data type detection',
          'OWASP Top 10 coverage',
          'CWE Top 25 scanning',
          '7 language support',
          'CI/CD integration',
          'Privacy reports'
        ],
        highlighted: true
      },
      {
        name: 'Bearer Pro (via Cycode)',
        price: 'Contact',
        features: [
          'Everything in CLI',
          'Cross-file analysis',
          'AI-powered remediation',
          'GitHub/GitLab integration',
          'Advanced compliance reports',
          'Priority support',
          'Extended language support'
        ]
      },
      {
        name: 'Enterprise (Cycode)',
        price: 'Custom',
        features: [
          'Complete ASPM platform',
          'API discovery',
          'Supply chain security',
          'Custom integrations',
          'Dedicated support',
          'SLA guarantees',
          'Training & onboarding'
        ]
      }
    ]
  },

  features: [
    {
      icon: Database,
      title: '120+ Data Types Detection',
      description: 'Identifies PII, PHI, PD, and sensitive data patterns without viewing actual values.'
    },
    {
      icon: Shield,
      title: 'OWASP & CWE Coverage',
      description: 'Comprehensive scanning for OWASP Top 10 and CWE Top 25 security vulnerabilities.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Fixes',
      description: 'Bearer Assistant provides personalized explanations and one-click code fixes.'
    },
    {
      icon: Lock,
      title: 'Privacy Compliance',
      description: 'Automated GDPR ROPA reports and privacy impact assessments for compliance teams.'
    },
    {
      icon: Zap,
      title: '60% Faster Scanning',
      description: 'Latest v1.23 is 60% faster with optimized memory consumption and precision.'
    },
    {
      icon: GitBranch,
      title: 'Native Git Integration',
      description: 'Embeds findings in GitHub PRs and GitLab MRs with inline security comments.'
    }
  ],

  comparisons: [
    {
      feature: 'Scan Speed',
      tool: '60% faster (v1.23)',
      competitors: { 'Snyk': 'Standard', 'SonarQube': 'Slower', 'Semgrep': 'Fast', 'Checkmarx': 'Standard' }
    },
    {
      feature: 'Data Privacy Focus',
      tool: 'Primary focus',
      competitors: { 'Snyk': 'Limited', 'SonarQube': 'Basic', 'Semgrep': 'No', 'Checkmarx': 'Some' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 (CLI free)',
      competitors: { 'Snyk': '$0 limited', 'SonarQube': '$0 community', 'Semgrep': '$0', 'Checkmarx': 'Paid only' }
    },
    {
      feature: 'Language Support',
      tool: '7+ languages',
      competitors: { 'Snyk': '15+', 'SonarQube': '30+', 'Semgrep': '30+', 'Checkmarx': '25+' }
    },
    {
      feature: 'AI Remediation',
      tool: 'Built-in Assistant',
      competitors: { 'Snyk': 'DeepCode AI', 'SonarQube': 'Limited', 'Semgrep': 'No', 'Checkmarx': 'AI features' }
    },
    {
      feature: 'Compliance Reports',
      tool: 'Auto GDPR/ROPA',
      competitors: { 'Snyk': 'Basic', 'SonarQube': 'Manual', 'Semgrep': 'No', 'Checkmarx': 'Enterprise' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Git', icon: '🐙', description: 'PR comments' },
    { name: 'GitLab', category: 'Git', icon: '🦊', description: 'MR scanning' },
    { name: 'JavaScript', category: 'Language', icon: '🟨', description: 'Full support' },
    { name: 'Python', category: 'Language', icon: '🐍', description: 'Full support' },
    { name: 'Java', category: 'Language', icon: '☕', description: 'Cross-file' },
    { name: 'Ruby', category: 'Language', icon: '💎', description: 'Supported' },
    { name: 'SARIF', category: 'Export', icon: '📊', description: 'DefectDojo' },
    { name: 'CI/CD', category: 'Pipeline', icon: '🔄', description: 'All major' }
  ],

  reviews: [
    {
      author: 'Security Engineer',
      role: 'DevSecOps Lead',
      company: 'FinTech Startup',
      rating: 5,
      comment: 'Bearer\'s data-first approach is unique. Detected PII leaks other tools missed. GDPR reports save hours. CLI is genuinely free and powerful.',
      verified: true
    },
    {
      author: 'Full Stack Developer',
      role: 'Tech Lead',
      company: 'E-commerce',
      rating: 4,
      comment: 'Super fast scanning after v1.23 update. AI fixes are actually helpful. Wish it supported more languages like Snyk, but quality over quantity.',
      verified: true
    },
    {
      author: 'Compliance Officer',
      role: 'Privacy Lead',
      company: 'Healthcare',
      rating: 5,
      comment: 'Finally, a security tool that understands privacy compliance. Auto-generated ROPA reports are accurate. Cycode acquisition brought enterprise features.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.bearer.com',
    github: 'https://github.com/Bearer/bearer',
    blog: 'https://www.bearer.com/blog',
    cycode: 'https://cycode.com',
    community: 'https://discord.gg/bearer'
  },

  faqs: [
    {
      question: 'What makes Bearer different from other SAST tools?',
      answer: 'Bearer is uniquely data-first, focusing on how sensitive data flows through your application rather than just finding vulnerabilities. It identifies 120+ data types (PII, PHI, PD) by analyzing code patterns without accessing actual values. While tools like Snyk or SonarQube focus primarily on security vulnerabilities, Bearer combines security scanning with privacy compliance, automatically generating GDPR ROPA reports. The platform is 60% faster than most competitors (v1.23) and includes AI-powered remediation through Bearer Assistant for one-click fixes.'
    },
    {
      question: 'Is Bearer really free? What\'s the catch?',
      answer: 'Bearer CLI is genuinely free and open source under the Elastic License 2.0 (ELv2). You can use it freely within your organization without commercial requirements. The CLI includes full SAST capabilities, 120+ data type detection, OWASP/CWE coverage, and privacy report generation. There\'s no catch—the free version is fully functional. Bearer Pro (via Cycode) adds enterprise features like cross-file analysis, advanced AI remediation, and deeper integrations. Many teams find the free CLI sufficient for their security and privacy scanning needs.'
    },
    {
      question: 'How does the Cycode acquisition affect Bearer users?',
      answer: 'The 2024 Cycode acquisition ($10M) enhanced Bearer significantly. Bearer CLI remains free and open source, with accelerated development—v1.23 brought 60% speed improvements. Bearer Pro is now available through Cycode\'s complete ASPM platform, adding API discovery, supply chain security, and enterprise features. The acquisition brought 31% faster scanning across Cycode\'s platform and improved AI capabilities. Existing Bearer users benefit from better support, faster updates, and optional upgrade paths to Cycode\'s comprehensive security suite.'
    },
    {
      question: 'What languages and frameworks does Bearer support?',
      answer: 'Bearer CLI supports Go, Java, JavaScript, TypeScript, PHP, Python, and Ruby. Bearer Pro (via Cycode) adds C#, Kotlin, Elixir, and VB.Net. Java notably has cross-file support in Pro, allowing interprocedural analysis across functions and files. While competitors like SonarQube support 30+ languages, Bearer focuses on depth over breadth—providing superior data flow analysis and privacy detection in supported languages. The platform works with all major frameworks within these languages and integrates seamlessly with modern CI/CD pipelines.'
    },
    {
      question: 'How does Bearer handle privacy compliance and GDPR?',
      answer: 'Bearer automates privacy compliance workflows that typically require manual audits. It scans code to identify data processing activities, classifies data types (personal data, sensitive PD, PII, PHI), and automatically generates Records of Processing Activities (ROPA) reports required for GDPR Article 30. The platform maps data flows across your application, helping identify privacy risks before they become violations. Unlike generic SAST tools, Bearer understands privacy regulations and provides actionable compliance insights, making it invaluable for teams handling EU user data.'
    },
    {
      question: 'What\'s the real-world performance and accuracy of Bearer?',
      answer: 'Bearer v1.23 is one of the fastest SAST tools available—60% faster than previous versions and 31% faster than major competitors when integrated with Cycode. Memory consumption is optimized for large codebases. Accuracy is high with low false positive rates due to its data-flow analysis approach. The differential scan feature speeds up CI/PR workflows by only scanning changed code. Real users report finding critical data leaks missed by other tools, particularly in privacy-sensitive areas. The AI Assistant reduces remediation time by providing context-aware fixes that actually work.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://www.bearer.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Bearer</a> revolutionizes application security by taking a data-first approach to SAST, focusing on how sensitive information flows through your code rather than just hunting for vulnerabilities. While <Link href="/tools/snyk" className="text-purple-400 hover:text-purple-300">Snyk</Link> and <Link href="/tools/sonarqube" className="text-purple-400 hover:text-purple-300">SonarQube</Link> excel at finding security bugs, Bearer uniquely combines security scanning with privacy compliance, detecting 120+ data types and automatically generating GDPR-required documentation. The 2024 Cycode acquisition turbocharged Bearer's capabilities, bringing 60% faster scanning speeds and AI-powered remediation that turns security findings into one-click fixes.
      </p>
      
      <p className="text-lg leading-relaxed">
        What sets Bearer apart is its genuine commitment to developer experience and privacy. The CLI is completely free under ELv2 license—no strings attached—providing enterprise-grade SAST capabilities including OWASP Top 10 and CWE Top 25 coverage. Unlike <Link href="/tools/checkmarx" className="text-purple-400 hover:text-purple-300">Checkmarx</Link>'s enterprise-only model or <Link href="/tools/semgrep" className="text-purple-400 hover:text-purple-300">Semgrep</Link>'s limited privacy features, Bearer delivers both security and compliance in one tool. The platform's native <Link href="/tools/github" className="text-purple-400 hover:text-purple-300">GitHub</Link> and GitLab integration embeds findings directly in PRs with actionable fixes. For teams handling user data, especially in regulated industries, Bearer isn't just another security scanner—it's a privacy compliance partner that speaks both developer and legal languages fluently.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Bearer?',
    segments: [
      {
        name: 'Privacy-Conscious Teams',
        description: 'Companies handling PII/PHI needing GDPR compliance and data protection.',
        icon: Lock,
        stats: 'GDPR automated'
      },
      {
        name: 'DevSecOps Teams',
        description: 'Engineers wanting fast, accurate SAST with low false positives.',
        icon: Shield,
        stats: '60% faster scans'
      },
      {
        name: 'Startups',
        description: 'Teams needing enterprise security without enterprise budgets.',
        icon: Zap,
        stats: 'Free CLI'
      },
      {
        name: 'Compliance Teams',
        description: 'Legal and privacy officers needing automated ROPA reports.',
        icon: FileCode,
        stats: 'Auto reports'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Bearer Unique?',
    points: [
      {
        title: 'Data-First Security',
        description: 'Focuses on sensitive data flows, not just vulnerabilities.',
        icon: Database
      },
      {
        title: '120+ Data Types',
        description: 'Detects PII, PHI, PD patterns without accessing values.',
        icon: Eye
      },
      {
        title: 'Privacy Compliance',
        description: 'Automated GDPR ROPA reports and privacy assessments.',
        icon: Lock
      },
      {
        title: 'Genuinely Free',
        description: 'Full-featured CLI with no commercial restrictions.',
        icon: CheckCircle
      },
      {
        title: 'AI Remediation',
        description: 'One-click fixes with Bearer Assistant powered by AI.',
        icon: Brain
      }
    ]
  }
}

export default function BearerPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={bearerData} />
    </>
  )
}