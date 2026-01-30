import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function WhoItsFor() {
  const solutions = [
    {
      tag: "Virtual Accounts",
      tagColor: "bg-accent-peach text-accent-orange",
      title: "Open Virtual USD, EUR, & GBP Virtual Accounts",
      description:
        "Establish a local banking presence in Europe, the UK, and the USA",
      features: [
        "Receive direct payments",
        "Cut conversion costs",
        "Simplify reconciliation",
        "Reduce payment delays",
      ],
      cta: "Contact Sales",
      ctaSecondary: "Learn More",
      illustration: "🏦",
      bgColor: "bg-gradient-to-br from-accent-peach to-white",
    },
    {
      tag: "Smart Invoicing",
      tagColor: "bg-blue-50 text-brand-sky",
      title: "Smart Invoicing for Global Businesses",
      description:
        "Create and personalize invoices for customers in any country",
      features: [
        "Bill in your preferred currency",
        "Send invoices to clients worldwide",
        "Enable your clients to pay in their local currencies",
        "Track and Receive settlements in USD, GBP, EUR, CAD, etc.",
      ],
      cta: "Generate Invoices",
      ctaSecondary: "Learn More",
      illustration: "📄",
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
    },
    {
      tag: "Multi-Currency Wallet",
      tagColor: "bg-orange-50 text-accent-orange",
      title: "Send & Receive Money Globally",
      description:
        "Create up to 15 currency wallets to transact across 80+ countries",
      features: [
        "Send money to international or local accounts and Mobile wallets",
        "Convert currencies and get instant deposits",
      ],
      cta: "Create a Wallet",
      ctaSecondary: "Learn More",
      illustration: "💰",
      bgColor: "bg-gradient-to-br from-orange-50 to-white",
    },
    {
      tag: "OTC Desk",
      tagColor: "bg-purple-50 text-purple-600",
      title: "Transact Over $10 million",
      description: "Trade with 80+ countries",
      features: [
        "Trade with 80+ countries",
        "Transact up to $10 million",
        "Access flexible rates",
        "24/7 availability",
      ],
      cta: "Visit OTC Desk",
      ctaSecondary: null,
      illustration: "🌍",
      bgColor: "bg-gradient-to-br from-purple-50 to-white",
    },
    {
      tag: "Virtual Cards",
      tagColor: "bg-green-50 text-green-600",
      title: "Create Virtual USD Cards for Expense Management",
      description: "Create unlimited USD expense cards",
      features: [
        "Assign cards and manage business expenses across teams",
        "Pay online subscriptions up to $100,000",
      ],
      cta: "Get Virtual Card",
      ctaSecondary: null,
      illustration: "💳",
      bgColor: "bg-gradient-to-br from-green-50 to-white",
    },
  ];

  return (
    <section className="section-container bg-primary-50/30">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
          Explore seamless cross-border
          <br />
          payment solutions for your business
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`card-feature ${solution.bgColor} group ${index === 0 || index === 1 ? "md:col-span-1" : ""}`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <span className={`tag ${solution.tagColor}`}>
                  {solution.tag}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{solution.illustration}</div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-brand-teal flex-shrink-0 mt-0.5"
                    />
                    <span className="text-primary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="px-6 py-3 bg-primary-900 text-white rounded-xl hover:bg-primary-800 transition-all font-semibold"
                >
                  {solution.cta}
                </Link>
                {solution.ctaSecondary && (
                  <Link
                    href="#"
                    className="px-6 py-3 border-2 border-primary-200 text-primary-900 rounded-xl hover:border-primary-300 transition-all font-semibold"
                  >
                    {solution.ctaSecondary}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
