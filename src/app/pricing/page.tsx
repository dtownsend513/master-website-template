import Link from "next/link";

const plans = [
  {
    name: "Website Launch Package",
    price: "$250",
    tag: "Entry Offer",
    href: "/contact?package=launch",
    description:
      "A fast, clean 1-page website for small businesses that need to get online quickly.",
    features: [
      "1-page website",
      "Mobile responsive design",
      "Contact form setup",
      "Basic SEO structure",
      "48-hour turnaround",
      "Built from master website template",
      "50% deposit upfront",
      "Final payment due before launch",
    ],
    cta: "Start My Website",
    highlighted: true,
  },

  {
    name: "Starter Website",
    price: "$499+",
    tag: "Best For New Businesses",
    href: "/contact?package=starter",
    description:
      "A clean, professional starter website for businesses that need more than a single-page launch package.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "Domain guidance",
      "Launch support",
    ],
    cta: "Start A Website",
    highlighted: false,
  },

  {
    name: "Business Website",
    price: "$999+",
    tag: "Most Popular",
    href: "/contact?package=business",
    description:
      "For businesses needing stronger branding, conversion structure, and more polish.",
    features: [
      "Custom homepage",
      "Expanded sections",
      "Portfolio section",
      "Conversion improvements",
      "Local SEO structure",
      "Mobile polish",
    ],
    cta: "Build My Business Site",
    highlighted: false,
  },

  {
    name: "Ecommerce Website",
    price: "Custom",
    tag: "Product Brands",
    href: "/contact?package=ecommerce",
    description:
      "Online stores with stronger product presentation and shopping flow.",
    features: [
      "Product pages",
      "Checkout planning",
      "Mobile ecommerce",
      "Payment integration",
      "Product structure",
      "Launch support",
    ],
    cta: "Plan My Store",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-40 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Pricing
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Website packages built to grow with your business.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
            Start with a launch package and scale into larger builds when your
            business is ready.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.highlighted
                  ? "border-sky-400 bg-sky-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div
                className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase ${
                  plan.highlighted
                    ? "bg-sky-400 text-slate-950"
                    : "bg-white/10 text-sky-300"
                }`}
              >
                {plan.tag}
              </div>

              <h2 className="mt-6 text-3xl font-black">
                {plan.name}
              </h2>

              <p className="mt-4 text-5xl font-black">
                {plan.price}
              </p>

              <p className="mt-5 text-slate-300">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3"
                  >
                    <span className="text-sky-300">
                      ✓
                    </span>

                    {feature}

                  </li>
                ))}

              </ul>

              <Link
                href={plan.href}
                className={`mt-10 inline-flex w-full justify-center rounded-full px-6 py-4 text-xs font-black uppercase ${
                  plan.highlighted
                    ? "bg-sky-400 text-slate-950"
                    : "bg-white text-slate-950"
                }`}
              >
                {plan.cta}
              </Link>

            </div>
          ))}

        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-slate-300">
          Launch Package requires 50% deposit upfront.
          Final payment due before launch.
        </div>

      </div>

    </main>
  );
}