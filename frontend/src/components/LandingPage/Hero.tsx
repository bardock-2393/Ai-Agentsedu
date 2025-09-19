import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GradientText from "@/components/ui/gradient-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  FileText,
  BookOpen,
  LineChart,
  Brain,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Zap,
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import BackgroundBlur from "../ui/background-blur";

const Hero = () => {
  const agentFeatures = [
    {
      title: "Essay Evaluation AI Agent",
      description:
        "Advanced AI agent that evaluates essays using academic criteria with detailed competency feedback",
      icon: <FileText className="h-8 w-8 text-white" />,
      color: "from-violet-600 to-purple-600",
    },
    {
      title: "Personalized Exam Generator",
      description:
        "Smart agent creates customized practice exams based on your learning gaps and strengths",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Personal Tutor Agent",
      description:
        "AI tutor that adapts to your learning style and provides personalized study recommendations",
      icon: <Brain className="h-8 w-8 text-white" />,
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "Content Generation Agent",
      description:
        "Creates study materials, summaries, and visual content tailored to your needs",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      color: "from-pink-600 to-purple-700",
    },
    {
      title: "Progress Tracking Agent",
      description:
        "Intelligent monitoring of your performance with actionable insights and improvement plans",
      icon: <LineChart className="h-8 w-8 text-white" />,
      color: "from-indigo-600 to-purple-700",
    },
  ];

  const academicBenefits = [
    "Scalable personalized learning for large student populations",
    "AI-powered assessment and feedback systems",
    "Adaptive content delivery based on learning analytics",
    "Automated tutoring and student support services",
  ];

  return (
    <section className="w-full relative py-12 md:py-24 lg:min-h-screen flex items-center overflow-hidden justify-center">
      <BackgroundBlur />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm shadow-md">
            <span className="text-xs sm:text-sm font-medium text-white/80">
              🎓 Powered by Google's Agent Development Kit - Academic Innovation
            </span>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-regular tracking-tighter select-none mt-4">
              Transforming Higher Education with
            </h1>
            <br />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-regular tracking-tighter select-none -mt-5">
              <GradientText className="mt-2 cursor-default font-bold select-none">
                Intelligent AI Agents
              </GradientText>
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
              Educational AI Platform for Universities
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              This <strong>AI-powered educational platform</strong> demonstrates how universities can leverage 
              Google's Agent Development Kit to create specialized AI agents for personalized learning. 
              The platform showcases intelligent tutoring systems, automated assessment, and adaptive 
              content generation - revolutionizing how institutions deliver education at scale.
            </p>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl font-light tracking-tight mx-auto leading-relaxed">
            Experience how AI agents can transform university education through personalized learning paths, 
            intelligent assessment, and adaptive content delivery systems.
          </p>

          {/* Democratization benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-w-4xl mx-auto"
          >
            {academicBenefits.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm backdrop-blur-sm"
              >
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-left">{point}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/dashboard">
            <Button className="button-primary text-lg font-medium flex items-center gap-2 group">
              Explore AI Agents Demo
              <Zap className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </Button>
          </Link>
        </motion.div>

        {/* Impact metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">8</div>
            <div className="text-white/60 text-sm">Specialized AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-white/60 text-sm">Automated Assessment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-white/60 text-sm">AI-Powered Learning</div>
          </div>
        </motion.div>

        {/* AI Agents Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-6xl mx-auto mt-12 relative"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Powered by <span className="text-white">Specialized AI Agents</span>
          </h3>

          <div className="absolute -inset-1 rounded-2xl bg-white/5 blur-xl opacity-30"></div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {agentFeatures.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-black/40 hover:bg-black/50 hover:border-white/20 transition-all duration-300 shadow-xl">
                    <div
                      className={`w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tighter">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link href="/dashboard">
            <Button className="button-primary px-10 py-4 text-lg font-medium flex items-center gap-3 mx-auto group">
              <Users className="w-5 h-5" />
              Experience the AI Platform Demo
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
