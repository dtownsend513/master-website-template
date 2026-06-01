import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const trustItems = [
  "Transparent Pricing",
  "No Forced Subscription",
  "Mobile Responsive",
  "48hr Launch Option",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.14),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Start Your Website
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Tell us what your business needs.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Start with a $250 Website Launch Package or choose a larger
              package for a more advanced website. Submit your project details
              and we’ll recommend the best fit.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center font-bold text-slate-200"
              >
                <span className="text-sky-300">✓</span> {item}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                Website Packages
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Choose the package that fits your current stage.
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-white p-5 text-slate-950">
                  <p className="text-xl font-black">
                    Website Launch Package — $250
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    1-page website, mobile responsive, contact form, basic SEO,
                    48-hour turnaround.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xl font-black">Starter Website — $499+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    For new businesses that need more structure and more page
                    content.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xl font-black">Business Website — $999+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    For businesses that need stronger branding, better visuals,
                    and more conversion flow.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xl font-black">
                    Ecommerce Website — Custom
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    For product brands that need product pages, cart planning,
                    and payment integration.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-sky-400/20 bg-sky-400/10 p-5">
                <p className="text-sm font-bold leading-7 text-slate-200">
                  Launch Package terms: 50% deposit upfront. Final payment due
                  before launch.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}