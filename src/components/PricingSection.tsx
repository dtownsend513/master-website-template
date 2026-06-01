import Link from "next/link";

const packages = [
  {
    name: "Website Launch Package",
    price: "$250",
    badge: "Entry Offer",
    description:
      "A fast, clean 1-page website for small businesses that need to get online quickly.",
    features: [
      "1-page website",
      "Mobile responsive design",
      "Contact form setup",
      "Basic SEO setup",
      "48-hour turnaround",
      "50% deposit upfront",
      "Final payment due before launch",
    ],
    cta: "Start My Website",
    href: "/contact?package=launch",
    featured: true,
  },
  {
    name: "Starter Website",
    price: "$499+",
    badge: "Best For New Businesses",
    description:
      "A polished starter website for businesses that need more structure than a single-page launch site.",
    features: [
      "Up to 5 core pages",
      "Mobile-first responsive design",
      "Contact form setup",
      "Basic SEO structure",
      "Domain connection guidance",
      "Launch support",
    ],
    cta: "Start A Website",
    href: "/contact?package=starter",
    featured: false,
  },
  {
    name: "Business Website",
    price: "$999+",
    badge: "Most Popular",
    description:
      "A stronger website package for businesses that need better branding, more sections, and better conversion flow.",
    features: [
      "Custom homepage layout",
      "Expanded service sections",
      "Portfolio or gallery section",
      "Stronger call-to-action flow",
      "Improved local SEO structure",
      "Mobile and desktop polish",
    ],
    cta: "Build My Site",
    href: "/contact?package=business",
    featured: false,
  },
  {
    name: "Ecommerce Website",
    price: "Custom",
    badge: "Product Brands",
    description:
      "For businesses that need product pages, checkout planning, payment setup, and a stronger shopping experience.",
    features: [
      "Product page structure",
      "Cart and checkout planning",
      "Mobile ecommerce layout",
      "Payment integration planning",
      "Product organization",
      "Launch support",
    ],
    cta: "Plan My Store",
    href: "/contact?package=ecommerce",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Website Packages
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Simple website packages that grow with your business.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start with a $250 launch site, move into a larger business website,
            or build a full ecommerce experience when your brand is ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`rounded-[2rem] border p-7 shadow-xl transition duration-300 hover:-translate-y-2 ${
                item.featured
                  ? "border-sky-400 bg-white text-slate-950 shadow-sky-500/20"
                  : "border-white/10 bg-white/5 text-white"
              }`}
            >
              <div
                className={`mb-5 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${
                  item.featured
                    ? "bg-sky-100 text-sky-700"
                    : "bg-white/10 text-sky-300"
                }`}
              >
                {item.badge}
              </div>

              <h3 className="text-2xl font-black">{item.name}</h3>

              <p className="mt-4 text-4xl font-black">{item.price}</p>

              <p
                className={`mt-4 text-sm leading-6 ${
                  item.featured ? "text-slate-700" : "text-slate-300"
                }`}
              >
                {item.description}
              </p>

              <ul className="mt-7 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm font-semibold"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400 text-xs font-black text-slate-950">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={item.href}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-xs font-black uppercase tracking-[0.18em] transition ${
                  item.featured
                    ? "bg-slate-950 text-white hover:bg-slate-800"
                    : "bg-white text-slate-950 hover:bg-sky-300"
                }`}
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm leading-7 text-slate-300">
          <strong className="text-white">Launch Package Terms:</strong> The
          $250 Website Launch Package requires a 50% deposit upfront. Final
          payment is due before the website goes live. Larger projects are
          quoted based on scope.
        </div>
      </div>
    </section>
  );
}