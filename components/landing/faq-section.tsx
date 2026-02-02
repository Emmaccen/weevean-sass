"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the AI work?",
    answer:
      "Weevean uses the Vercel AI SDK with support for multiple providers (OpenAI, Anthropic, Google, etc.). It analyzes your conversation context to provide relevant answers and assistance without you having to copy-paste into external tools.",
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "No. Your data stays private. We use AI APIs in zero-data-retention mode, meaning your conversations are never stored by AI providers or used for training. Self-hosted deployments give you complete control.",
  },
  {
    question: "Can I use my own AI API key?",
    answer:
      "Yes! Self-hosted deployments support bring-your-own-key for any supported AI provider (OpenAI, Anthropic, Google, or local models like Ollama). You only pay your provider directly.",
  },
  {
    question: "What makes Weevean different from Slack + ChatGPT?",
    answer:
      "Weevean's AI is deeply integrated with your workspace context; it understands your conversations and codebase without copy-pasting. Plus, it's open-source and self-hostable, so you control your data.",
  },
  {
    question: "How much does AI cost?",
    answer:
      "For cloud deployments, AI features are included in pricing. For self-hosted, you bring your own API key and pay your provider directly (typically $0.001-0.01 per query depending on model).",
  },
  {
    question: "Is Weevean really free?",
    answer:
      "Yes! Weevean is MIT licensed and free forever. Self-host it on your infrastructure at no cost. We also offer a managed cloud option for teams who don't want to manage servers.",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Weevean.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
