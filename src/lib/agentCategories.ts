export interface AgentCategory {
  id: string;
  name: string;
  description: string;
  shortDesc: string;
  agentCount: number;
  tokenSavings: string;
  primaryUsers: string[];
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  icon: string; // We'll use this for icon names
  metrics: {
    avgTimeSaved: string;
    avgTokenReduction: string;
    popularityScore: number;
  };
}

export const agentCategories: AgentCategory[] = [
  {
    id: "development",
    name: "Development & Coding",
    description: "Professional coding assistants for review, debugging, API design, testing, and DevOps automation",
    shortDesc: "Code faster with AI-powered development tools",
    agentCount: 10,
    tokenSavings: "75%",
    primaryUsers: ["Developers", "DevOps Engineers", "QA Engineers"],
    color: {
      primary: "#10b981",
      secondary: "#059669",
      gradient: "from-green-500 to-emerald-600"
    },
    icon: "code",
    metrics: {
      avgTimeSaved: "5hrs/week",
      avgTokenReduction: "75%",
      popularityScore: 95
    }
  },
  {
    id: "content",
    name: "Content & Writing",
    description: "SEO-optimized content creation, email campaigns, social media, and professional writing assistants",
    shortDesc: "Create engaging content in minutes",
    agentCount: 10,
    tokenSavings: "70%",
    primaryUsers: ["Content Creators", "Marketers", "Writers"],
    color: {
      primary: "#8b5cf6",
      secondary: "#7c3aed",
      gradient: "from-purple-500 to-violet-600"
    },
    icon: "pen",
    metrics: {
      avgTimeSaved: "8hrs/week",
      avgTokenReduction: "70%",
      popularityScore: 92
    }
  },
  {
    id: "business",
    name: "Business & Productivity",
    description: "Business planning, project management, reporting, and strategic analysis tools",
    shortDesc: "Streamline business operations with AI",
    agentCount: 10,
    tokenSavings: "65%",
    primaryUsers: ["Executives", "Project Managers", "Consultants"],
    color: {
      primary: "#3b82f6",
      secondary: "#2563eb",
      gradient: "from-blue-500 to-indigo-600"
    },
    icon: "briefcase",
    metrics: {
      avgTimeSaved: "10hrs/week",
      avgTokenReduction: "65%",
      popularityScore: 88
    }
  },
  {
    id: "research",
    name: "Research & Analysis",
    description: "Market research, data analysis, fact-checking, and competitive intelligence tools",
    shortDesc: "Deep insights from data and research",
    agentCount: 10,
    tokenSavings: "80%",
    primaryUsers: ["Analysts", "Researchers", "Students"],
    color: {
      primary: "#06b6d4",
      secondary: "#0891b2",
      gradient: "from-cyan-500 to-teal-600"
    },
    icon: "search",
    metrics: {
      avgTimeSaved: "12hrs/week",
      avgTokenReduction: "80%",
      popularityScore: 85
    }
  },
  {
    id: "creative",
    name: "Creative & Design",
    description: "Prompt engineering, brand creation, UI/UX design, and creative concept development",
    shortDesc: "Unleash creativity with AI assistance",
    agentCount: 10,
    tokenSavings: "60%",
    primaryUsers: ["Designers", "Creative Directors", "Artists"],
    color: {
      primary: "#ec4899",
      secondary: "#db2777",
      gradient: "from-pink-500 to-rose-600"
    },
    icon: "palette",
    metrics: {
      avgTimeSaved: "6hrs/week",
      avgTokenReduction: "60%",
      popularityScore: 87
    }
  },
  {
    id: "marketing",
    name: "Marketing & Growth",
    description: "SEO strategies, ad copy, landing pages, growth hacking, and campaign optimization",
    shortDesc: "Scale marketing efforts with AI",
    agentCount: 10,
    tokenSavings: "70%",
    primaryUsers: ["Marketers", "Growth Hackers", "Sales Teams"],
    color: {
      primary: "#f97316",
      secondary: "#ea580c",
      gradient: "from-orange-500 to-amber-600"
    },
    icon: "trending",
    metrics: {
      avgTimeSaved: "15hrs/week",
      avgTokenReduction: "70%",
      popularityScore: 90
    }
  },
  {
    id: "automation",
    name: "Automation & Workflow",
    description: "Workflow builders, API integrations, no-code solutions, and process automation",
    shortDesc: "Automate repetitive tasks instantly",
    agentCount: 10,
    tokenSavings: "85%",
    primaryUsers: ["Operations", "IT Teams", "Automation Engineers"],
    color: {
      primary: "#14b8a6",
      secondary: "#0d9488",
      gradient: "from-teal-500 to-cyan-600"
    },
    icon: "workflow",
    metrics: {
      avgTimeSaved: "20hrs/week",
      avgTokenReduction: "85%",
      popularityScore: 93
    }
  },
  {
    id: "learning",
    name: "Learning & Education",
    description: "Course creation, study guides, tutoring, and personalized learning paths",
    shortDesc: "Transform education with AI tutors",
    agentCount: 10,
    tokenSavings: "75%",
    primaryUsers: ["Educators", "Trainers", "Students"],
    color: {
      primary: "#eab308",
      secondary: "#ca8a04",
      gradient: "from-yellow-500 to-amber-600"
    },
    icon: "academic",
    metrics: {
      avgTimeSaved: "7hrs/week",
      avgTokenReduction: "75%",
      popularityScore: 82
    }
  },
  {
    id: "professional",
    name: "Specialized Professional",
    description: "Legal, medical, academic, compliance, and industry-specific professional tools",
    shortDesc: "Professional-grade AI for specialized fields",
    agentCount: 10,
    tokenSavings: "70%",
    primaryUsers: ["Lawyers", "Doctors", "Academics", "HR"],
    color: {
      primary: "#6366f1",
      secondary: "#4f46e5",
      gradient: "from-indigo-500 to-purple-600"
    },
    icon: "certificate",
    metrics: {
      avgTimeSaved: "9hrs/week",
      avgTokenReduction: "70%",
      popularityScore: 86
    }
  },
  {
    id: "advanced",
    name: "Advanced & Meta",
    description: "Prompt optimization, token management, multi-agent coordination, and meta-tools",
    shortDesc: "Next-level AI optimization tools",
    agentCount: 10,
    tokenSavings: "90%",
    primaryUsers: ["Power Users", "AI Engineers", "Prompt Engineers"],
    color: {
      primary: "#ef4444",
      secondary: "#dc2626",
      gradient: "from-red-500 to-pink-600"
    },
    icon: "chip",
    metrics: {
      avgTimeSaved: "25hrs/week",
      avgTokenReduction: "90%",
      popularityScore: 94
    }
  }
];

export function getCategoryById(id: string): AgentCategory | undefined {
  return agentCategories.find(cat => cat.id === id);
}

export function getCategoryColor(id: string): string {
  const category = getCategoryById(id);
  return category?.color.gradient || "from-gray-500 to-gray-600";
}
