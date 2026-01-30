export default function Stablecoins() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-peach text-accent-orange rounded-full text-sm font-semibold mb-6">
            Stablecoins
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-6">
            Fast & Compliant Stablecoin
            <br />
            Payments for Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Settle transactions in seconds, not days, with{" "}
            <span className="font-semibold text-slate-900">USDT and USDC</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all">
              <span className="text-white text-3xl font-bold">◎</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">USDC</h3>
            <p className="text-sm text-slate-500">USD Coin</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all">
              <span className="text-white text-3xl font-bold">₮</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">USDT</h3>
            <p className="text-sm text-slate-500">Tether</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all">
              <span className="text-white text-3xl font-bold">P</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">PYUSD</h3>
            <p className="text-sm text-slate-500">PayPal USD</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-5xl font-display font-bold text-accent-orange mb-2">
              Save 50%
            </div>
            <p className="text-slate-600">in transaction fees</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-display font-bold text-brand-teal mb-2">
              &lt;$0.01
            </div>
            <p className="text-slate-600">Average cost</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-display font-bold text-blue-600 mb-2">
              Compliant
            </div>
            <p className="text-slate-600">Full KYC/AML support</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-brand-teal rounded-3xl p-10 lg:p-16 text-white text-center">
          <h3 className="font-display text-3xl font-bold mb-4">
            Convert between stablecoins and fiat currencies
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Access flexible rates, seamlessly convert stablecoins to local
            currencies in 80+ countries
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-white/90 transition font-semibold shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
