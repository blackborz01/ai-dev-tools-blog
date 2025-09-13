'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Code, Zap, Lock, Brain, Rocket, Target, GitBranch, Users, Globe, Database, Cloud, Layers, Building2, AlertTriangle, CheckCircle, TrendingUp, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const checkmarxData = {
  name: 'Checkmarx',
  tagline: 'Enterprise Application Security Testing at DevOps Speed',
  description: 'Checkmarx is the global leader in application security testing (AST), providing comprehensive SAST, SCA, and API security solutions. Secure your code from the first line to deployment with AI-powered vulnerability detection.',
  url: 'https://checkmarx.com',
  category: 'Application Security',
  logo: '/logos/checkmarx.svg',
  
  pricing: {
    type: 'paid' as const,
    startingPrice: 'Custom',
    hasFreeTier: false,
    plans: [
      {
        name: 'Checkmarx One Essentials',
        price: '$15,000',
        features: [
          'SAST for 5 applications',
          'Up to 25 developers',
          'Core language support',
          'Basic vulnerability detection',
          'Standard support',
          'Cloud deployment',
          'Monthly scans'
        ]
      },
      {
        name: 'Checkmarx One Pro',
        price: '$50,000',
        features: [
          'Everything in Essentials',
          'Unlimited applications',
          'Up to 100 developers',
          'SCA included',
          'API security testing',
          'Priority support',
          'Weekly scans',
          'Advanced remediation'
        ],
        highlighted: true
      },
      {
        name: 'Checkmarx One Enterprise',
        price: '$150,000+',
        features: [
          'Everything in Pro',
          'Unlimited developers',
          'IaC security',
          'Container scanning',
          'Custom rules engine',
          'Dedicated support',
          'Continuous scanning',
          'Executive dashboards'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Checkmarx One Platform',
        price: '$250,000+',
        features: [
          'Complete AST platform',
          'SAST, SCA, API, IaC',
          'Supply chain security',
          'AI-powered remediation',
          'Professional services',
          'Custom integrations',
          'White-glove onboarding',
          '24/7 premium support'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Shield,
      title: 'Static Application Security Testing (SAST)',
      description: 'Industry-leading SAST with lowest false positive rate. Scan source code for vulnerabilities across 50+ languages and frameworks.'
    },
    {
      icon: Database,
      title: 'Software Composition Analysis (SCA)',
      description: 'Identify and remediate open source vulnerabilities and license risks in your dependencies and supply chain.'
    },
    {
      icon: Globe,
      title: 'API Security Testing',
      description: 'Comprehensive API security testing for REST, GraphQL, and SOAP APIs with automated vulnerability detection.'
    },
    {
      icon: Cloud,
      title: 'Infrastructure as Code (IaC) Security',
      description: 'Scan Terraform, CloudFormation, Kubernetes, and Docker configurations for security misconfigurations.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Remediation',
      description: 'Get AI-generated fixes with context-aware remediation guidance that developers can apply with one click.'
    },
    {
      icon: Eye,
      title: 'AppSec Posture Management',
      description: 'Complete visibility into your application security posture with risk scoring and prioritization.'
    }
  ],

  comparisons: [
    {
      feature: 'Languages Supported',
      tool: '50+',
      competitors: { 'SonarQube': '30+', 'Veracode': '25+', 'Snyk': '35+' }
    },
    {
      feature: 'SAST Accuracy',
      tool: '99% (Lowest FP)',
      competitors: { 'SonarQube': '85%', 'Veracode': '90%', 'Snyk': '88%' }
    },
    {
      feature: 'Scan Speed',
      tool: '~5 min/million LOC',
      competitors: { 'SonarQube': '~10 min', 'Veracode': '~20 min', 'Snyk': '~8 min' }
    },
    {
      feature: 'AI Remediation',
      tool: 'Advanced AI',
      competitors: { 'SonarQube': 'Basic', 'Veracode': 'AI-assisted', 'Snyk': 'AI-powered' }
    },
    {
      feature: 'Free Tier',
      tool: false,
      competitors: { 'SonarQube': 'Community', 'Veracode': false, 'Snyk': 'Limited' }
    },
    {
      feature: 'Starting Price',
      tool: '$15,000/year',
      competitors: { 'SonarQube': '$0', 'Veracode': '$30,000/year', 'Snyk': '$98/month' }
    },
    {
      feature: 'Compliance Support',
      tool: 'All major standards',
      competitors: { 'SonarQube': 'Basic', 'Veracode': 'Comprehensive', 'Snyk': 'Standard' }
    },
    {
      feature: 'IDE Plugins',
      tool: 'All major IDEs',
      competitors: { 'SonarQube': 'All major', 'Veracode': 'Limited', 'Snyk': 'Most IDEs' }
    }
  ],

  integrations: [
    { name: 'GitHub', category: 'Version Control' },
    { name: 'GitLab', category: 'Version Control' },
    { name: 'Bitbucket', category: 'Version Control' },
    { name: 'Azure DevOps', category: 'CI/CD' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'CircleCI', category: 'CI/CD' },
    { name: 'TeamCity', category: 'CI/CD' },
    { name: 'Bamboo', category: 'CI/CD' },
    { name: 'IntelliJ IDEA', category: 'IDE' },
    { name: 'Visual Studio', category: 'IDE' },
    { name: 'VS Code', category: 'IDE' },
    { name: 'Eclipse', category: 'IDE' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'ServiceNow', category: 'ITSM' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Microsoft Teams', category: 'Communication' }
  ],

  reviews: [
    {
      user: 'David Kim',
      role: 'CISO at FinTech Global',
      content: 'Checkmarx transformed our AppSec program. We reduced critical vulnerabilities by 92% and achieved SOC2 compliance in record time. The AI remediation saves our developers hours daily.',
      rating: 5,
      date: '2025-01-12'
    },
    {
      user: 'Maria Santos',
      role: 'DevSecOps Lead at TechUnicorn',
      content: 'The accuracy is unmatched. We switched from Veracode and saw 60% fewer false positives. The IDE integration means developers fix issues before committing.',
      rating: 5,
      date: '2025-01-10'
    },
    {
      user: 'James Thompson',
      role: 'VP Engineering at CloudNative Inc',
      content: 'Best-in-class SAST combined with comprehensive SCA. The unified platform approach saves us from juggling multiple security tools.',
      rating: 5,
      date: '2025-01-08'
    }
  ],

  faqs: [
    {
      question: 'What makes Checkmarx different from other SAST tools?',
      answer: 'Checkmarx offers the industry\'s lowest false positive rate (under 10%), fastest scan times, and most comprehensive language support with 50+ languages. The AI-powered remediation provides actual code fixes, not just vulnerability reports.'
    },
    {
      question: 'Does Checkmarx support cloud-native and containerized applications?',
      answer: 'Yes, Checkmarx One includes comprehensive IaC scanning for Terraform, CloudFormation, Kubernetes manifests, and Docker configurations. It also integrates with container registries for runtime protection.'
    },
    {
      question: 'How does Checkmarx pricing work?',
      answer: 'Checkmarx offers tiered pricing based on number of applications, developers, and features needed. Essentials starts at $15,000/year for smaller teams, with Enterprise plans starting at $150,000/year for unlimited scale.'
    },
    {
      question: 'Can Checkmarx integrate with our existing DevOps pipeline?',
      answer: 'Absolutely. Checkmarx provides native plugins for all major CI/CD platforms including Jenkins, GitHub Actions, GitLab CI, Azure DevOps, and more. Scans can be triggered automatically on commits, PRs, or scheduled intervals.'
    },
    {
      question: 'What compliance standards does Checkmarx support?',
      answer: 'Checkmarx supports all major compliance standards including OWASP Top 10, CWE/SANS Top 25, PCI DSS, HIPAA, SOC2, ISO 27001, NIST, and GDPR. It provides automated compliance reporting and audit trails.'
    }
  ],

  overview: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://checkmarx.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Checkmarx</a> dominates the application security testing market as the most accurate and comprehensive AST platform, trusted by 40% of Fortune 100 companies and scanning over 100 trillion lines of code annually. With its revolutionary Checkmarx One platform combining SAST, SCA, API Security, and IaC scanning, it delivers 99% accuracy with the industry's lowest false positive rate while supporting 50+ programming languages. Unlike competitors like <Link href="/tools/sonarqube" className="text-purple-400 hover:text-purple-300">SonarQube</Link> that focus on code quality, or <Link href="/tools/snyk" className="text-purple-400 hover:text-purple-300">Snyk</Link> that emphasizes open source security, Checkmarx provides enterprise-grade application security testing with AI-powered remediation that generates actual code fixes developers can apply instantly.
      </p>
      
      <p className="text-lg leading-relaxed">
        Powered by proprietary AI engines and 15+ years of vulnerability research, Checkmarx seamlessly integrates with <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</a>, <a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitLab</a>, and all major CI/CD platforms to shift security left without slowing development. Starting at $15,000/year for small teams to $250,000+ for enterprise deployments, Checkmarx delivers 10x ROI through prevented breaches, reduced remediation costs, and accelerated secure development. Leading organizations including Samsung, Siemens, and Salesforce rely on Checkmarx to secure their applications while maintaining DevOps velocity, making it the gold standard for teams using <Link href="/tools/visual-studio" className="text-purple-400 hover:text-purple-300">Visual Studio</Link>, <Link href="/tools/intellij-idea" className="text-purple-400 hover:text-purple-300">IntelliJ IDEA</Link>, and modern development workflows.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Checkmarx?',
    segments: [
      {
        name: 'Fortune 500 Enterprises',
        description: '40% of Fortune 100 companies including Samsung, Siemens, SAP, and Salesforce rely on Checkmarx for application security.',
        icon: Building2,
        stats: '4,000+ enterprises'
      },
      {
        name: 'Financial Services',
        description: 'Banks and fintech companies use Checkmarx for PCI-DSS compliance and protecting sensitive financial applications.',
        icon: Lock,
        stats: '60% of top banks'
      },
      {
        name: 'Government & Defense',
        description: 'Government agencies and defense contractors trust Checkmarx for securing critical infrastructure and classified systems.',
        icon: Shield,
        stats: 'FedRAMP authorized'
      },
      {
        name: 'Healthcare & Life Sciences',
        description: 'Healthcare providers and pharma companies use Checkmarx for HIPAA compliance and protecting patient data.',
        icon: Users,
        stats: 'HIPAA compliant'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Checkmarx Unique?',
    points: [
      {
        title: 'Lowest False Positive Rate',
        description: 'Industry-leading accuracy with less than 10% false positives, saving developers from chasing phantom vulnerabilities.',
        icon: CheckCircle
      },
      {
        title: 'AI-Powered Auto-Remediation',
        description: 'Not just detection - get actual code fixes generated by AI that understand your application context.',
        icon: Brain
      },
      {
        title: 'Unified AST Platform',
        description: 'Single platform for SAST, SCA, API Security, and IaC scanning eliminates tool sprawl and licensing complexity.',
        icon: Layers
      },
      {
        title: 'Incremental Scanning',
        description: 'Scan only changed code for results in seconds, not hours, enabling true shift-left security.',
        icon: Zap
      }
    ]
  },

  gettingStarted: {
    title: 'Get Started with Checkmarx',
    steps: [
      {
        title: 'Request a Demo',
        description: 'Schedule a personalized demo to see Checkmarx scan your actual code and identify real vulnerabilities.'
      },
      {
        title: 'Proof of Concept',
        description: 'Run a 30-day POC on your applications to validate accuracy and integration with your pipeline.'
      },
      {
        title: 'Onboarding',
        description: 'White-glove onboarding with dedicated success manager to configure rules and integrations.'
      },
      {
        title: 'IDE Integration',
        description: 'Install plugins for Visual Studio, IntelliJ, VS Code, and Eclipse for instant developer feedback.'
      },
      {
        title: 'Pipeline Integration',
        description: 'Configure CI/CD plugins to automatically scan on commits and block vulnerable code.'
      },
      {
        title: 'Continuous Improvement',
        description: 'Leverage AppSec coaching and best practices from Checkmarx experts to mature your program.'
      }
    ]
  },

  stats: {
    users: '4,000+',
    languages: '50+',
    scans: '100T+ LOC/year',
    accuracy: '99%',
    rating: 4.7,
    falsePositives: '<10%'
  }
}

export default function CheckmarxPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={checkmarxData} />
    </>
  )
}