import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const navigation = {
    product: [
      { name: "Virtual Accounts", href: "#virtual-accounts" },
      { name: "Smart Invoicing", href: "#invoicing" },
      { name: "Multi-Currency Wallets", href: "#wallets" },
      { name: "OTC Desk", href: "#otc" },
      { name: "Virtual Cards", href: "#cards" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "API Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Supported Countries", href: "#countries" },
      { name: "Pricing", href: "#pricing" },
      { name: "Status", href: "#status" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const social = [
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
    { name: "GitHub", icon: Github, href: "#github" },
    { name: "Email", icon: Mail, href: "mailto:hello@geniusink.tech" },
  ];

  return (
    <footer className="bg-primary-950 text-primary-300 border-t border-primary-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                <Image
                  src="/images/logo.jpeg"
                  alt="GeniusRails Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                GeniusRails
              </span>
            </Link>
            <p className="text-primary-400 mb-6 leading-relaxed">
              Modern money rails for people and businesses. Built for Africa,
              usable globally.
            </p>
            <div className="flex gap-3">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center hover:bg-primary-800 hover:text-white transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-white mb-4 font-display text-lg">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-primary-400">
            © 2026 GeniusInk Technologies. All rights reserved.
          </p>
          <p className="text-primary-500">
            Built with ❤️ for Africa and the world
          </p>
        </div>
      </div>
    </footer>
  );
}
