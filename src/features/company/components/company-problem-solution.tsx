const gridStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(to right,rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.05) 1px,transparent 1px)",
  backgroundSize: "3.57% 22.86%",
  backgroundPosition: "bottom",
  backgroundRepeat: "repeat-x",
};

type CardProps = {
  heading: string;
  body: string;
};

function ProblemSolutionCard({ heading, body }: CardProps) {
  return (
    <article className="relative flex flex-1 flex-col overflow-hidden rounded-[8px] bg-white p-6 md:p-[32px]">
      {/* Decorative grid at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[128px]"
        style={gridStyle}
      />
      <div className="relative z-10 flex h-full flex-col justify-start gap-6">
        <h2 className="font-sans text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1c1c1e] md:text-[32px] md:leading-[38.4px] md:tracking-[-0.32px]">
          {heading}
        </h2>
        <p className="font-sans text-[15px] leading-[1.6] text-[#7d7d7d] md:text-[18px] md:leading-[27px]">
          {body}
        </p>
      </div>
    </article>
  );
}

export function CompanyProblemSolution() {
  return (
    <section className="flex flex-col gap-4 rounded-[8px] bg-[#340c3b] px-4 py-16 md:flex-row md:rounded-none md:bg-transparent md:px-0 md:py-0">
      <ProblemSolutionCard
        heading="Fragmented Vendors Break Execution"
        body="Most businesses juggle separate agencies for hiring, design, marketing, and engineering. Each operates in a silo. Delivery slips. Context gets lost. Accountability becomes unclear. The overhead of coordination becomes the hidden cost of doing business."
      />
      <ProblemSolutionCard
        heading="One Partner. End-to-End Delivery."
        body="Tekspot brings every capability under a single roof. We structure engagements around outcomes, not deliverables. Our teams are already aligned — across staffing, strategy, growth, and engineering — so clients move faster from day one without rebuilding context every sprint."
      />
    </section>
  );
}
