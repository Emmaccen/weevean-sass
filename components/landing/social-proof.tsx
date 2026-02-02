import { Star } from "lucide-react";
import { LogoTicker } from "./logo-ticker";

export function SocialProof() {
  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-yellow-500">
              Loved by 2,000+ developers
            </span>
          </div>
          <p className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">
            Trusted by engineering teams at
          </p>
        </div>

        <LogoTicker />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 text-center">
          {[
            { label: "GitHub Stars", value: "12k+" },
            { label: "Community Members", value: "8.5k" },
            { label: "Open Issues", value: "< 50" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
