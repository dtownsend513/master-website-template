import Link from "next/link";

const plans = [
  {
    name: "Website Launch Package",
    price: "$250",
    tag: "Entry Offer",
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
    description:
      "A clean, professional starter website for businesses that need more than one section and a stronger first impression.",
    features: [
      "Up to 5 core pages",
      "Mobile-first responsive design",
      "Contact form setup",
      "Basic SEO structure",
      "Domain connection guidance",
      "Launch support",
    ],
    cta: "Start A Website",
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "$999+",
    tag: "Most Popular",
    description:
      "A stronger website package for businesses that need better branding, more sections, stronger visuals, and higher-converting structure.",
    features: [
      "Custom homepage layout",
      "Expanded service sections",
      "Portfolio or gallery section",
      "Stronger call-to-action flow",
      "Improved local SEO structure",
      "Mobile and desktop polish",
      "Launch support",
    ],
    cta: "Build My Business Site",
    highlighted: false,
  },
  {
    name: "Ecommerce Website",
    price: "Custom",
    tag: "Product Brands",
    description:
      "A product-focused website for brands that need online shopping, product pages, checkout flow, and stronger product presentation.",
    features: [
      "Product page structure",
      "Cart and checkout planning",
      "Brand-focused product sections",
      "Mobile ecommerce layout",
      "Payment integration planning",
      "Launch support",
    ],
    cta: "Plan My Store",
    highlighted: false,
  },
];

const addOns = [
  "Monthly website support",
  "Landing page design",
  "Website redesign",
  "SEO page setup",
  "Contact form integration",
  "Email notification setup",
  "Portfolio/case study pages",
  "Website speed cleanup",
];

const faqs = [
  {
    question: "Do I have to pay everything upfront?",
    answer:
      "No. The Website Launch Package requires a 50% deposit upfront, with the remaining balance due before launch. Larger projects may have custom payment terms depending on scope.",
  },
  {
    question: "What is included in the $250 Website Launch Package?",
    answer:
      "The $250 Website Launch Package includes a 1-page mobile-responsive website, contact form setup, basic SEO structure, and a 48-hour turnaround.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. A redesign can improve layout, messaging, mobile experience, visuals, and trust without starting the business from scratch.",
  },
  {
    question: "Do you help connect the domain?",
    answer:
      "Yes. Domain connection, launch checks, and basic setup guidance can be included as part of the project.",
  },
  {
    question: "Can you build ecommerce websites?",
    answer:
      "Yes. Ecommerce projects are priced based on the product structure, checkout needs, payment setup, and amount of polish required.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.14),_transparent_30%)]" />

        <div className="absolute left-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Pricing
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Website packages built for small businesses that need to look
              professional.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Clear website options for startups, local businesses, service
              brands, and ecommerce projects. Start small with a $250 launch
              website or upgrade into a larger build when your business needs
              more.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-8 shadow-2xl transition duration-500 hover:-translate-y-3 ${
                  plan.highlighted
                    ? "border-sky-400 bg-sky-400/10 shadow-sky-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div
                  className={`mb-6 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${
                    plan.highlighted
                      ? "bg-sky-400 text-slate-950"
                      : "bg-white/10 text-sky-300"
                  }`}
                >
                  {plan.tag}
                </div>

                <h2 className="text-3xl font-black">{plan.name}</h2>

                <p className="mt-5 text-5xl font-black text-white">
                  {plan.price}
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm font-semibold text-slate-200"
                    >
                      <span className="text-sky-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-10 inline-flex w-full justify-center rounded-full px-6 py-4 text-center text-xs font-black uppercase tracking-[0.2em] transition duration-300 ${
                    plan.highlighted
                      ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                      : "bg-white text-slate-950 hover:bg-sky-300"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                Add-ons
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Extra support when your website needs more.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Some projects need extra polish, more pages, integrations, or
                ongoing support. These add-ons can be included based on the
                project scope.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {addOns.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-sky-600">✓</span>
                  <p className="mt-3">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              Pricing FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Common pricing questions.
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-slate-950 p-10 text-center text-white">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Not sure which package fits?
            </p>

            <h3 className="mt-4 text-4xl font-black">
              Start with a free website review.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              Send your current site, business type, and goals. We’ll help
              identify the best path forward.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-sky-400 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
            >
              Request Website Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}