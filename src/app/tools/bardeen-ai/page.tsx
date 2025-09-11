'use client'

import ToolPageTemplate from '@/components/ToolPageTemplate'
import { Code, Zap, Brain, Shield, GitBranch, Rocket, Target, Users, Globe, Package, Database, Cloud, Layers, Building2, Briefcase, GraduationCap, Sparkles, Bot, FileCode, Terminal, MousePointer, Workflow } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const bardeenAIData = {
  name: 'Bardeen AI',
  tagline: 'GTM copilot for browser automation - no-code workflows in minutes',
  description: 'Bardeen AI revolutionizes workflow automation with browser-based AI agents, web scraping, and 100+ app integrations. Build complex automations without code using visual playbooks. From free tier to $1,500/month enterprise with dedicated GTM consultant.',
  url: 'https://bardeen.ai',
  category: 'Automation',
  logo: '/logos/bardeen-ai.svg',
  
  pricing: {
    type: 'freemium' as const,
    startingPrice: '$0',
    hasFreeTier: true,
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: [
          '100 credits/month',
          'Unlimited basic automations',
          '100+ pre-built templates',
          'Web scraping basics',
          'Chrome extension',
          'Core integrations',
          'Community support'
        ],
        highlighted: true
      },
      {
        name: 'Starter',
        price: '$99',
        features: [
          '15,000 credits/year',
          'Everything in Free',
          'Advanced scraping',
          'Priority integrations',
          'AI Playbook Builder',
          'Email support',
          '$129/mo monthly'
        ]
      },
      {
        name: 'Teams',
        price: '$500',
        features: [
          '120,000 credits/year',
          'Everything in Starter',
          'CRM + outreach integrations',
          'Waterfall enrichment',
          'Cloud workflows',
          '2 custom AI Playbooks',
          'Dedicated support'
        ]
      }
    ],
    businessPlans: [
      {
        name: 'Enterprise',
        price: '$1,500',
        features: [
          '500,000+ credits/year',
          'Everything in Teams',
          'Dedicated GTM consultant',
          '5+ custom AI Playbooks',
          'SSO authentication',
          'Priority integrations',
          'Custom contracts'
        ],
        highlighted: true
      },
      {
        name: 'AIgency',
        price: 'Custom',
        features: [
          'AI + human expertise blend',
          'Personalized guidance',
          'Complex workflow design',
          'Full implementation',
          'Ongoing optimization',
          'Strategic consulting',
          'Contact sales'
        ]
      }
    ]
  },

  features: [
    {
      icon: MousePointer,
      title: 'Browser Automation',
      description: 'Chrome extension automates any browser task. Runs locally, data never leaves your browser.'
    },
    {
      icon: Workflow,
      title: 'No-Code Builder',
      description: 'Visual canvas to create custom automations. Connect apps with drag-and-drop simplicity.'
    },
    {
      icon: Bot,
      title: 'AI Agents & Copilots',
      description: 'Domain-specific AI agents for sales, marketing, and operations. GTM copilot for teams.'
    },
    {
      icon: Globe,
      title: 'Web Scraping',
      description: 'Scrape data from any website. Pre-built scrapers for 100+ popular sites, no code required.'
    },
    {
      icon: Package,
      title: '100+ Integrations',
      description: 'Connect Google Sheets, Slack, HubSpot, Salesforce, Zoom, LinkedIn, and more seamlessly.'
    },
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'Data stays in your browser. Nothing stored on servers. Enterprise-grade security.'
    }
  ],

  comparisons: [
    {
      feature: 'Monthly Price',
      tool: '$0 Free / $99 Starter',
      competitors: { 'Zapier': '$20-100', 'Make': '$9-65', 'n8n': '$20-150', 'Pipedream': '$19-99' }
    },
    {
      feature: 'Browser Automation',
      tool: 'Native Chrome',
      competitors: { 'Zapier': 'Limited', 'Make': 'No', 'n8n': 'Limited', 'Pipedream': 'No' }
    },
    {
      feature: 'Web Scraping',
      tool: 'Built-in 100+ sites',
      competitors: { 'Zapier': 'Basic', 'Make': 'Basic', 'n8n': 'Advanced', 'Pipedream': 'Code required' }
    },
    {
      feature: 'AI Features',
      tool: 'AI agents included',
      competitors: { 'Zapier': 'AI add-on', 'Make': 'Limited', 'n8n': 'Via plugins', 'Pipedream': 'Basic' }
    },
    {
      feature: 'No-Code Builder',
      tool: 'Visual canvas',
      competitors: { 'Zapier': 'Linear flow', 'Make': 'Visual', 'n8n': 'Node-based', 'Pipedream': 'Code-first' }
    },
    {
      feature: 'GTM Focus',
      tool: 'Specialized',
      competitors: { 'Zapier': 'General', 'Make': 'General', 'n8n': 'Technical', 'Pipedream': 'Developer' }
    }
  ],

  integrations: [
    { name: 'Google Sheets', category: 'Productivity', icon: '📊', description: 'Data sync' },
    { name: 'Slack', category: 'Chat', icon: '💬', description: 'Notifications' },
    { name: 'HubSpot', category: 'CRM', icon: '🎯', description: 'Full sync' },
    { name: 'Salesforce', category: 'CRM', icon: '☁️', description: 'Enterprise' },
    { name: 'LinkedIn', category: 'Social', icon: '💼', description: 'Prospecting' },
    { name: 'Zoom', category: 'Meeting', icon: '📹', description: 'Recording' },
    { name: 'Gmail', category: 'Email', icon: '📧', description: 'Automation' },
    { name: 'Notion', category: 'Docs', icon: '📝', description: 'Database sync' }
  ],

  reviews: [
    {
      author: 'Sales Manager',
      role: 'Head of SDR',
      company: 'B2B SaaS',
      rating: 5,
      comment: 'Bardeen transformed our outreach. Web scraping LinkedIn + auto-enrichment saves 20 hours weekly. The GTM copilot is worth the Teams price alone.',
      verified: true
    },
    {
      author: 'Revenue Ops',
      role: 'Director',
      company: 'Series B Startup',
      rating: 5,
      comment: 'Finally, automation that sales teams can actually use. No-code builder is intuitive. Cloud workflows on Teams plan eliminated our Zapier subscription.',
      verified: true
    },
    {
      author: 'Marketing Lead',
      role: 'Growth Manager',
      company: 'Tech Company',
      rating: 4,
      comment: 'Browser automation is game-changing for research. Scraping competitors\' pricing pages automatically. Wish free tier had more credits.',
      verified: true
    }
  ],

  resources: {
    documentation: 'https://docs.bardeen.ai',
    templates: 'https://bardeen.ai/playbooks',
    community: 'https://bardeen.ai/community',
    blog: 'https://bardeen.ai/blog',
    pricing: 'https://bardeen.ai/pricing'
  },

  faqs: [
    {
      question: 'How does Bardeen AI differ from Zapier or Make?',
      answer: 'Bardeen specializes in browser automation and GTM (go-to-market) workflows, while Zapier/Make are general-purpose. Key differences: Native Chrome extension for browser tasks (Zapier can\'t automate browsers), built-in web scraping for 100+ sites (vs basic in competitors), AI agents specifically for sales/marketing (not just general automation), data stays in your browser (vs cloud processing), and visual no-code builder optimized for non-technical GTM teams. Bardeen excels at prospecting, enrichment, and CRM workflows.'
    },
    {
      question: 'What exactly are credits and how fast do they get used?',
      answer: '1 credit = 1 action (scraping a page, sending an email, updating CRM, etc.). Free tier gets 100 credits/month—enough for light automation. Typical usage: Simple workflow (5-10 credits), LinkedIn prospecting with enrichment (20-30 credits), Complex multi-step automation (50-100 credits). Starter plan\'s 15,000 annual credits (~1,250/month) handles most individual needs. Teams doing heavy prospecting need the 120,000 credit Teams plan. Credits don\'t expire within your billing period.'
    },
    {
      question: 'Is the browser automation really no-code?',
      answer: 'Yes, genuinely no-code for 95% of use cases. The visual canvas lets you drag-drop actions like "click button," "extract text," "fill form" without writing selectors. Pre-built playbooks cover common scenarios (LinkedIn scraping, email extraction, CRM updates). For complex sites, you might need basic CSS selector knowledge, but Bardeen\'s AI helps identify elements. TechCrunch called it "the most intuitive automation tool for non-technical users"—first-timers create workflows in minutes.'
    },
    {
      question: 'How secure is it if everything runs in my browser?',
      answer: 'Bardeen is actually MORE secure because of browser-based execution: Your data never touches Bardeen\'s servers (unlike cloud automation tools), credentials stay in your browser\'s secure storage, OAuth tokens are browser-encrypted, and you control exactly what sites/data Bardeen accesses. For enterprise, they offer SSO, custom security reviews, and compliance certifications. The only cloud component is optional cloud workflows (Teams plan+) for scheduled automations.'
    },
    {
      question: 'What makes the Teams plan worth $500/month?',
      answer: 'Teams plan delivers massive ROI for GTM teams: 120,000 credits handle 4,000+ complex workflows monthly, CRM + outreach integrations (HubSpot, Salesforce, Outreach.io), waterfall enrichment finds emails/data across multiple sources, cloud workflows run automations 24/7 (not just when browser is open), 2 custom AI Playbooks built by Bardeen experts for your specific needs. Most teams save 20-40 hours/week on prospecting alone. One customer reported 3x pipeline growth in 90 days.'
    },
    {
      question: 'What is the AIgency service mentioned in Enterprise?',
      answer: 'AIgency is Bardeen\'s white-glove service combining AI automation with human expertise. You get a dedicated GTM consultant who: analyzes your current workflows, designs custom automations, builds and tests playbooks, trains your team, and provides ongoing optimization. It\'s like hiring an automation expert + Bardeen licenses. Perfect for companies wanting transformation without the learning curve. Pricing is custom but typically 2-3x the Enterprise plan, with guaranteed ROI metrics.'
    }
  ],

  seoContent: (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        <a href="https://bardeen.ai" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Bardeen AI</a> has revolutionized browser automation by making it accessible to non-technical GTM teams through its intuitive Chrome extension and no-code builder. Unlike general automation tools like <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Zapier</a> or Make, Bardeen specializes in sales and marketing workflows—prospecting on LinkedIn, enriching leads, scraping competitor data, and syncing everything to your CRM without writing a single line of code. With AI agents acting as GTM copilots and data that never leaves your browser, Bardeen delivers enterprise-grade automation with startup simplicity.
      </p>
      
      <p className="text-lg leading-relaxed">
        The platform's pricing scales brilliantly from free (100 credits) to enterprise ($1,500/month with 500K+ credits), making it accessible for solopreneurs while powerful enough for Fortune 500 GTM teams. What sets Bardeen apart is its focus on browser-native automation—while <Link href="/tools/chatgpt" className="text-purple-400 hover:text-purple-300">ChatGPT</Link> and <Link href="/tools/claude" className="text-purple-400 hover:text-purple-300">Claude</Link> can write code for automation, Bardeen lets you build it visually in minutes. The web scraping capabilities alone justify the cost, with pre-built scrapers for 100+ sites that would take days to code manually. For GTM teams tired of the Zapier tax or Make's complexity, Bardeen offers a specialized solution that speaks their language—leads, enrichment, and pipeline—not just generic "zaps" and "scenarios." With customers reporting 20-40 hour weekly time savings and 3x pipeline growth, Bardeen isn't just another automation tool—it's a GTM force multiplier.
      </p>
    </div>
  ),

  whoUsesIt: {
    title: 'Who Uses Bardeen AI?',
    segments: [
      {
        name: 'Sales Teams',
        description: 'SDRs and AEs automating prospecting, enrichment, and CRM updates.',
        icon: Briefcase,
        stats: '20+ hrs saved/week'
      },
      {
        name: 'Revenue Ops',
        description: 'Ops teams building scalable GTM workflows without engineering.',
        icon: Target,
        stats: '3x pipeline growth'
      },
      {
        name: 'Marketing Teams',
        description: 'Growth marketers scraping data and automating campaigns.',
        icon: Rocket,
        stats: '100+ integrations'
      },
      {
        name: 'Customer Success',
        description: 'CSMs automating onboarding, health scores, and renewals.',
        icon: Users,
        stats: 'GTM specialized'
      }
    ]
  },

  whatMakesItUnique: {
    title: 'What Makes Bardeen AI Unique?',
    points: [
      {
        title: 'Browser-Native',
        description: 'Chrome extension automates any website, data stays local.',
        icon: MousePointer
      },
      {
        title: 'GTM Specialized',
        description: 'Built for sales, marketing, and revenue teams specifically.',
        icon: Target
      },
      {
        title: 'No-Code Canvas',
        description: 'Visual builder that non-technical teams master in minutes.',
        icon: Workflow
      },
      {
        title: 'Web Scraping Power',
        description: '100+ pre-built scrapers, extract data from any site.',
        icon: Globe
      },
      {
        title: 'AI GTM Copilot',
        description: 'Domain-specific agents that understand sales workflows.',
        icon: Bot
      }
    ]
  }
}

export default function BardeenAIPage() {
  return (
    <>
      <Navbar />
      <ToolPageTemplate toolData={bardeenAIData} />
    </>
  )
}