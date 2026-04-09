import Link from "next/link";

const engagementSteps = [
  {
    step: "01",
    title: "Discovery & scope",
    body: "We align on goals, constraints, and success metrics—usually in a single working session.",
  },
  {
    step: "02",
    title: "Plan & squad",
    body: "We propose the right mix of roles, cadence, and checkpoints matched to your stage.",
  },
  {
    step: "03",
    title: "Execute in rhythm",
    body: "Weekly visibility, async updates, and shared tools so context never lives in one inbox.",
  },
  {
    step: "04",
    title: "Measure & iterate",
    body: "We review traction against the plan, tighten what is working, and adjust what is not.",
  },
] as const;

const howWeWorkStackZ = [
  "max-lg:z-[1]",
  "max-lg:z-[2]",
  "max-lg:z-[3]",
  "max-lg:z-[4]",
] as const;

export function LandingHowWeWorkSection() {
  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-20" aria-labelledby="landing-process-heading">
      <div className="mx-auto w-full max-w-[1374px]">
        <div className="mb-10 max-w-[720px] md:mb-14">
          <p className="font-sans text-[14px] font-medium uppercase tracking-[1.5px] text-[#340c3b]">
            How we work with you
          </p>
          <h2
            id="landing-process-heading"
            className="mt-3 font-sans text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1c1c1e] md:text-[44px] md:leading-[1.1] md:tracking-[-0.48px]"
          >
            From first conversation to steady momentum
          </h2>
          <p className="mt-4 font-sans text-[17px] leading-[27px] text-[#7d7d7d] md:text-[18px] md:leading-[29px]">
            A simple rhythm that works whether you are hiring, shipping product, or scaling acquisition.
          </p>
        </div>
        <div className="flex flex-col gap-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {engagementSteps.map((item, i) => (
            <div
              key={item.step}
              className={`group relative flex flex-col overflow-clip rounded-none border-[0.5px] border-solid border-[#340c3b] bg-white p-6 transition duration-200 md:p-7 max-lg:sticky max-lg:top-[80px] max-lg:h-[405px] max-lg:shrink-0 max-lg:w-full max-lg:mt-[40px] max-lg:first:mt-0 ${howWeWorkStackZ[i]} lg:static lg:top-auto lg:z-auto lg:mt-0 lg:h-auto lg:border-[#340c3b]/14 lg:bg-gradient-to-b lg:from-[#faf7fb] lg:to-white lg:hover:border-[#ae7cb6]/45`}
            >
              <div
                className="absolute inset-x-0 top-0 h-[12px] bg-gradient-to-r from-[#340c3b] to-[#ae7cb6]"
                aria-hidden
              />
              <div className="relative z-0 min-h-0 max-lg:flex max-lg:flex-1 max-lg:flex-col max-lg:justify-center">
                <span className="font-sans text-[64px] font-bold tabular-nums leading-none tracking-[-0.02em] text-[#340c3b]">
                  {item.step}
                </span>
                <h3 className="mt-2 font-sans text-[20px] font-medium leading-[1.25] text-[#1c1c1e] transition group-hover:text-[#340c3b] md:text-[24px] md:leading-[1.2]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[16px] leading-[24px] text-[#7d7d7d]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const discoverMore = [
  {
    title: "Company",
    description: "How we are organised, what we optimise for, and the journey that shaped Tekspot.",
    href: "/company",
    cta: "About Tekspot",
  },
  {
    title: "Careers",
    description: "Open roles and what it is like to build with teams who care about craft and accountability.",
    href: "/careers",
    cta: "Explore careers",
  },
] as const;

export function LandingEngagementSections() {
  return (
    <>
      <section
        className="bg-[#faf7fb] px-4 pb-14 pt-10 md:px-8 md:py-20"
        aria-labelledby="landing-discover-heading"
      >
        <div className="mx-auto w-full max-w-[1374px]">
          <div className="mb-8 max-w-[720px] md:mb-10">
            <p className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-[#340c3b]">
              Still browsing?
            </p>
            <h2
              id="landing-discover-heading"
              className="mt-3 font-sans text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1c1c1e] md:text-[40px] md:tracking-[-0.48px]"
            >
              Discover more about Tekspot
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {discoverMore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between rounded-[8px] border border-[#340c3b]/15 bg-white p-6 shadow-[0_10px_32px_rgba(52,12,59,0.06)] transition hover:border-[#ae7cb6] md:p-8"
              >
                <div>
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ae7cb6]">{item.title}</p>
                  <p className="mt-3 font-sans text-[15px] leading-[24px] text-[#6a6a6a]">{item.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center font-sans text-[15px] font-semibold text-[#340c3b]">
                  {item.cta}
                  <span aria-hidden className="ml-2 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#340c3b] px-4 py-14 md:px-8 md:py-20" aria-labelledby="landing-cta-heading">
        <div className="mx-auto flex w-full max-w-[1374px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[640px]">
            <h2
              id="landing-cta-heading"
              className="font-sans text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-white md:text-[40px] md:tracking-[-0.48px]"
            >
              Ready to see if we are the right operating partner?
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[26px] text-white/80 md:text-[17px] md:leading-[28px]">
              Tell us what you are hiring for, building, or scaling. We will respond with a clear next step—no generic pitch deck.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-8 sm:flex-row sm:gap-3 sm:items-center lg:flex-col lg:gap-8 lg:items-stretch">
            <a
              className="inline-flex h-12 items-center justify-center border border-[#ae7cb6] bg-white px-8 font-sans text-[15px] font-medium text-[#340c3b] shadow-[-4px_6px_0px_0px_#ae7cb6] transition hover:bg-[#faf7fb]"
              href="mailto:business@tekspotglobal.com?subject=Intro%20%E2%80%94%20Tekspot"
            >
              Email us to get started
            </a>
            <Link
              className="inline-flex h-12 items-center justify-center border border-white/35 bg-transparent px-8 font-sans text-[15px] font-medium text-white transition hover:bg-white/10"
              href="/#what-we-do"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
