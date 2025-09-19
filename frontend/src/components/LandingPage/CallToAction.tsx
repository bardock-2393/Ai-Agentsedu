import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  BarChart,
  Users,
  Award,
  Star,
  Bot,
  Zap,
  Globe,
  Brain,
  Target,
  BookOpen,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const CallToAction = () => {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="px-4 md:px-6 relative">
        <div className="glass-card max-w-7xl mx-auto p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-white/80">
                  University AI Platform Demo
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Ready to Transform
                <br />
                <span className="gradient-text">University Education</span>?
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Discover how universities can leverage AI agents to deliver 
                personalized learning experiences, automated assessment, and 
                intelligent tutoring systems at scale.
              </p>

              {/* Impact metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">8</div>
                  <div className="text-white/60 text-sm">AI Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/60 text-sm">Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">∞</div>
                  <div className="text-white/60 text-sm">Scalable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/60 text-sm">Available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/dashboard">
                  <Button className="button-primary text-lg px-8 py-4 group">
                    <Bot className="mr-2 h-5 w-5" />
                    Explore Demo Platform
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Agent showcase cards */}
          <div className="grid grid-cols-2 gap-4">
              {/* Agent card 1 */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all hover:transform hover:scale-105">
                <div className="absolute -inset-1 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Essay Assessment
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    Automated essay evaluation with detailed academic feedback
                  </p>
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Try Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Agent card 2 */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all hover:transform hover:scale-105">
                <div className="absolute -inset-1 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <Brain className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    AI Tutoring System
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    Intelligent tutoring with personalized learning paths
                  </p>
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Try Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Agent card 3 */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all hover:transform hover:scale-105">
                <div className="absolute -inset-1 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Adaptive Assessment
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    AI-generated assessments adapted to student performance
                  </p>
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Try Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Agent card 4 */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all hover:transform hover:scale-105">
                <div className="absolute -inset-1 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Learning Analytics
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    Advanced analytics for tracking student progress
                  </p>
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Try Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎓 Powered by Google's Agent Development Kit
              </h3>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                This demonstration showcases how universities can leverage Google's 
                Agent Development Kit and Cloud technologies to build intelligent 
                educational systems that scale to serve thousands of students with 
                personalized learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

