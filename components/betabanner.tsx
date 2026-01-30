import { Info, Sparkles } from "lucide-react";

export default function BetaBanner() {
  return (
    <div className="bg-gradient-to-r from-accent-orange to-accent-coral text-white py-3 px-4 text-center mt-20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <Sparkles size={16} className="animate-pulse" />
        <p>
          <span className="font-bold">GeniusRails is currently in beta.</span>{" "}
          <span className="hidden sm:inline">
            We're working closely with early users to build the future of global
            payments.
          </span>
          <span className="sm:hidden">Join the waitlist today!</span>
        </p>
      </div>
    </div>
  );
}
