"use client";

import { motion } from "framer-motion";
import { Building2, Send, UserPlus } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description:
      "Create your account in under 30 seconds. No credit card required.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Create Workspace",
    description: "Set up your team workspace with channels and permissions.",
  },
  {
    number: "03",
    icon: Send,
    title: "Invite Your Team",
    description: "Share a link and start collaborating with AI-powered chat.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-4 bg-background border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Get started in minutes
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            No complex setup. No enterprise sales calls. Just start
            collaborating.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="relative z-10 mb-8">
                    <div className="w-24 h-24 rounded-3xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500">
                      <step.icon className="w-8 h-8 text-neutral-400 group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent border-[4px] border-[#0A0A0A] flex items-center justify-center shadow-lg">
                      <span className="text-xs font-black text-black">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-xs leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
