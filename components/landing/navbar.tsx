"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  {
    name: "GitHub",
    href: "https://github.com/emmaccen/weevean",
    external: true,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between rounded-full border border-border bg-card/80 backdrop-blur-md px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">
                W
              </span>
            </div>
            <span className="font-semibold text-foreground">Weevean</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-border my-2" />
                <Button
                  variant="ghost"
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  Sign In
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
