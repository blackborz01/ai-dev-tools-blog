'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Key, Lock, GitBranch, Eye, Target, Users, Globe, AlertTriangle, Cloud, Terminal, FileCode, Search, Brain, Zap, CheckCircle, Building2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const gitguardianData = {
  name: 'GitGuardian',
  tagline: 'Secrets detection & NHI governance - Stop API keys & credentials from leaking in code',
  description: 'GitGuardian detects 500+ types of secrets in real-time across code, CI/CD, and public repos. 91% true positive rate, 4-second detection. Free for teams <25, trusted by 600k+ developers. Public monitoring catches 80% of leaks from personal accounts. #1 security app on GitHub.',
  url: 'https://www.gitguardian.com',
  category: 'Security & Privacy',
  logo: '/logos/gitguardian.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          'Teams up to 25 developers',
          'Real-time secrets detection',
          '500+ secret types',
          'GitHub integration',
          '10,000 API calls/month',
          'Historical scanning',
          'Open source projects free'
        ],
        highlighted: true
      },
      {
        name: 'Business',
        price: 'From $18/user',
        features: [
          'Unlimited developers',
          'All VCS integrations',
          'Public monitoring',
          '1M API calls/month',
          'Advanced remediation',
          'Priority support',
          'Honeytokens'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Business',
          'NHI Governance',
          'Self-hosting option',
          'SAML SSO',
          'Custom policies',
          'Dedicated support',
          'SLA guarantees'
        ]
      }
    ]
  },

  features: [
    {
      icon: Key,
      title: '500+ Secret Types',
      description: 'Detects API keys, tokens, certificates from 450+ providers with validation.'
    },
    {
      icon: Zap,
      title: '4-Second Detection',
      description: 'Real-time MTTD (Mean Time To Detect) with 91% true positive rate.'
    },
    {
      icon: Eye,
      title: 'Public Monitoring',
      description: '80% of corporate leaks come from personal repos - monitors all public GitHub.'
    },
    {
      icon: Shield,
      title: 'NHI Governance',
      description: 'Centralized inventory of secrets, lifecycle management, and risk analytics.'
    },
    {
      icon: AlertTriangle,
      title: 'Honeytokens',
      description: 'Deploy decoy secrets to detect attackers and unauthorized access attempts.'
    },
    {
      icon: GitBranch,
      title: 'Full VCS Coverage',
      description: 'GitHub, GitLab, Bitbucket, Azure DevOps, plus CI/CD and container scanning.'
    }
  ],

  comparisons: [
    {
      feature: 'Secret Types',
      tool: '500+ validated',
      competitors: { 'Snyk': '~200', 'GitHub Secrets': '~100', 'TruffleHog': '~700 unvalidated', 'Gitleaks': '~150' }
    },
    {
      feature: 'True Positive Rate',
      tool: '91%',
      competitors: { 'Snyk': '~70%', 'GitHub Secrets': '~60%', 'TruffleHog': '~40%', 'Gitleaks': '~50%' }
    },
    {
      feature: 'Detection Speed',
      tool: '4 seconds',
      competitors: { 'Snyk': 'Minutes', 'GitHub Secrets': 'Scan-based', 'TruffleHog': 'Varies', 'Gitleaks': 'Scan-based' }
    },
    {
      feature: 'Public Monitoring',
      tool: 'Full GitHub',
      competitors: { 'Snyk': 'No', 'GitHub Secrets': 'Own repos', 'TruffleHog': 'No', 'Gitleaks': 'No' }
    },
    {
      feature: 'Free Tier',
      tool: '25 developers',
      competitors: { 'Snyk': '200 tests', 'GitHub Secrets': 'Public repos', 'TruffleHog': 'OSS', 'Gitleaks': 'OSS' }
    },
    {
      feature: 'Honeytokens',
      tool: 'Built-in',
      competitors: { 'Snyk': 'No', 'GitHub Secrets': 'No', 'TruffleHog': 'No', 'Gitleaks': 'No' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'VCS', icon: '🐙', description: '#1 app' },
    { name: 'GitLab', category: 'VCS', icon: '🦊', description: 'Native' },
    { name: 'Bitbucket', category: 'VCS', icon: '🪣', description: 'Full' },
    { name: 'Jenkins', category: 'CI/CD', icon: '🔧', description: 'Plugin' },
    { name: 'Jira', category: 'PM', icon: '📋', description: 'Tickets' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Alerts' },
    { name: 'Docker', category: 'Container', icon: '🐳', description: 'Registry' },
    { name: 'Azure DevOps', category: 'Platform', icon: '☁️', description: 'Full' }
  ],

  reviews: [
    {
      author: 'Security Engineer',
      role: 'AppSec Lead',
      company: 'FinTech Unicorn',
      rating: 5,
      comment: 'GitGuardian caught API keys in personal repos we didn\'t even know existed. 91% accuracy is real - almost zero false positives. Public monitoring is a game-changer.',
      verified: true
    },
    {
      author: 'DevOps Manager',
      role: 'Platform Lead',
      company: 'E-commerce',
      rating: 5,
      comment: '4-second detection saved us from a production leak. Honeytokens caught an insider threat. Free for our 20-person team was perfect for evaluation. Now on Business plan.',
      verified: true
    },
    {
      author: 'CISO',
      role: 'Security Head',
      company: 'Enterprise',
      rating: 4,
      comment: 'NHI Governance finally gives visibility into service account secrets. 500+ detectors with validation beats competitors. Wish self-hosting was easier to setup.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.gitguardian.com',
    github: 'https://github.com/GitGuardian',
    cli: 'https://github.com/GitGuardian/ggshield',
    blog: 'https://blog.gitguardian.com',
    support: 'support@gitguardian.com'
  },

  faqs: [
    {
      question: 'How is GitGuardian different from GitHub\'s built-in secret scanning?',
      answer: 'GitGuardian detects 500+ validated secret types vs GitHub\'s ~100, with a 91% true positive rate compared to GitHub\'s ~60%. GitGuardian offers real-time 4-second detection while GitHub scans periodically. Most critically, GitGuardian\'s Public Monitoring scans ALL public GitHub repos including personal developer accounts where 80% of corporate leaks occur—GitHub only scans your own repos. GitGuardian also provides honeytokens, NHI governance, and works across all VCS platforms, not just GitHub. The free tier supports teams up to 25 developers with full features.'
    },
    {
      question: 'What exactly is Public Monitoring and why is it crucial?',
      answer: 'Public Monitoring scans the entire public GitHub ecosystem for your company\'s secrets, not just your official repos. This is critical because 80% of corporate secrets leaked on GitHub come from developers\' personal accounts—shadow IT, side projects, or accidental pushes to personal repos. GitGuardian uses intelligent rules to identify activity linked to your company across millions of public repos. It\'s essentially a threat intelligence system that catches leaks you don\'t even know exist. This feature alone prevents breaches that internal scanning would never catch.'
    },
    {
      question: 'Is the free tier really free for 25 developers?',
      answer: 'Yes, GitGuardian is genuinely free forever for teams up to 25 developers, open source projects, and individual developers. You get full secrets detection for 500+ types, real-time monitoring, GitHub integration, 10,000 API calls/month, and historical scanning. No credit card required, no trial period—it\'s permanently free for small teams. This makes it perfect for startups, small companies, or trying before buying. The only limitations are team size and API call volume, not features.'
    },
    {
      question: 'How does the 91% true positive rate compare to other tools?',
      answer: 'GitGuardian\'s 91% TPR means only 9% of alerts are false positives—industry-leading accuracy. Compare this to TruffleHog (~40%), Gitleaks (~50%), GitHub Secrets (~60%), or even Snyk (~70%). This high accuracy comes from intelligent validation—GitGuardian doesn\'t just pattern match, it validates secrets are real and active. For a team getting 100 alerts, GitGuardian shows 91 real threats vs TruffleHog showing 40 real among 60 false alarms. This dramatic reduction in noise means developers actually address alerts instead of ignoring them.'
    },
    {
      question: 'What are honeytokens and how do they work?',
      answer: 'Honeytokens are decoy secrets that look real but trigger alerts when used. GitGuardian lets you deploy fake AWS keys, database credentials, or API tokens throughout your codebase. If an attacker (external or insider) finds and tries to use them, you get immediate alerts with full context—who, when, where, and how. This turns passive scanning into active threat detection. Unlike other tools, GitGuardian\'s honeytokens are built-in and centrally managed, not a separate product. They\'ve caught everything from supply chain attacks to malicious insiders.'
    },
    {
      question: 'What is NHI (Non-Human Identity) Governance?',
      answer: 'NHI Governance manages the lifecycle of service accounts, API keys, and machine identities—the "non-human" credentials in your system. GitGuardian provides a centralized inventory of all secrets, tracks their usage and expiration, identifies high-risk or over-privileged credentials, and automates rotation workflows. While secrets detection finds leaked credentials, NHI Governance prevents leaks by managing legitimate secret usage. It answers critical questions: Which services have which access? When do keys expire? Who owns each secret? This proactive approach reduces the attack surface before breaches occur.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://www.gitguardian.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitGuardian</a> stands as the undisputed leader in secrets detection, protecting 600,000+ developers and ranking #1 on GitHub Marketplace. While <Link href="/tools/github" className="text-purple-400 hover:text-purple-300">GitHub's built-in scanning</Link> detects ~100 secret types in your repos, GitGuardian validates 500+ types across ALL public GitHub—catching the 80% of corporate leaks that come from personal developer accounts. With a 91% true positive rate and 4-second real-time detection, it eliminates the false positive fatigue that plagues tools like TruffleHog or Gitleaks, ensuring developers actually act on alerts instead of ignoring them.
      </p>
      
      <p className="text-lg leading-relaxed">
        What makes GitGuardian transformative isn't just superior detection—it's the complete secrets security platform. Public Monitoring acts as threat intelligence for your entire developer ecosystem, catching shadow IT and personal project leaks. Honeytokens turn passive scanning into active threat hunting, detecting attackers in real-time. NHI Governance manages the lifecycle of service accounts and API keys proactively. Unlike <Link href="/tools/snyk" className="text-purple-400 hover:text-purple-300">Snyk</Link> or <Link href="/tools/bearer" className="text-purple-400 hover:text-purple-300">Bearer</Link> which focus on code vulnerabilities, GitGuardian specializes in the #1 cause of breaches: leaked secrets. With a genuinely free tier for 25 developers and trusted by giants like Snowflake and ING, GitGuardian isn't just scanning for secrets—it's building an impenetrable wall between your credentials and attackers.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses GitGuardian?',
    segments: [
      {
        name: 'Security Teams',
        description: 'AppSec and DevSecOps preventing credential leaks and breaches.',
        icon: Shield,
        stats: '91% accuracy'
      },
      {
        name: 'Enterprises',
        description: 'Large organizations managing thousands of repositories and developers.',
        icon: Building2,
        stats: '600k+ developers'
      },
      {
        name: 'Startups',
        description: 'Small teams using the generous free tier for 25 developers.',
        icon: Zap,
        stats: 'Free <25 devs'
      },
      {
        name: 'Open Source',
        description: 'OSS projects protecting contributors and preventing public leaks.',
        icon: Globe,
        stats: 'Free forever'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes GitGuardian Unique?',
    points: [
      {
        title: '500+ Validated Secrets',
        description: 'Most comprehensive detection with actual validation.',
        icon: Key
      },
      {
        title: '91% True Positive Rate',
        description: 'Industry-leading accuracy with minimal false positives.',
        icon: CheckCircle
      },
      {
        title: 'Public Monitoring',
        description: 'Scans ALL GitHub, catching 80% of leaks from personal repos.',
        icon: Eye
      },
      {
        title: '4-Second Detection',
        description: 'Real-time alerts before damage occurs.',
        icon: Zap
      },
      {
        title: 'Built-in Honeytokens',
        description: 'Active threat detection with decoy secrets.',
        icon: AlertTriangle
      }
    ]
  }
}

export default function GitGuardianPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={gitguardianData} />
    </>
  )
}