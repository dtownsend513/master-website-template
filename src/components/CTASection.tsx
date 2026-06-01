import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 shadow-[0_40px_120px_rgba(0,0,0,.25)] md:p-16">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-sky-300">
              Ready To Launch?
            </div>

            <h2 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Start with a{" "}
              <span className="text-sky-400">
                $250 Website Launch Package
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Get online quickly with a professional website and upgrade later
              as your business grows. No forced subscriptions and clear pricing.
            </p>

          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

              <div className="text-4xl font-black text-white">
                $250
              </div>

              <div className="mt-2 text-sm text-slate-400">
                Launch Package
              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

              <div className="text-4xl font-black text-white">
                $499+
              </div>

              <div className="mt-2 text-sm text-slate-400">
                Starter Website
              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

              <div className="text-4xl font-black text-white">
                $999+
              </div>

              <div className="mt-2 text-sm text-slate-400">
                Business Website
              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

              <div className="text-4xl font-black text-white">
                Custom
              </div>

              <div className="mt-2 text-sm text-slate-400">
                Ecommerce
              </div>

            </div>

          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-sky-400/15 bg-sky-400/10 p-6">

            <div className="text-center">

              <div className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                Website Launch Package Includes
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {[
                  "1-page website",
                  "Mobile responsive design",
                  "Contact form included",
                  "Basic SEO setup",
                  "48-hour turnaround",
                  "50% deposit upfront",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/5 p-4 text-sm font-semibold text-white"
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-sky-400 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
            >
              Start My Website
            </Link>

            <Link
              href="/pricing"
              className="inline-flex justify-center rounded-full border border-white/15 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-sky-300 hover:text-sky-300"
            >
              View All Packages
            </Link>

          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            Launch Package requires 50% deposit upfront.
            Final payment due before launch.
          </div>

        </div>

      </div>
    </section>
  );
}