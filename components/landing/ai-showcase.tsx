"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion, useScroll } from "framer-motion";
import ReactLenis from "lenis/react";
import { Check, Code2, MessageSquare, Shield, Sparkles } from "lucide-react";
import { useRef } from "react";
import { StickyCard } from "./Stacker";

export function AIShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      content: (
        <div className="w-full min-h-[400px] bg-[#0A0A0A] border border-white/10 rounded-[40px] md:p-12 p-6 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="flex-1 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center shadow-lg shadow-accent/20 mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Context Awareness</h3>
            <p className="text-neutral-400 text-lg">
              Knows who said what and when.
            </p>
          </div>
          <div className="flex-1 w-full border border-white/10 rounded-2xl bg-[#111] p-6 shadow-2xl relative">
            <div className="absolute -inset-1 bg-linear-to-r from-accent to-teal-500 rounded-2xl opacity-10 blur-sm pointer-events-none" />
            <div className="relative space-y-4">
              <div className="flex gap-3 justify-end">
                <div className="bg-neutral-800 text-neutral-200 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                  What did Sarah say about the API migration?
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                  ME
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
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
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full min-h-[400px] bg-[#0A0A0A] border border-white/10 rounded-[40px] md:p-12 p-6 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="flex-1 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center shadow-lg shadow-accent/20 mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Code Intelligence</h3>
            <p className="text-neutral-400 text-lg">
              Understands syntax, errors, and best practices.
            </p>
          </div>
          <div className="flex-1 w-full border border-white/10 rounded-2xl bg-[#111] p-6 shadow-2xl relative h-64 flex flex-col justify-center">
            <div className="absolute -inset-1 bg-linear-to-r from-accent to-teal-500 rounded-2xl opacity-10 blur-sm pointer-events-none" />
            <div className="relative space-y-4">
              <div className="font-mono text-xs border border-white/10 p-4 rounded-lg bg-black/50">
                <div className="text-neutral-500 mb-2">
                  {"// Analyzing function..."}
                </div>
                <TextGenerateEffect
                  words="Found 2 optimizations. 1. Use const instead of let. 2. Remove blocking sync call."
                  className="text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full min-h-[400px] bg-[#0A0A0A] border border-white/10 rounded-[40px] md:p-12 p-6 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="flex-1 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center shadow-lg shadow-accent/20 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Zero Retention</h3>
            <p className="text-neutral-400 text-lg">
              Your data is never used for training.
            </p>
          </div>
          <div className="flex-1 w-full border border-white/10 rounded-2xl bg-[#111] p-6 shadow-2xl relative h-64 flex flex-col items-center justify-center text-center space-y-4">
            <div className="absolute -inset-1 bg-linear-to-r from-accent to-teal-500 rounded-2xl opacity-10 blur-sm pointer-events-none" />
            <div className="relative flex flex-col items-center z-10 w-full">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Zero Data Retention Active
              </h4>
              <p className="text-sm text-neutral-400 max-w-sm">
                Your conversations effectively disappear from the AI provider's
                servers instantly.
              </p>
              <div className="flex gap-2 mt-6">
                <span className="px-3 py-1.5 bg-green-500/10 text-green-500 text-xs rounded-md border border-green-500/20 flex items-center gap-1">
                  <Check className="w-4 h-4" /> SOC2
                </span>
                <span className="px-3 py-1.5 bg-green-500/10 text-green-500 text-xs rounded-md border border-green-500/20 flex items-center gap-1">
                  <Check className="w-4 h-4" /> GDPR
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-[#050505] overflow-clip">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            transition={{ delay: 0.1 }}
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
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed"
          >
            Stop context switching. Weevean AI lives where you work, reading
            your messages and codebase to give you instant, relevant answers.
          </motion.p>
        </div>

        <ReactLenis root>
          <div
            ref={container}
            className="relative flex w-full max-w-6xl flex-col items-center justify-center pb-[20vh] mx-auto"
          >
            {cards.map((card, i) => {
              const targetScale = Math.max(
                0.5,
                1 - (cards.length - i - 1) * 0.1,
              );
              return (
                <StickyCard
                  key={`card_${i}`}
                  i={i}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                >
                  {card.content}
                </StickyCard>
              );
            })}
          </div>
        </ReactLenis>
      </div>
    </section>
  );
}
