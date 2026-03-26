const faqs = [
  {
    question: "What services does Tekspot provide?",
    answer:
      "We provide integrated support across Talent/Staffing, Design & Strategy, Digital Marketing, and Technology so businesses can scale through one accountable partner.",
  },
  {
    question: "Can you support urgent hiring requirements?",
    answer:
      "Yes. Our staffing model is built for both urgent and ongoing hiring needs, from specialist roles to larger workforce ramps with quality-first screening.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Absolutely. We tailor delivery to business stage, team size, and goals, supporting both early-stage teams and large organizations.",
  },
  {
    question: "How do your engagement models work?",
    answer:
      "Engagement can be structured project-wise, retainer-based, or as an embedded support model depending on your scope, timelines, and growth plans.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After a short discovery call, we define scope and kickoff plan immediately. Most engagements can start within days once requirements are aligned.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="bg-[#340c3b] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[1374px] rounded-[8px] bg-white p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-3">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-[#340c3b]">
            FAQs
          </p>
          <h2 className="font-sans text-[32px] font-semibold leading-[1.2] tracking-[-0.48px] text-[#1c1c1e] md:text-[40px]">
            Frequently asked questions
          </h2>
          <p className="max-w-[760px] font-sans text-[16px] leading-[26px] text-[#7d7d7d]">
            Quick answers about how we work, what we deliver, and how we can support your growth.
          </p>
        </div>

        <div className="divide-y divide-[#e8deec] border-y border-[#e8deec]">
          {faqs.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[18px] font-medium leading-[1.4] text-[#1c1c1e] marker:content-none md:text-[20px]">
                {item.question}
                <span className="shrink-0 text-[24px] text-[#340c3b] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pt-3 font-sans text-[15px] leading-[24px] text-[#6a6a6a] md:text-[16px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

