export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-accent-coral rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">
                GeniusRails
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Modern money rails for people and businesses. Built for Africa,
              usable globally.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Virtual Accounts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Smart Invoicing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Wallets
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Countries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-400">
            © 2026 GeniusInk Technologies. All rights reserved.
          </p>
          <p className="text-slate-500">
            Built with ❤️ for Africa and the world
          </p>
        </div>
      </div>
    </footer>
  );
}
