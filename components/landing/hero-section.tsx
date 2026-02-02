"use client";

import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Command, Github, Sparkles, Terminal } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-start pt-32 pb-16 overflow-hidden bg-background antialiased"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 group cursor-pointer hover:border-accent/50 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-sm font-medium bg-clip-text text-transparent bg-linear-to-r from-neutral-200 to-neutral-400 group-hover:from-accent group-hover:to-accent/80 transition-all duration-300">
            Weevean is now live — Open Source & AI-Powered
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 text-center"
        >
          Chat that <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded-lg bg-accent/20 blur-xl opacity-50" />
            <span className="relative text-transparent bg-clip-text bg-linear-to-b from-accent to-teal-500">
              actually codes.
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {
            "Weevean isn't just a chat app. It's a self-hosted workspace that understands your codebase, runs snippets, and summarizes threads instantly."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-medium bg-white text-black hover:bg-neutral-200 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Start Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://github.com/emmaccen/weevean", "_blank")
            }
            className="h-14 px-8 text-lg font-medium border-neutral-800 bg-black/50 backdrop-blur-md text-white rounded-full transition-all hover:border-neutral-700"
          >
            <Github className="mr-2 w-5 h-5" />
            Star on GitHub
          </Button>
        </motion.div>

        <motion.div
          style={{ y, rotateX, opacity }}
          className="relative perspective-1000"
        >
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5 mx-auto max-w-[1000px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0A0A0A]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <Command className="w-3 h-3 text-neutral-500" />
                <span className="text-xs text-neutral-400 font-mono">
                  search...
                </span>
              </div>
              <div className="w-16" />
            </div>

            <div className="flex h-[500px]">
              <div className="hidden md:flex flex-col w-64 border-r border-white/5 bg-black/20 p-4 gap-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-bold text-sm">Weevean HQ</span>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 pl-2">
                    Channels
                  </div>
                  {["general", "engineering", "design", "marketing"].map(
                    (channel) => (
                      <div
                        key={channel}
                        className={`px-2 py-1.5 rounded-md text-sm cursor-pointer flex items-center gap-2 ${
                          channel === "engineering"
                            ? "bg-white/10 text-white"
                            : "text-neutral-400 hover:bg-white/5 hover:text-neutral-300"
                        }`}
                      >
                        <span className="text-neutral-600">#</span> {channel}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex-1 flex flex-col min-w-0 bg-[#0A0A0A]">
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold shrink-0 ring-1 ring-purple-500/20">
                      SK
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium text-neutral-200">
                          Sarah Kim
                        </span>
                        <span className="text-xs text-neutral-500">
                          2:34 PM
                        </span>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {
                          " Can someone help me optimize this fetch function? It's causing render blocking."
                        }
                      </p>
                      <div className="mt-3 rounded-lg bg-[#0F0F0F] border border-white/5 p-4 font-mono text-sm overflow-x-auto shadow-inner">
                        <TextGenerateEffect
                          words="async function fetchData() { const res = await fetch('/api/big-data'); return res.json(); }"
                          className="text-left"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="flex gap-4 group Relative"
                  >
                    <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-xl opacity-50 block" />
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 relative z-10">
                      <Sparkles className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1 space-y-1 relative z-10">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium text-accent">
                          Weevean AI
                        </span>
                        <span className="text-xs text-neutral-500">
                          2:35 PM
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-accent/10 text-accent font-medium border border-accent/20">
                          BOT
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#111] border border-accent/20 shadow-sm">
                        <p className="text-neutral-300 text-sm mb-3">
                          {
                            "I found a potential performance issue. You're awaiting the fetch in the main thread which might block UI updates if the network is slow. Try using a Service Worker or SWR for caching."
                          }
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-7 text-xs bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                          >
                            Explains SWR
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-7 text-xs bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                          >
                            Refactor Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-4 border-t border-white/5 bg-[#0A0A0A]/50 backdrop-blur">
                  <div className="h-12 rounded-lg bg-[#151515] border border-white/10 flex items-center px-4 text-sm text-neutral-500">
                    Ask Weevean AI or type a message...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/20 rounded-full blur-[100px] opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
