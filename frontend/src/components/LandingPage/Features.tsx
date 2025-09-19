import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  BookOpen,
  LineChart,
  Brain,
  Calendar,
  Sparkles,
  ArrowRight,
  Bot,
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  PenTool,
  Users,
} from "lucide-react";

const Features = () => {
  const agents = [
    {
      title: "📝 Automated Essay Assessment",
      description:
        "Advanced AI that provides comprehensive essay evaluation using standardized academic criteria. Features automated scoring, detailed feedback generation, and competency-based assessment suitable for large-scale university applications.",
      icon: <FileText className="h-6 w-6" />,
      features: [
        "Automated academic writing assessment",
        "Multi-criteria evaluation system",
        "Detailed feedback generation",
        "Scalable for large student populations",
      ],
      color: "from-white to-white",
    },
    {
      title: "📚 Intelligent Content Generator",
      description:
        "AI-powered system that generates academic prompts, assignments, and assessment materials. Creates contextually relevant content aligned with curriculum standards and learning objectives.",
      icon: <PenTool className="h-6 w-6" />,
      features: [
        "Curriculum-aligned content generation",
        "Academic prompt creation",
        "Assessment material design",
        "Multi-format content support",
      ],
      color: "from-white to-white",
    },
    {
      title: "🧪 Adaptive Assessment System",
      description:
        "Intelligent examination platform that creates personalized assessments based on learning analytics. Adapts difficulty and content to individual student performance and learning objectives.",
      icon: <BookOpen className="h-6 w-6" />,
      features: [
        "Adaptive difficulty algorithms",
        "Multi-subject integration",
        "Real-time performance analytics",
        "Comprehensive feedback systems",
      ],
      color: "from-white to-white",
    },
    {
      title: "🧩 Cross-Curricular Learning System",
      description:
        "Advanced AI that creates interdisciplinary learning experiences, connecting multiple academic domains to promote holistic understanding and critical thinking skills.",
      icon: <Target className="h-6 w-6" />,
      features: [
        "Multi-subject connected questions",
        "Real-world application problems",
        "Cross-curricular learning",
        "Comprehensive understanding tests",
      ],
      color: "from-white to-white",
    },
    {
      title: "🧭 Personal Tutor Agent",
      description:
        "Analyzes your performance history to recommend personalized study paths. Identifies knowledge gaps and suggests which agents to use for optimal learning.",
      icon: <Brain className="h-6 w-6" />,
      features: [
        "Performance analysis",
        "Adaptive study recommendations",
        "Learning gap identification",
        "Personalized agent orchestration",
      ],
      color: "from-white to-white",
    },
    {
      title: "🎥 Content Generator Agent",
      description:
        "Creates comprehensive study materials including explanations, slides, visual content, flashcards, and mind maps tailored to your learning style and needs.",
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        "Videos suggestions",
        "Visual learning materials",
        "Interactive flashcards",
        "Personalized explanations",
      ],
      color: "from-white to-white",
    },
    {
      title: "🗣️ Rephraser Agent",
      description:
        "Helps students rewrite essays and answers with higher quality. Provides suggestions with detailed explanations of improvements and writing techniques.",
      icon: <MessageSquare className="h-6 w-6" />,
      features: [
        "Writing improvement suggestions",
        "Style and clarity enhancements",
        "Grammar and structure fixes",
        "Technique explanations",
      ],
      color: "from-white to-white",
    },
    {
      title: "📈 Progress Tracker Agent",
      description:
        "Maintains comprehensive performance dashboards with detailed statistics, progress visualization, and exportable reports for tracking learning evolution.",
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        "Real-time performance tracking",
        "Statistical analysis",
        "Progress visualization",
        "Exportable reports",
      ],
      color: "from-white to-white",
    },
  ];

  return (
    <section id="agents" className="w-full py-16 md:py-24 bg-black/10">
      <div className="px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <Bot className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-medium text-white/80">
              Built with Google's Agent Development Kit
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Eight Specialized <span className="text-white">AI Agents</span>
            <br />
            for Complete Academic Support
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Each agent is designed with specific expertise to provide
            comprehensive, personalized education that adapts to every student's
            unique learning needs and democratizes access to quality academic
            education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {agents.map((agent, index) => (
            <div key={index} className="group relative">
              <Card className="relative h-full bg-black border-white/15 hover:border-white/25 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] shadow-none">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center`}
                    >
                      <div className="text-white">{agent.icon}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl text-white font-semibold leading-tight">
                        {agent.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    {agent.description}
                  </CardDescription>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium text-sm">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {agent.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-white/60 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link href="/dashboard">
                      <Button
                        variant="outline"
                        className="w-full button-secondary group-hover:bg-white/10 transition-all duration-300"
                      >
                        Try This Agent
                        <Zap className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🌟 Democratizing Education Through AI
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Our AI agents work together to provide the same quality of
              education that expensive prep courses offer, but accessible to
              every student globally. No matter your background, location, or
              economic situation - quality academic education is now within reach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  Experience All Agents
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
