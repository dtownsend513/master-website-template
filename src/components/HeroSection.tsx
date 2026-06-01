import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-40 text-white lg:px-8">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),_transparent_35%)]" />

      <div className="absolute left-[-120px] top-32 h-[350px] w-[350px] rounded-full bg-sky-500/20 blur-[140px]" />

      <div className="absolute right-[-100px] bottom-0 h-[300px] w-[300px] rounded-full bg-blue-700/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-sky-300">
            Cincinnati Web Design For Small Businesses
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Websites that make your business look{" "}
            <span className="text-sky-400">
              premium
            </span>
            , trusted, and ready for customers.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Launch with our new $250 Website Launch Package or scale into
            larger website packages as your business grows.
            Modern websites. Mobile-first design. No forced subscriptions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-sky-400 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
            >
              Start My Website
            </Link>

            <Link
              href="/pricing"
              className="inline-flex justify-center rounded-full border border-white/15 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-sky-300 hover:text-sky-300"
            >
              View Packages
            </Link>

          </div>

          {/* STATS */}

          <div className="mt-12 grid gap-4 sm:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <p className="text-3xl font-black">
                $250
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Launch package
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <p className="text-3xl font-black">
                $499+
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Starter sites
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <p className="text-3xl font-black">
                $999+
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Business builds
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <p className="text-3xl font-black">
                Custom
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Ecommerce
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

            <div className="mb-4 flex gap-2">

              <div className="h-3 w-3 rounded-full bg-red-400" />

              <div className="h-3 w-3 rounded-full bg-yellow-400" />

              <div className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            <div className="rounded-[1.5rem] bg-slate-900 p-8">

              <div className="inline-flex rounded-full bg-sky-400 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-950">
                New Website Launch Package
              </div>

              <h2 className="mt-6 text-5xl font-black">
                $250
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Perfect for businesses that need a professional website
                launched quickly.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "1-page website",
                  "Mobile responsive",
                  "Contact form included",
                  "Basic SEO",
                  "48-hour turnaround",
                  "50% deposit upfront",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <span className="text-sky-300">
                      ✓
                    </span>

                    <span className="font-semibold">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-sky-400 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
              >
                Claim Launch Pricing
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}