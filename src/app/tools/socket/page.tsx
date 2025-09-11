'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Package, Lock, GitBranch, Eye, Target, Users, Globe, AlertTriangle, Cloud, Terminal, FileCode, Search, Brain, Zap, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const socketData = {
  name: 'Socket',
  tagline: 'AI-powered supply chain security - Protect npm & Python packages from malicious attacks',
  description: 'Socket detects 100+ zero-day supply chain attacks weekly using AI to scan for malicious code, backdoors, and data exfiltration. Free for open source, $40M Series B funded. Protected users from 2B download npm attack. Real-time protection for JavaScript and Python dependencies.',
  url: 'https://socket.dev',
  category: 'Security & Privacy',
  logo: '/logos/socket.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Open Source',
        price: '$0',
        features: [
          'Free forever for OSS',
          'npm & Python scanning',
          'Malicious code detection',
          'License compliance',
          'Basic API access',
          'GitHub integration',
          'Community support'
        ],
        highlighted: true
      },
      {
        name: 'Team',
        price: '$49',
        features: [
          'Up to 10 users',
          'Real-time monitoring',
          'AI vulnerability summaries',
          'Reachability analysis',
          'Priority alerts',
          'Slack integration',
          '20% off annual'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited users',
          'Unlimited REST API',
          'Migration assistance',
          'Priority support + SLA',
          'Private Slack channel',
          'Custom policies',
          'Volume discounts'
        ]
      }
    ]
  },

  features: [
    {
      icon: AlertTriangle,
      title: '100+ Weekly Zero-Days',
      description: 'Detects over 100 zero-day supply chain attacks every week others miss.'
    },
    {
      icon: Package,
      title: 'npm & Python Protection',
      description: 'Full coverage for JavaScript and Python ecosystems with deep behavioral analysis.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Uses AI to identify backdoors, obfuscated code, and data exfiltration attempts.'
    },
    {
      icon: Zap,
      title: 'Real-Time Blocking',
      description: 'Blocks malicious packages within minutes of publication, not days.'
    },
    {
      icon: Shield,
      title: 'Reachability Analysis',
      description: 'Shows if vulnerable code is actually reachable and exploitable in your app.'
    },
    {
      icon: CheckCircle,
      title: 'License Compliance',
      description: 'Ensures all dependencies are properly licensed and legal for your use case.'
    }
  ],

  comparisons: [
    {
      feature: 'Zero-Day Detection',
      tool: '100+ weekly',
      competitors: { 'Snyk': 'CVE-based', 'npm audit': 'CVE only', 'Dependabot': 'CVE only', 'WhiteSource': 'Limited' }
    },
    {
      feature: 'Behavioral Analysis',
      tool: 'Deep AI scan',
      competitors: { 'Snyk': 'Basic', 'npm audit': 'None', 'Dependabot': 'None', 'WhiteSource': 'Basic' }
    },
    {
      feature: 'Detection Speed',
      tool: 'Minutes',
      competitors: { 'Snyk': 'Hours-days', 'npm audit': 'Days-weeks', 'Dependabot': 'Days', 'WhiteSource': 'Hours' }
    },
    {
      feature: 'Language Support',
      tool: 'JS + Python',
      competitors: { 'Snyk': 'Multi-language', 'npm audit': 'JS only', 'Dependabot': 'Multi', 'WhiteSource': 'Multi' }
    },
    {
      feature: 'Free OSS',
      tool: 'Full features',
      competitors: { 'Snyk': 'Limited', 'npm audit': 'Yes', 'Dependabot': 'GitHub only', 'WhiteSource': 'No' }
    },
    {
      feature: 'Funding',
      tool: '$40M Series B',
      competitors: { 'Snyk': '$1.4B total', 'npm audit': 'GitHub', 'Dependabot': 'GitHub', 'WhiteSource': '$75M' }
    }
  ],

  integrations: [
    { name: 'npm', category: 'Registry', icon: '📦', description: 'Native' },
    { name: 'PyPI', category: 'Registry', icon: '🐍', description: 'Python' },
    { name: 'GitHub', category: 'VCS', icon: '🐙', description: 'Actions' },
    { name: 'OpenAI', category: 'AI', icon: '🤖', description: 'Summaries' },
    { name: 'Anthropic', category: 'AI', icon: '🧠', description: 'Analysis' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Alerts' },
    { name: 'CI/CD', category: 'Pipeline', icon: '🔄', description: 'All major' },
    { name: 'Stripe', category: 'Payment', icon: '💳', description: 'Secure' }
  ],

  reviews: [
    {
      author: 'Security Engineer',
      role: 'DevSecOps Lead',
      company: 'Crypto Exchange',
      rating: 5,
      comment: 'Socket saved us from the 2B download npm attack. Detected wallet-drainer malware while other tools showed green. 100+ zero-days weekly is no exaggeration.',
      verified: true
    },
    {
      author: 'Frontend Lead',
      role: 'Principal Engineer',
      company: 'SaaS Platform',
      rating: 5,
      comment: 'Finally, supply chain security that catches real threats. Behavioral analysis found backdoors CVE scanners miss. Free for our OSS projects was perfect.',
      verified: true
    },
    {
      author: 'CTO',
      role: 'Co-founder',
      company: 'FinTech Startup',
      rating: 4,
      comment: '$40M funding shows they\'re here to stay. Reachability analysis cuts noise dramatically. Wish they supported more languages beyond JS/Python.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.socket.dev',
    github: 'https://github.com/socketdev',
    blog: 'https://socket.dev/blog',
    api: 'https://docs.socket.dev/reference',
    support: 'support@socket.dev'
  },

  faqs: [
    {
      question: 'How does Socket detect attacks that other tools miss?',
      answer: 'Socket uses behavioral analysis and AI to detect malicious activity, not just known CVEs. While tools like Snyk, npm audit, and Dependabot only check against databases of known vulnerabilities (CVEs), Socket analyzes what code actually does—looking for backdoors, obfuscated code, data exfiltration attempts, and suspicious network calls. This approach catches zero-day attacks immediately. For example, Socket protected users from the 2024 npm attack that compromised packages with 2 billion weekly downloads, detecting the wallet-drainer malware while CVE-based tools showed everything as safe.'
    },
    {
      question: 'What happened with the 2B download npm attack Socket prevented?',
      answer: 'In 2024, attackers compromised 20 npm packages with 2 billion weekly downloads through maintainer phishing. They injected crypto-stealing malware that drained wallets. Socket users were protected in real-time—the platform detected the malicious code patterns immediately upon publication, blocking the packages before any damage. The attack netted hackers ~$600 before being stopped. Traditional CVE-based scanners didn\'t detect anything wrong because it was a zero-day attack. This incident validated Socket\'s behavioral analysis approach, showing why detecting 100+ zero-day attacks weekly isn\'t hyperbole but necessity.'
    },
    {
      question: 'Is Socket really free for open source projects?',
      answer: 'Yes, Socket is permanently free for open source projects with full features—not a limited trial or stripped-down version. The founders are all open source maintainers themselves and committed to protecting the ecosystem. You get complete supply chain security including malicious code detection, license compliance, and GitHub integration at no cost. This isn\'t just individual projects—entire open source organizations can get free Team accounts by contacting Socket. The company believes securing open source benefits everyone since proprietary software depends on it.'
    },
    {
      question: 'How does Socket\'s AI integration work?',
      answer: 'Socket integrates with OpenAI and Anthropic APIs to provide intelligent vulnerability summaries and analysis. When Socket detects an issue, the AI generates plain-English explanations of what the vulnerability does, its potential impact, and remediation steps. This helps developers quickly understand complex security issues without security expertise. The AI also assists in behavioral analysis, identifying patterns in obfuscated code that might hide malicious intent. Unlike generic AI tools, Socket\'s AI is specifically trained on security contexts, making summaries actionable rather than theoretical.'
    },
    {
      question: 'What is reachability analysis and why does it matter?',
      answer: 'Reachability analysis determines whether vulnerable code in your dependencies is actually executed by your application. Just because you have a vulnerable dependency doesn\'t mean you\'re at risk—the vulnerable function might never be called. Socket analyzes your code paths to show which vulnerabilities are reachable and exploitable. This dramatically reduces noise: instead of hundreds of "critical" alerts for unused code, you see the 5-10 that actually matter. This feature alone can reduce security alerts by 90% while ensuring you don\'t miss real threats.'
    },
    {
      question: 'Why did Socket raise $40M if open source is free?',
      answer: 'Socket raised $40M Series B in October 2024 from Andreessen Horowitz, Elad Gil, and Jerry Yang to accelerate development and expand beyond JavaScript/Python. The funding supports enterprise features, the team building behavioral detection models, and infrastructure to scan millions of packages in real-time. While open source remains free forever, commercial users pay for advanced features, support, and scale. The software supply chain security market is expected to reach $3.5B by 2027, and Socket\'s unique behavioral approach positions them as leaders. The funding validates their model: protecting open source for free while enterprises pay for additional capabilities.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://socket.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Socket</a> revolutionizes supply chain security by detecting what others can't—over 100 zero-day attacks weekly through behavioral analysis and AI. While <Link href="/tools/snyk" className="text-purple-400 hover:text-purple-300">Snyk</Link>, npm audit, and Dependabot check known CVE databases, Socket analyzes what code actually does, catching backdoors, data exfiltration, and obfuscated malware in real-time. The platform famously protected users from the 2024 npm attack that compromised packages with 2 billion weekly downloads, detecting wallet-drainer malware while CVE-based tools showed green lights across the board.
      </p>
      
      <p className="text-lg leading-relaxed">
        Backed by $40M Series B funding from Andreessen Horowitz and built by open source maintainers, Socket delivers enterprise-grade protection while keeping open source free forever. The platform's AI integration with OpenAI and Anthropic generates actionable vulnerability summaries, while reachability analysis cuts noise by 90%, showing only exploitable vulnerabilities. Unlike <Link href="/tools/gitguardian" className="text-purple-400 hover:text-purple-300">GitGuardian</Link> which focuses on secrets or <Link href="/tools/bearer" className="text-purple-400 hover:text-purple-300">Bearer</Link> which scans for privacy issues, Socket specializes in the growing threat of supply chain attacks—the vector behind SolarWinds, Codecov, and countless npm incidents. For teams building with JavaScript or Python, Socket isn't optional security theater—it's essential protection against the 100+ weekly zero-days targeting the open source ecosystem you depend on.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Socket?',
    segments: [
      {
        name: 'Open Source Projects',
        description: 'Maintainers protecting their ecosystems with free full-featured accounts.',
        icon: Globe,
        stats: 'Free forever'
      },
      {
        name: 'JavaScript Teams',
        description: 'Frontend and Node.js developers securing npm dependencies.',
        icon: Package,
        stats: '100+ zero-days'
      },
      {
        name: 'Python Developers',
        description: 'Teams protecting PyPI packages from supply chain attacks.',
        icon: FileCode,
        stats: 'Real-time'
      },
      {
        name: 'Security Teams',
        description: 'DevSecOps preventing the next SolarWinds or Codecov incident.',
        icon: Shield,
        stats: '$40M backed'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Socket Unique?',
    points: [
      {
        title: '100+ Weekly Zero-Days',
        description: 'Detects new supply chain attacks others miss entirely.',
        icon: AlertTriangle
      },
      {
        title: 'Behavioral Analysis',
        description: 'Analyzes what code does, not just known vulnerabilities.',
        icon: Brain
      },
      {
        title: 'Free for Open Source',
        description: 'Full features permanently free for OSS projects.',
        icon: CheckCircle
      },
      {
        title: 'Minutes Not Days',
        description: 'Blocks attacks within minutes of publication.',
        icon: Zap
      },
      {
        title: 'Reachability Analysis',
        description: 'Shows only exploitable vulnerabilities, cuts 90% noise.',
        icon: Target
      }
    ]
  }
}

export default function SocketPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={socketData} />
    </>
  )
}