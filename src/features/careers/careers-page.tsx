"use client";

import { useMemo, useState } from "react";

type RoleCategory = "All" | "Talent" | "Design" | "Marketing" | "Engineering";

type Role = {
  title: string;
  category: Exclude<RoleCategory, "All">;
  location: string;
  type: "Full-time" | "Contract";
  summary: string;
};

const roleCategories: RoleCategory[] = [
  "All",
  "Talent",
  "Design",
  "Marketing",
  "Engineering",
];

const roles: Role[] = [
  {
    title: "Senior Talent Partner",
    category: "Talent",
    location: "Hyderabad, India",
    type: "Full-time",
    summary:
      "Own end-to-end hiring across enterprise accounts and improve hiring velocity with quality.",
  },
  {
    title: "Product Designer",
    category: "Design",
    location: "Bengaluru, India",
    type: "Full-time",
    summary:
      "Design conversion-focused product journeys across web and mobile for high-growth clients.",
  },
  {
    title: "Performance Marketing Manager",
    category: "Marketing",
    location: "Remote (India)",
    type: "Full-time",
    summary:
      "Plan and optimize paid channels with clear CAC, ROAS, and pipeline impact goals.",
  },
  {
    title: "Frontend Engineer (Next.js)",
    category: "Engineering",
    location: "Visakhapatnam, India",
    type: "Contract",
    summary:
      "Build scalable web experiences with strong performance, accessibility, and design fidelity.",
  },
  {
    title: "Mobile App Engineer (React Native)",
    category: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    summary:
      "Ship high-quality app features and collaborate with product, design, and growth teams.",
  },
  {
    title: "Growth Content Strategist",
    category: "Marketing",
    location: "Hyderabad, India",
    type: "Contract",
    summary:
      "Create full-funnel content systems that support awareness, demand generation, and retention.",
  },
];

const valuePoints = [
  {
    title: "Build Real Impact",
    body: "Work on outcomes that directly improve growth, operations, and customer experience.",
  },
  {
    title: "Grow With Mentorship",
    body: "Learn from cross-functional leaders in staffing, design, engineering, and marketing.",
  },
  {
    title: "Autonomy + Ownership",
    body: "Take end-to-end ownership with clear goals, fast feedback loops, and trust.",
  },
];

const processSteps = [
  "Application review and role fit check",
  "Skill evaluation with practical scenario",
  "Team conversation and culture alignment",
  "Offer discussion and onboarding plan",
];

export function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<RoleCategory>("All");

  const filteredRoles = useMemo(() => {
    if (activeCategory === "All") return roles;
    return roles.filter((role) => role.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1c1c1e]">
      <main className="mx-auto w-full max-w-[1310px] px-6 pb-16 pt-12 lg:px-8">
        <section className="border border-[#ae7cb6]/45 bg-white p-8 shadow-[-8px_10px_0px_0px_#ae7cb6] lg:p-12">
          <p className="text-[13px] font-medium uppercase tracking-[1px] text-[#340c3b]">
            Careers at Tekspot
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] lg:text-5xl">
            Build meaningful work with teams that deliver real business impact.
          </h1>
          <p className="mt-4 max-w-2xl text-[18px] leading-8 text-[#555]">
            Join a high-ownership culture where strategy meets execution across
            staffing, design, engineering, and growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#openings"
              className="border border-[#340c3b] bg-[#340c3b] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
            >
              View Open Roles
            </a>
            <a
              href="#hiring-process"
              className="border border-[#340c3b]/40 bg-white px-5 py-3 text-sm font-medium text-[#340c3b] transition hover:bg-[#f7eef9]"
            >
              Hiring Process
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {valuePoints.map((item) => (
            <article key={item.title} className="border border-[#340c3b]/20 bg-white p-6">
              <h2 className="text-[24px] font-medium leading-7 text-[#1c1c1e]">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#555]">{item.body}</p>
            </article>
          ))}
        </section>

        <section id="openings" className="mt-12 border border-[#340c3b]/20 bg-white p-6 lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] uppercase tracking-[1px] text-[#340c3b]">
                Open Roles
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
                Find your team
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {roleCategories.map((category) => {
                const active = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`border px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "border-[#340c3b] bg-[#340c3b] text-white"
                        : "border-[#340c3b]/30 bg-white text-[#340c3b] hover:bg-[#f7eef9]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredRoles.map((role) => (
              <article
                key={role.title}
                className="border border-[#340c3b]/20 bg-white p-5 transition hover:border-[#ae7cb6]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="border border-[#ae7cb6]/45 bg-[#f9f2fb] px-2 py-1 text-[11px] text-[#340c3b]">
                    {role.category}
                  </span>
                  <span className="border border-[#ddd] px-2 py-1 text-[11px] text-[#555]">
                    {role.type}
                  </span>
                </div>
                <h3 className="mt-3 text-[24px] font-medium leading-7">{role.title}</h3>
                <p className="mt-2 text-[14px] text-[#555]">{role.location}</p>
                <p className="mt-3 text-[15px] leading-7 text-[#555]">{role.summary}</p>
                <button
                  type="button"
                  className="mt-5 border border-[#340c3b]/40 px-4 py-2 text-sm font-medium text-[#340c3b] transition hover:bg-[#f7eef9]"
                >
                  Apply now
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="hiring-process" className="mt-12 border border-[#340c3b]/20 bg-white p-6 lg:p-8">
          <p className="text-[13px] uppercase tracking-[1px] text-[#340c3b]">
            Hiring Process
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
            Transparent and fast
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="border border-[#340c3b]/15 bg-[#fcfcfc] p-4">
                <p className="text-[12px] font-medium uppercase tracking-[1px] text-[#340c3b]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#1c1c1e]">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

