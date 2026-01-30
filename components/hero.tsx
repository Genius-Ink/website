import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-brand-teal/80" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl">
          {/* Small tag */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
            Now in Beta • Join the Waitlist
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Stablecoin rails
            <br />
            <span className="text-white/80">for global businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed">
            Empower your business to pay and collect local and international
            currencies across 80+ countries worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#contact"
              className="btn-secondary bg-white border-white text-primary-900 hover:bg-white/90 justify-center sm:justify-start"
            >
              Contact us
            </Link>
            <Link
              href="#demo"
              className="btn-outline justify-center sm:justify-start"
            >
              Create an account
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-brand-teal" />
              <span>KYC/AML Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-brand-teal" />
              <span>80+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-brand-teal" />
              <span>Instant Settlement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
