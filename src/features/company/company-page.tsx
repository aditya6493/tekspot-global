import { CompanyHeroSection } from "./components/company-hero-section";
import { CompanyProblemSolution } from "./components/company-problem-solution";
import { CompanyFounderSection } from "./components/company-founder-section";
import { CompanyValuesSection } from "./components/company-values-section";

const timeline = [
  {
    year: "2017",
    title: "Tekspot founded",
    body: "Started with a staffing-first model focused on high-quality execution and speed.",
  },
  {
    year: "2020",
    title: "Expanded into design",
    body: "Launched design and strategy services to support digital product and brand growth.",
  },
  {
    year: "2023",
    title: "Growth and engineering scale",
    body: "Added marketing and web/app development to offer a full integrated delivery stack.",
  },
  {
    year: "Today",
    title: "Integrated business partner",
    body: "Serving clients across industries with one coordinated model from team to growth.",
  },
] as const;

const serviceModel = [
  {
    title: "Talent/Staffing",
    points: ["Contract and full-time hiring", "Role-based sourcing and screening"],
  },
  {
    title: "Design & Strategy",
    points: ["UX/UI and design systems", "Journey and conversion optimization"],
  },
  {
    title: "Digital Marketing",
    points: ["Performance and demand gen", "SEO, content, and lifecycle growth"],
  },
  {
    title: "Web & App Development",
    points: ["Frontend and backend delivery", "Mobile engineering and integrations"],
  },
] as const;

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1c1c1e]">
      <main className="mx-auto w-full max-w-[1374px] px-4 pt-5 pb-[120px] md:px-6 md:pt-5 md:pb-[120px] lg:px-6">
        <div className="flex flex-col gap-10">

          {/* ── Figma sections ── */}
          <CompanyHeroSection />
          <CompanyProblemSolution />
          <CompanyFounderSection />
          <CompanyValuesSection />

          {/* ── Journey ── */}
          <section className="rounded-[8px] border border-[#340c3b]/20 bg-white p-6 lg:p-8">
            <p className="text-[13px] uppercase tracking-[1px] text-[#340c3b]">Our Journey</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">How we evolved</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.year} className="border border-[#340c3b]/15 bg-[#fcfcfc] p-5">
                  <p className="text-[12px] font-medium uppercase tracking-[1px] text-[#340c3b]">{item.year}</p>
                  <h3 className="mt-2 text-[22px] font-medium leading-7">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#555]">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Service Model ── */}
          <section className="rounded-[8px] border border-[#340c3b]/20 bg-white p-6 lg:p-8">
            <p className="text-[13px] uppercase tracking-[1px] text-[#340c3b]">Service Model</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">One team, four capabilities</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {serviceModel.map((service) => (
                <article key={service.title} className="border border-[#340c3b]/20 bg-white p-5">
                  <h3 className="text-[22px] font-medium leading-7">{service.title}</h3>
                  <ul className="mt-3 space-y-2 text-[14px] text-[#555]">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 leading-6">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#340c3b]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="rounded-none border border-[#ae7cb6]/45 bg-white p-8 shadow-[-8px_10px_0px_0px_#ae7cb6] lg:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">Partner with Tekspot</h2>
            <p className="mt-3 max-w-3xl text-[17px] leading-8 text-[#555]">
              Whether you need hiring, product execution, growth, or engineering scale, we can structure a delivery model that fits your business goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:business@tekspotglobal.com"
                className="border border-[#340c3b] bg-[#340c3b] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Talk to us
              </a>
              <a
                href="/careers"
                className="border border-[#340c3b]/40 bg-white px-5 py-3 text-sm font-medium text-[#340c3b] transition hover:bg-[#f7eef9]"
              >
                Explore Careers
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
