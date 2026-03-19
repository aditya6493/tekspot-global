type TermsSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const termsSections: TermsSection[] = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using Tekspot website, submitting an inquiry, requesting a proposal, purchasing services, or continuing an active engagement, you agree to be bound by these Terms & Conditions.",
      "If you accept these terms on behalf of an entity, you represent and warrant that you are duly authorized to bind that entity. If you do not have such authority, you must not use the services on that entity's behalf.",
    ],
  },
  {
    title: "2. Definitions",
    paragraphs: [
      "\"Tekspot\", \"we\", \"our\", and \"us\" refer to Tekspot Global Solutions and its authorized affiliates, contractors, and representatives involved in service delivery.",
      "\"Client\", \"you\", and \"your\" refer to any individual or legal entity using our website or receiving our services.",
      "\"Services\" include Talent/Staffing, Design & Strategy, Digital Marketing, Web & App Development, and related advisory, implementation, and support activities.",
      "\"Agreement\" means a signed proposal, statement of work (SOW), master service agreement (MSA), work order, or any other written contract between Tekspot and Client.",
    ],
  },
  {
    title: "3. Scope of Services",
    paragraphs: [
      "Tekspot provides business services including, but not limited to, Talent/Staffing, Design & Strategy, Digital Marketing, Web & App Development, product advisory, and delivery operations support.",
      "Service descriptions published on this website are for general information only and do not, by themselves, constitute a binding commitment, guaranteed timeline, guaranteed commercial result, or guaranteed hiring outcome.",
    ],
    bullets: [
      "Final scope, assumptions, dependencies, acceptance criteria, SLAs (if any), and deliverables are defined exclusively in the Agreement.",
      "Where any inconsistency exists between these website terms and a signed Agreement, the signed Agreement prevails for that engagement.",
    ],
  },
  {
    title: "4. Proposals, Estimates, and Engagement Start",
    paragraphs: [
      "Any proposal, quote, effort estimate, timeline, staffing plan, or architecture recommendation is non-binding until formally accepted in writing.",
      "Work begins only after commercial approval and completion of onboarding prerequisites, including required documentation, access credentials, and kickoff confirmation.",
    ],
  },
  {
    title: "5. Fees, Billing, and Taxes",
    paragraphs: [
      "Fees, billing milestones, currency, taxes, payment schedule, reimbursable expenses, and billing method are stated in the Agreement.",
      "Unless otherwise agreed in writing, invoices are due by the date specified on the invoice. Overdue amounts may attract applicable late charges and collection costs to the extent permitted by law.",
      "All taxes, duties, levies, and withholding obligations are the Client's responsibility unless explicitly stated otherwise in the Agreement.",
    ],
    bullets: [
      "Tekspot may suspend or pause delivery for materially overdue payments after written notice.",
      "Any approved scope increase, emergency request, or accelerated timeline may incur additional charges.",
    ],
  },
  {
    title: "6. Client Obligations and Dependencies",
    paragraphs: [
      "To enable quality delivery, Client shall provide timely access to relevant systems, stakeholders, product context, brand assets, legal requirements, and decision-makers.",
      "Client is responsible for accuracy, legality, and licensing of all content, data, credentials, and assets supplied to Tekspot.",
    ],
    bullets: [
      "Client delays in approvals, data availability, access provisioning, or dependency resolution may change estimated timelines and effort.",
      "Client shall appoint a single authorized point of contact for scope decisions and acceptance confirmation.",
    ],
  },
  {
    title: "7. Change Requests and Scope Control",
    paragraphs: [
      "Any request that materially changes agreed scope, timeline, architecture, hiring profile, output format, or acceptance criteria constitutes a Change Request.",
      "Tekspot will assess impact on cost and delivery and provide an updated change estimate or revised SOW for written approval before execution.",
    ],
  },
  {
    title: "8. Intellectual Property and Licensing",
    paragraphs: [
      "Tekspot retains all rights in its pre-existing IP, methodologies, templates, processes, accelerators, and internal tooling unless expressly assigned in writing.",
      "Ownership of final deliverables, where applicable, transfers or licenses to Client only upon full payment and as expressly stated in the Agreement.",
    ],
    bullets: [
      "Open-source components and third-party tools remain governed by their original license terms.",
      "Client is responsible for obtaining and maintaining required third-party subscriptions, API keys, media licenses, and platform accounts unless included in scope.",
    ],
  },
  {
    title: "9. Confidentiality and Non-Disclosure",
    paragraphs: [
      "Each party shall protect confidential information disclosed during pre-sales, execution, and post-delivery support using reasonable safeguards at least equivalent to those used for its own confidential data.",
      "Confidential information may be used solely for performance of the Agreement and disclosed only to authorized personnel with a need-to-know obligation.",
    ],
  },
  {
    title: "10. Data Protection and Privacy",
    paragraphs: [
      "Tekspot processes personal and business data in accordance with applicable data protection laws and commercially reasonable security practices.",
      "Where processing of personal data is involved, parties may execute data processing addenda (DPA), SCCs, or equivalent privacy annexes as legally required.",
      "Client remains responsible for lawful data collection, notices, consents, and data subject rights requests related to data it controls.",
    ],
  },
  {
    title: "11. Representations, Warranties, and Disclaimers",
    paragraphs: [
      "Tekspot warrants that services will be performed with reasonable care, professional diligence, and in alignment with the signed scope.",
      "Except as expressly stated in the Agreement, services and website content are provided on an \"as-is\" and \"as-available\" basis, without implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "Tekspot does not warrant uninterrupted access to third-party platforms, hosting providers, ad networks, or other external systems outside Tekspot's control.",
    ],
  },
  {
    title: "12. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Tekspot shall not be liable for indirect, incidental, consequential, special, punitive, or exemplary damages, including loss of revenue, loss of profit, goodwill, opportunity, or data.",
      "Tekspot's aggregate liability for all claims arising out of or related to an engagement is limited to fees actually paid by Client for the specific services giving rise to the claim during the preceding twelve (12) months, unless otherwise stated in the Agreement.",
    ],
  },
  {
    title: "13. Indemnification",
    paragraphs: [
      "Each party shall indemnify and hold harmless the other from third-party claims arising from its own breach of law, material breach of contract, gross negligence, willful misconduct, or IP infringement attributable to its supplied materials.",
    ],
  },
  {
    title: "14. Term, Suspension, and Termination",
    paragraphs: [
      "Either party may terminate as per notice periods and termination rights specified in the Agreement.",
      "Tekspot may suspend delivery for material breach, security risk, non-payment, or unlawful client instruction after reasonable notice where practicable.",
      "Upon termination, Client remains liable for completed work, approved expenses, committed resources, and non-cancellable third-party costs up to effective termination date.",
    ],
  },
  {
    title: "15. Non-Solicitation",
    paragraphs: [
      "During active engagement and for a limited period thereafter as defined in the Agreement, Client shall not directly solicit or hire Tekspot personnel assigned to the engagement without prior written consent.",
    ],
  },
  {
    title: "16. Force Majeure",
    paragraphs: [
      "Neither party is liable for delay or failure caused by events beyond reasonable control, including but not limited to natural disasters, government restrictions, widespread outages, labor disruptions, or acts of war.",
      "Affected obligations are suspended for the duration of the force majeure event, with reasonable mitigation efforts by both parties.",
    ],
  },
  {
    title: "17. Governing Law and Dispute Resolution",
    paragraphs: [
      "These terms are governed by the law specified in the Agreement. Where no Agreement exists, governing law is determined by Tekspot's principal contracting jurisdiction.",
      "Parties will first attempt good-faith resolution through authorized representatives before initiating formal legal proceedings.",
    ],
  },
  {
    title: "18. Miscellaneous",
    paragraphs: [
      "Tekspot may revise these Terms periodically to reflect legal, regulatory, or operational changes; updates become effective upon publication unless stated otherwise.",
      "If any provision is deemed unenforceable, remaining provisions remain valid and enforceable to the fullest extent permitted by law.",
      "Failure to enforce any right is not a waiver of that right.",
    ],
  },
  {
    title: "19. Contact",
    paragraphs: [
      "For contractual, legal, compliance, or policy-related questions, contact business@tekspotglobal.com.",
    ],
  },
] as const;

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1c1c1e]">
      <main className="mx-auto w-full max-w-[1310px] px-6 pb-16 pt-12 lg:px-8">
        <section className="border border-[#ae7cb6]/45 bg-white p-8 shadow-[-8px_10px_0px_0px_#ae7cb6] lg:p-12">
          <p className="text-[13px] font-medium uppercase tracking-[1px] text-[#340c3b]">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.02em] lg:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#555]">
            These terms govern your access to Tekspot website content and related
            service communication.
          </p>
          <p className="mt-3 text-[13px] text-[#666]">Last updated: March 18, 2026</p>
        </section>

        <section className="mt-10 border border-[#340c3b]/20 bg-white p-6 lg:p-8">
          {termsSections.map((section) => (
            <article key={section.title} className="border-b border-[#340c3b]/10 py-6 last:border-b-0">
              <h2 className="text-[24px] font-medium leading-7">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-7 text-[#555]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-4 space-y-2 text-[15px] text-[#555]">
                  {section.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2 leading-7">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#340c3b]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

