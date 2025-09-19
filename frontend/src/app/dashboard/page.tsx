"use client";

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
  Brain,
  Target,
  Sparkles,
  MessageSquare,
  BarChart3,
  PenTool,
  Users,
  ArrowRight,
  Bot,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Calendar,
  Award,
  ChevronRight,
} from "lucide-react";
import BackgroundBlur from "@/components/ui/background-blur";

export default function Dashboard() {
  const agents = [
    {
      title: "Automated Essay Assessment",
      description:
        "Experience AI-powered essay evaluation with detailed feedback, scoring, and improvement suggestions for academic writing.",
      icon: <FileText className="h-8 w-8 text-white" />,
      href: "/essay-evaluator",
      color: "from-violet-600 to-purple-600",
      features: [
        "Automated scoring system",
        "Comprehensive feedback",
        "Academic writing analysis",
      ],
      status: "Ready",
    },
    {
      title: "Adaptive Assessment",
      description:
        "Intelligent examination system that creates personalized tests based on individual learning analytics and performance data.",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      href: "/simulated-exam",
      color: "from-blue-600 to-indigo-600",
      features: ["Adaptive algorithms", "Multi-subject support", "Performance tracking"],
      status: "Ready",
    },
    {
      title: "Content Generator",
      description:
        "AI-powered system for creating academic prompts, assignments, and educational materials aligned with curriculum standards.",
      icon: <PenTool className="h-8 w-8 text-white" />,
      href: "/prompt-builder",
      color: "from-green-600 to-emerald-600",
      features: [
        "Curriculum alignment",
        "Academic content creation",
        "Multi-format materials",
      ],
      status: "Ready",
    },
    {
      title: "Interdisciplinary Questions",
      description:
        "Challenge yourself with complex questions that connect multiple subjects, just like real academic assessments.",
      icon: <Target className="h-8 w-8 text-white" />,
      href: "/interdisciplinary-questions",
      color: "from-orange-600 to-red-600",
      features: [
        "Multi-subject integration",
        "Real-world applications",
        "Critical thinking",
      ],
      status: "Ready",
    },
    {
      title: "Personal Tutor",
      description:
        "Get personalized study recommendations based on your performance and learning gaps.",
      icon: <Brain className="h-8 w-8 text-white" />,
      href: "/personal-tutor",
      color: "from-cyan-600 to-blue-700",
      features: [
        "Adaptive learning paths",
        "Performance analysis",
        "Smart recommendations",
      ],
      status: "Ready",
    },
    {
      title: "Content Generator",
      description:
        "Create custom study materials, summaries, and visual content tailored to your needs.",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      href: "/content-generator",
      color: "from-pink-600 to-purple-700",
      features: [
        "Video suggestions",
        "Visual materials",
        "Personalized explanations",
      ],
      status: "Ready",
    },
    {
      title: "Rephraser",
      description:
        "Improve your writing with AI-powered suggestions and detailed explanations of enhancements.",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      href: "/rephraser",
      color: "from-teal-600 to-cyan-600",
      features: [
        "Writing improvements",
        "Style enhancements",
        "Grammar corrections",
      ],
      status: "Ready",
    },
    {
      title: "Progress Tracker",
      description:
        "Monitor your academic progress journey with detailed analytics and performance insights.",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      href: "/progress-tracker",
      color: "from-indigo-600 to-purple-700",
      features: [
        "Performance analytics",
        "Progress visualization",
        "Goal tracking",
      ],
      status: "Ready",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="mx-auto px-4 py-8 relative z-10">
        {/* Header Section */}
        <BackgroundBlur />
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <Globe className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-medium text-white/80">
              Powered by Google's Agent Development Kit
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            AI-Powered Education
            <br />
            <span className="text-white">Platform Demo</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore 8 specialized AI agents that demonstrate how universities can leverage 
            artificial intelligence for personalized learning, automated assessment, and 
            intelligent tutoring systems.
          </p>
        </div>

        {/* AI Agents Grid */}
        <div className="mb-12 px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Choose Your <span className="text-white">AI Agent</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <Link key={index} href={agent.href}>
                <div className="group relative h-full">
                  <Card className="relative h-full bg-black border-white/15 hover:border-white/25 transition-all duration-300 group-hover:transform group-hover:scale-105 cursor-pointer shadow-none">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-14 h-14 rounded-xl bg-black border border-white/20 flex items-center justify-center mb-4`}
                        >
                          {agent.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            {agent.status}
                          </span>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                        </div>
                      </div>

                      <CardTitle className="text-xl text-white font-semibold leading-tight">
                        {agent.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-white/70 text-sm leading-relaxed">
                        {agent.description}
                      </CardDescription>

                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-xs">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {agent.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-white/60 text-xs"
                            >
                              <div className="w-1 h-1 rounded-full bg-white/50"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Button
                          className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white group-hover:bg-white/30 transition-all duration-300"
                          variant="outline"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Launch Agent
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🎓 Experience the Future of University Education
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              These AI agents demonstrate how universities can transform education 
              through intelligent systems. Explore automated assessment, personalized 
              learning paths, and adaptive content delivery at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/essay-evaluator">
                <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                  <Star className="w-5 h-5" />
                  Try Essay Assessment Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/personal-tutor">
                <Button className="button-secondary">
                  <Users className="w-5 h-5 mr-2" />
                  Explore AI Tutoring System
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
