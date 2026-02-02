"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Code2,
  FileText,
  Lock,
  LucideProps,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { ForwardRefExoticComponent, MouseEvent, RefAttributes } from "react";

const features = [
  {
    icon: Sparkles,
    title: "AI Context Assistant",
    description:
      "Get instant answers based on your team's conversation history. Debug faster, onboard quicker, collaborate smarter.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description:
      "AI-generated summaries for lengthy threads. Catch up on 50+ messages in seconds.",
    className: "md:col-span-1",
  },
  {
    icon: Code2,
    title: "Code-First Design",
    description:
      "Full markdown with syntax highlighting for 50+ languages. Code that looks like code.",
    className: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Real-Time Messaging",
    description:
      "Channels, DMs, and threading. All the features you expect, built for speed and reliability.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Terminal,
    title: "Code Execution",
    description:
      "Run Python and JavaScript directly in chat. Perfect for debugging, demos, and collaborative coding.",
    className: "md:col-span-1 lg:col-span-1",
    badge: "Coming Soon",
  },
  {
    icon: Lock,
    title: "Self-Hosted & Open",
    description:
      "Deploy on your servers. Full control over your data. No vendor lock-in. MIT licensed.",
    className: "md:col-span-2 lg:col-span-2",
  },
];

function FeatureCard({
  feature,
}: {
  feature:
    | {
        icon: ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >;
        title: string;
        description: string;
        className: string;
        badge?: undefined;
      }
    | {
        icon: ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >;
        title: string;
        description: string;
        className: string;
        badge: string;
      };
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative border border-white/10 bg-black/40 overflow-hidden rounded-3xl p-8 hover:border-white/20 transition-colors ${feature.className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full flex flex-col">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
          <feature.icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          {feature.title}
          {feature.badge && (
            <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-wider border border-yellow-500/20">
              {feature.badge}
            </span>
          )}
        </h3>
        <p className="text-neutral-400 leading-relaxed max-w-sm">
          {feature.description}
        </p>

        <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none">
          <feature.icon className="w-48 h-48 -mr-10 -mb-10 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent">
              Batteries Included
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-200 to-neutral-500">
              build faster together.
            </span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Weevean brings the best of modern chat, AI assistance, and developer
            tooling into one unified workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
