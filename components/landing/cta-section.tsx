"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-black to-black opacity-40" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-white/10 backdrop-blur-2xl p-8 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 text-sm font-medium text-accent">
              <Sparkles className="w-4 h-4" />
              <span>Development barely has to feel like work</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to upgrade your workflow?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Join thousands of engineering teams who have switched to Weevean
              for a faster, smarter, and cleaner collaboration experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-neutral-200 h-14 px-10 text-lg font-bold w-full sm:w-auto shadow-xl shadow-white/10 hover:shadow-white/20 transition-all rounded-full"
              >
                Start Free Forever
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/emmaccen/weevean", "_blank")
                }
                className="h-14 px-10 text-lg font-medium border-white/10 text-white w-full sm:w-auto rounded-full bg-transparent"
              >
                <Github className="mr-2 w-5 h-5" />
                Star on GitHub
              </Button>
            </div>

            <p className="mt-8 text-sm text-neutral-500 font-mono">
              open_source == true && no_credit_card == true
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
