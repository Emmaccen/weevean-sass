import { Github, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Changelog", href: "#changelog" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "GitHub", href: "https://github.com/emmaccen/weevean" },
    { name: "Community", href: "#community" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#privacy" },
  ],
};

const social = [
  { name: "GitHub", icon: Github, href: "https://github.com/emmaccen/weevean" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-black font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Weevean
              </span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-xs leading-relaxed">
              Open-source team chat with AI assistance. Built for modern
              collaboration.
            </p>
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/10 hover:text-white transition-all text-neutral-400"
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Weevean. MIT License.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-neutral-500 hover:text-neutral-300 cursor-pointer">
              Terms
            </span>
            <span className="text-sm text-neutral-500 hover:text-neutral-300 cursor-pointer">
              Privacy
            </span>
            <span className="text-sm text-neutral-500 hover:text-neutral-300 cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
