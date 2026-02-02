import { Check, X } from "lucide-react";

const features = [
  {
    name: "AI Assistant",
    weevean: true,
    slack: "addon",
    discord: false,
    mattermost: false,
  },
  {
    name: "Smart Summaries",
    weevean: true,
    slack: false,
    discord: false,
    mattermost: false,
  },
  {
    name: "Code Analysis",
    weevean: true,
    slack: false,
    discord: false,
    mattermost: false,
  },
  {
    name: "Code Execution",
    weevean: true,
    slack: false,
    discord: false,
    mattermost: false,
  },
  {
    name: "Open Source",
    weevean: true,
    slack: false,
    discord: false,
    mattermost: true,
  },
  {
    name: "Self-Hosted",
    weevean: true,
    slack: false,
    discord: false,
    mattermost: true,
  },
  {
    name: "Free for Teams",
    weevean: true,
    slack: "limited",
    discord: true,
    mattermost: true,
  },
  {
    name: "Markdown Support",
    weevean: true,
    slack: true,
    discord: "limited",
    mattermost: true,
  },
];

function FeatureStatus({ status }: { status: boolean | string }) {
  if (status === true) {
    return (
      <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.4)]">
        <Check className="w-5 h-5" />
      </div>
    );
  }
  if (status === "addon") {
    return (
      <div className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
        Ext ($$$)
      </div>
    );
  }
  if (status === "limited") {
    return (
      <div className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
        Limited
      </div>
    );
  }
  if (status === false) {
    return <X className="w-5 h-5 text-neutral-700 opacity-50" />;
  }
  return null;
}

export function ComparisonSection() {
  return (
    <section className="relative py-32 px-4 selection:bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why teams move to Weevean
          </h2>
          <p className="text-lg text-neutral-400">
            {'Stop paying for "Add-ons" just to get basic AI features.'}
          </p>
        </div>

        <div className="relative overflow-x-auto">
          <div className="grid grid-cols-4 md:grid-cols-5 min-w-[800px]">
            <div className="col-span-1 p-6 text-neutral-500 font-medium">
              Feature
            </div>
            <div className="col-span-1 p-6 text-center text-xl font-bold text-white bg-white/5 rounded-t-2xl border-x border-t border-white/10 relative">
              <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
              Weevean
            </div>
            <div className="col-span-1 p-6 text-center text-lg font-medium text-neutral-400 relative">
              Slack
            </div>
            <div className="col-span-1 p-6 text-center text-lg font-medium text-neutral-400 hidden md:block">
              Discord
            </div>
            <div className="col-span-1 p-6 text-center text-lg font-medium text-neutral-400 hidden md:block">
              Mattermost
            </div>

            {features.map((feature, idx) => (
              <div key={idx} className="contents group">
                <div className="col-span-1 p-6 flex items-center text-neutral-300 font-medium border-b border-white/5 group-hover:bg-white/5 transition-colors">
                  {feature.name}
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center border-x border-b border-white/5 bg-white/5 relative group-hover:bg-white/10 transition-colors">
                  {idx === features.length - 1 && (
                    <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
                  )}
                  <FeatureStatus status={feature.weevean} />
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                  <FeatureStatus status={feature.slack} />
                </div>
                <div className="col-span-1 p-6 hidden md:flex items-center justify-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                  <FeatureStatus status={feature.discord} />
                </div>
                <div className="col-span-1 p-6 hidden md:flex items-center justify-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                  <FeatureStatus status={feature.mattermost} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
