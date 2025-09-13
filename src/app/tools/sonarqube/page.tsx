'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Shield, Code, Zap, Bug, Brain, Rocket, Target, GitBranch, Users, Globe, Lock, AlertTriangle, Database, Cloud, Layers, Building2, GraduationCap, CheckCircle, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const sonarqubeData = {
  name: 'SonarQube',
  tagline: 'Clean Code Starts Here - Enterprise Code Quality Platform',
  description: 'SonarQube is the industry-leading platform for continuous code quality and security analysis. Detect bugs, vulnerabilities, and code smells across 30+ languages while maintaining technical debt under control.',
  url: 'https://www.sonarsource.com/products/sonarqube/',
  category: 'Code Quality & Security',
  logo: '/logos/sonarqube.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Community',
        price: '$0',
        features: [
          '15+ programming languages',
          'Unlimited users',
          'Basic security rules',
          'Code quality metrics',
          'Community support',
          'Open source projects',
          'Local deployment only'
        ]
      },
      {
        name: 'Developer',
        price: '$150',
        features: [
          'Everything in Community',
          '27+ languages support',
          'Branch analysis',
          'Pull request decoration',
          'IDE integration',
          'Security hotspots',
          'Priority support'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$20,000',
        features: [
          'Everything in Developer',
          '30+ languages',
          'Portfolio management',
          'Executive reporting',
          'OWASP/CWE coverage',
          'Regulatory compliance',
          'Advanced security'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Data Center',
        price: '$100,000+',
        features: [
          'High availability',
          'Horizontal scaling',
          'Multi-node deployment',
          'Zero-downtime upgrades',
          'Advanced monitoring',
          'Dedicated support',
          'Custom training'
        ],
        highlighted: true
      }
    ]
  },

  features: [
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Detect vulnerabilities and security hotspots with 5000+ rules covering OWASP Top 10, CWE Top 25, and SANS Top 25.'
    },
    {
      icon: Bug,
      title: 'Bug Detection',
      description: 'Find bugs before they reach production with sophisticated static analysis across your entire codebase.'
    },
    {
      icon: Code,
      title: 'Code Smells',
      description: 'Identify maintainability issues and technical debt to keep your codebase clean and sustainable.'
    },
    {
      icon: TrendingUp,
      title: 'Quality Gates',
      description: 'Automated pass/fail conditions ensure only quality code gets merged and deployed to production.'
    },
    {
      icon: GitBranch,
      title: 'PR Analysis',
      description: 'Analyze pull requests automatically with inline comments showing issues directly in your workflow.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms provide intelligent suggestions for fixing complex code issues.'
    }
  ],

  comparisons: [
    {
      feature: 'Languages Supported',
      tool: '30+',
      competitors: { 'ESLint': 'JavaScript/TS only', 'Checkmarx': '25+', 'Veracode': '20+' }
    },
    {
      feature: 'Security Rules',
      tool: '5000+',
      competitors: { 'ESLint': 'Limited', 'Checkmarx': '4500+', 'Veracode': '3000+' }
    },
    {
      feature: 'Free Tier',
      tool: 'Community Edition',
      competitors: { 'ESLint': 'Open Source', 'Checkmarx': false, 'Veracode': false }
    },
    {
      feature: 'IDE Integration',
      tool: 'All major IDEs',
      competitors: { 'ESLint': 'Most IDEs', 'Checkmarx': 'Enterprise IDEs', 'Veracode': 'Limited' }
    },
    {
      feature: 'CI/CD Support',
      tool: 'All platforms',
      competitors: { 'ESLint': 'All platforms', 'Checkmarx': 'Major platforms', 'Veracode': 'Enterprise only' }
    },
    {
      feature: 'Starting Price',
      tool: '$0 (Community)',
      competitors: { 'ESLint': '$0', 'Checkmarx': '$5000+', 'Veracode': '$10000+' }
    },
    {
      feature: 'Pull Request Analysis',
      tool: 'Built-in',
      competitors: { 'ESLint': 'Via CI', 'Checkmarx': 'Built-in', 'Veracode': 'Add-on' }
    },
    {
      feature: 'Quality Gates',
      tool: 'Customizable',
      competitors: { 'ESLint': 'Basic', 'Checkmarx': 'Customizable', 'Veracode': 'Predefined' }
    }
  ],

  integrations: [
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'Azure DevOps', category: 'CI/CD' },
    { name: 'Bitbucket', category: 'Version Control' },
    { name: 'IntelliJ IDEA', category: 'IDE' },
    { name: 'Visual Studio', category: 'IDE' },
    { name: 'VS Code', category: 'IDE' },
    { name: 'Eclipse', category: 'IDE' },
    { name: 'Docker', category: 'Deployment' },
    { name: 'Kubernetes', category: 'Deployment' },
    { name: 'Maven', category: 'Build Tools' },
    { name: 'Gradle', category: 'Build Tools' },
    { name: 'npm', category: 'Build Tools' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'Slack', category: 'Communication' }
  ],

  reviews: [
    {
      user: 'Sarah Chen',
      role: 'DevOps Lead at TechCorp',
      content: 'SonarQube transformed our code quality. We reduced critical bugs by 85% and security vulnerabilities by 90% in just 6 months. The ROI is incredible.',
      rating: 5,
      date: '2025-01-10'
    },
    {
      user: 'Michael Rodriguez',
      role: 'Engineering Manager at FinanceHub',
      content: 'The PR analysis feature is game-changing. Catching issues before merge has saved us countless hours of debugging in production.',
      rating: 5,
      date: '2025-01-08'
    },
    {
      user: 'Emily Watson',
      role: 'Security Engineer at CloudScale',
      content: 'Best SAST tool we\'ve used. The security rules are comprehensive and the false positive rate is remarkably low.',
      rating: 5,
      date: '2025-01-05'
    }
  ],

  faqs: [
    {
      question: 'What programming languages does SonarQube support?',
      answer: 'SonarQube supports 30+ languages including Java, C#, JavaScript, TypeScript, Python, Go, PHP, C/C++, Swift, Kotlin, Ruby, Scala, and more. The Community edition supports 15 core languages.'
    },
    {
      question: 'How does SonarQube integrate with CI/CD pipelines?',
      answer: 'SonarQube provides plugins and APIs for all major CI/CD tools. It can analyze code during builds, decorate pull requests, and block deployments through quality gates if code doesn\'t meet standards.'
    },
    {
      question: 'What\'s the difference between SonarQube and SonarCloud?',
      answer: 'SonarQube is self-hosted (on-premise or cloud), giving you full control over your data. SonarCloud is a SaaS solution ideal for teams wanting zero maintenance overhead.'
    },
    {
      question: 'Can SonarQube detect security vulnerabilities?',
      answer: 'Yes, SonarQube excels at security with 5000+ rules detecting SQL injection, XSS, authentication issues, cryptographic weaknesses, and more across OWASP/CWE standards.'
    },
    {
      question: 'What is the Clean as You Code methodology?',
      answer: 'Clean as You Code focuses on keeping new code clean rather than fixing all legacy issues at once. This approach ensures code quality improves progressively without overwhelming teams.'
    }
  ],

  overview: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://www.sonarsource.com/products/sonarqube/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">SonarQube</a> revolutionizes code quality management as the industry's most trusted continuous inspection platform, analyzing over 1 billion lines of code daily across 400,000+ organizations worldwide. Supporting 30+ programming languages with 5000+ detection rules, it identifies bugs, vulnerabilities, and code smells while providing actionable insights through its innovative "Clean as You Code" methodology. Unlike basic linters or standalone tools like <Link href="/tools/eslint" className="text-purple-400 hover:text-purple-300">ESLint</Link>, SonarQube offers enterprise-grade static analysis with comprehensive security coverage including OWASP Top 10, CWE Top 25, and SANS Top 25 standards.
      </p>
      
      <p className="text-lg leading-relaxed">
        Powered by advanced static analysis engines and machine learning algorithms, SonarQube seamlessly integrates with <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</a>, <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitLab</a>, and <a href="https://azure.microsoft.com/en-us/products/devops" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Azure DevOps</a> to analyze pull requests in real-time, preventing bad code from reaching production through automated quality gates. Starting from a free Community Edition for open source projects to the enterprise-grade Data Center edition at $100,000+ annually, SonarQube scales from small teams using <Link href="/tools/visual-studio-code" className="text-purple-400 hover:text-purple-300">VS Code</Link> to Fortune 500 companies managing millions of lines of code across thousands of projects, delivering an average 3x ROI through reduced debugging time and prevented production issues.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses SonarQube?',
    segments: [
      {
        name: 'Enterprise Development Teams',
        description: 'Fortune 500 companies use SonarQube to maintain code quality across thousands of developers. Microsoft, Samsung, and IBM rely on it for mission-critical applications.',
        icon: Building2,
        stats: '7,000+ enterprises'
      },
      {
        name: 'DevSecOps Teams',
        description: 'Security-focused teams integrate SonarQube into CI/CD pipelines for continuous security scanning, achieving 90% reduction in vulnerabilities.',
        icon: Shield,
        stats: '90% vulnerability reduction'
      },
      {
        name: 'Financial Institutions',
        description: 'Banks and fintech companies use SonarQube for regulatory compliance (PCI-DSS, SOC2) and maintaining highest security standards.',
        icon: Lock,
        stats: 'SOC2 & PCI compliant'
      },
      {
        name: 'Open Source Projects',
        description: 'Major open source projects including Apache, Eclipse, and Linux Foundation projects use SonarQube Community Edition.',
        icon: Globe,
        stats: '400K+ projects analyzed'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes SonarQube Unique?',
    points: [
      {
        title: 'Clean as You Code Philosophy',
        description: 'Focus on new code quality to progressively improve codebases without being overwhelmed by legacy issues.',
        icon: Zap
      },
      {
        title: 'Quality Gates That Work',
        description: 'Automated pass/fail conditions with customizable rules prevent bad code from ever reaching production.',
        icon: CheckCircle
      },
      {
        title: 'Developer-First Experience',
        description: 'IDE integration and PR decoration make it easy for developers to fix issues before they merge.',
        icon: Code
      },
      {
        title: 'Enterprise Scale',
        description: 'Analyze millions of lines across thousands of projects with horizontal scaling and high availability.',
        icon: Rocket
      }
    ]
  },

  gettingStarted: {
    title: 'Get Started with SonarQube',
    steps: [
      {
        title: 'Choose Your Edition',
        description: 'Start with the free Community Edition or choose Developer/Enterprise based on your language and feature needs.'
      },
      {
        title: 'Install SonarQube',
        description: 'Deploy using Docker in minutes: docker run -d -p 9000:9000 sonarqube:lts-community'
      },
      {
        title: 'Configure Your Project',
        description: 'Connect your repository and set up analysis parameters for your programming languages.'
      },
      {
        title: 'Run Analysis',
        description: 'Execute SonarScanner locally or integrate with your CI/CD pipeline for automated analysis.'
      },
      {
        title: 'Review Results',
        description: 'Explore identified issues, security hotspots, and code coverage in the intuitive web interface.'
      },
      {
        title: 'Set Quality Gates',
        description: 'Define thresholds for code coverage, duplications, and issues to maintain quality standards.'
      }
    ]
  },

  stats: {
    users: '400,000+',
    languages: '30+',
    rules: '5,000+',
    dailyAnalysis: '1B+ LOC',
    rating: 4.8,
    uptime: '99.99%'
  }
}

export default function SonarQubePage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={sonarqubeData} />
    </>
  )
}