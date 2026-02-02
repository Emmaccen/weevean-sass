"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { Check, Code2, MessageSquare, Shield, Sparkles } from "lucide-react";
import { useState } from "react";

export function AIShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-32 px-4 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-accent tracking-wide uppercase">
                Powered by Vercel AI SDK
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              AI that understands <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-teal-600">
                your entire context.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 leading-relaxed"
            >
              Stop context switching. Weevean AI lives where you work, reading
              your messages and codebase to give you instant, relevant answers.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Context Awareness",
                  desc: "Knows who said what and when.",
                  icon: MessageSquare,
                },
                {
                  title: "Code Intelligence",
                  desc: "Understands syntax, errors, and best practices.",
                  icon: Code2,
                },
                {
                  title: "Zero Retention",
                  desc: "Your data is never used for training.",
                  icon: Shield,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4 group cursor-pointer"
                  onMouseEnter={() => setActiveTab(idx)}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      activeTab === idx
                        ? "bg-accent text-black scale-110 shadow-lg shadow-accent/20"
                        : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-1 transition-colors ${
                        activeTab === idx
                          ? "text-white"
                          : "text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-accent to-teal-500 rounded-2xl opacity-20 blur-lg" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 lg:p-8 min-h-[400px] flex flex-col shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-bold text-white text-sm">
                    Weevean Assistant
                  </span>
                </div>
                <span className="text-xs text-neutral-500 font-mono">
                  Model: GPT-5.2
                </span>
              </div>

              <div className="flex-1 overflow-hidden relative">
                {activeTab === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex gap-3 justify-end">
                      <div className="bg-neutral-800 text-neutral-200 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                        What did Sarah say about the API migration?
                      </div>
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                        ME
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="space-y-2 max-w-[90%]">
                        <div className="bg-accent/10 border border-accent/20 text-neutral-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm">
                          Sarah mentioned the API migration timeline in{" "}
                          <span className="text-accent underline cursor-pointer">
                            #backend
                          </span>{" "}
                          yesterday:
                          <div className="mt-3 bg-black/40 p-3 rounded-lg border-l-2 border-accent text-xs text-neutral-400 italic">
                            {
                              "We're targeting Q2 for the v2 API rollout. All deprecated endpoints will preserve compatibility..."
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#111] rounded-lg p-4 font-mono text-xs border border-white/10">
                      <div className="text-neutral-500 mb-2">
                        {"// Analyzing function..."}
                      </div>
                      <TextGenerateEffect
                        words="Found 2 optimizations. 1. Use const instead of let. 2. Remove blocking sync call."
                        className="text-xs font-mono"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Zero Data Retention Active
                    </h4>
                    <p className="text-sm text-neutral-400 max-w-xs">
                      Your conversations effectively disappear from the AI
                      {"provider's servers instantly."}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] rounded border border-green-500/20 flex items-center gap-1">
                        <Check className="w-3 h-3" /> SOC2
                      </span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] rounded border border-green-500/20 flex items-center gap-1">
                        <Check className="w-3 h-3" /> GDPR
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
