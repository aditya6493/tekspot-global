type PrivacySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const privacySections: PrivacySection[] = [
  {
    title: "1. Scope and Applicability",
    paragraphs: [
      "This Privacy Policy explains how Tekspot Global Solutions (\"Tekspot\", \"we\", \"our\", \"us\") collects, uses, stores, shares, and protects personal data when you visit our website, contact us, apply for roles, or engage our services.",
      "This policy applies to information collected through our website, business communications, and service engagement workflows, unless a separate agreement or notice governs a specific engagement.",
    ],
  },
  {
    title: "2. Personal Data We Collect",
    paragraphs: [
      "We collect information you provide directly and information generated through your interaction with our digital properties.",
    ],
    bullets: [
      "Identity and contact data: name, email address, phone number, company name, job title, and location.",
      "Business inquiry data: project requirements, service interests, budget range, timeline expectations, and communication records.",
      "Recruitment data: resume/CV, portfolio links, role preferences, interview notes, and hiring-stage updates.",
      "Technical and usage data: IP address, browser/device data, referring pages, session interactions, and analytics events.",
      "Marketing preference data: communication preferences and opt-in/opt-out status.",
    ],
  },
  {
    title: "3. How We Use Personal Data",
    paragraphs: [
      "We process personal data only for legitimate business purposes and in line with applicable law.",
    ],
    bullets: [
      "To respond to inquiries, proposals, and partnership discussions.",
      "To deliver and improve services across staffing, design, marketing, and engineering engagements.",
      "To evaluate job applicants, schedule interviews, and manage recruitment workflows.",
      "To monitor site performance, troubleshoot issues, and optimize user experience.",
      "To send relevant business updates, insights, and marketing communications where permitted.",
      "To detect, prevent, and address fraud, security incidents, or legal non-compliance.",
    ],
  },
  {
    title: "4. Legal Bases for Processing",
    paragraphs: [
      "Where required by applicable law, we rely on one or more lawful bases for processing personal data, including consent, contractual necessity, legal obligation, and legitimate interests.",
      "Our legitimate interests include improving service quality, maintaining secure operations, managing client relationships, and recruiting suitable candidates.",
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    paragraphs: [
      "We use cookies and similar technologies for site functionality, analytics, and performance measurement.",
      "You may control cookies through browser settings. Disabling certain cookies may affect some site features or user experience.",
    ],
    bullets: [
      "Essential cookies: required for core site operation and security.",
      "Analytics cookies: help us understand traffic, behavior, and content performance.",
      "Preference cookies: remember selected preferences where applicable.",
    ],
  },
  {
    title: "6. Data Sharing and Third Parties",
    paragraphs: [
      "We do not sell personal data. We may share data with trusted third parties strictly for business operations and service delivery.",
    ],
    bullets: [
      "Hosting, infrastructure, analytics, communications, and workflow tools.",
      "Professional advisors such as legal, financial, and compliance partners where required.",
      "Regulatory bodies, courts, or law enforcement when legally required.",
      "Authorized subcontractors and staffing partners under confidentiality obligations.",
    ],
  },
  {
    title: "7. International Data Transfers",
    paragraphs: [
      "Where data is transferred across jurisdictions, we implement reasonable safeguards consistent with applicable legal requirements.",
      "Such safeguards may include contractual protections, secure transfer mechanisms, and access controls.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "We retain personal data only for as long as necessary for business, legal, operational, and contractual purposes.",
    ],
    bullets: [
      "Inquiry and business communication records: retained for follow-up and account history.",
      "Recruitment data: retained for active hiring and potential future opportunities, subject to legal limits.",
      "Service and transaction records: retained for contractual, tax, audit, and compliance requirements.",
    ],
  },
  {
    title: "9. Information Security",
    paragraphs: [
      "We apply reasonable technical and organizational safeguards to protect personal data against unauthorized access, loss, misuse, or alteration.",
      "While we follow industry-standard practices, no internet-based system can guarantee absolute security.",
    ],
    bullets: [
      "Access controls and role-based permissions.",
      "Secure infrastructure and endpoint controls.",
      "Operational monitoring and incident response practices.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have rights regarding your personal data, including access, correction, deletion, portability, and objection to certain processing.",
      "You may also withdraw consent where processing is based on consent, subject to legal and contractual limitations.",
    ],
    bullets: [
      "Request access to personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of data where legally applicable.",
      "Object to or restrict specific processing activities.",
      "Opt out of non-essential marketing communications.",
    ],
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "Our services are intended for business and professional audiences. We do not knowingly collect personal information from children under the age threshold defined by applicable law.",
    ],
  },
  {
    title: "12. Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party websites and platforms. We are not responsible for the privacy practices or content of third-party properties.",
      "Users are encouraged to review the privacy policies of external websites before sharing personal data.",
    ],
  },
  {
    title: "13. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect legal, technical, or operational changes.",
      "Any material updates will be posted on this page with a revised \"Last updated\" date.",
    ],
  },
  {
    title: "14. Contact and Grievance",
    paragraphs: [
      "For privacy-related requests, complaints, or questions, contact: business@tekspotglobal.com.",
      "Where required by law, we will respond within the applicable statutory timelines.",
    ],
  },
] as const;

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1c1c1e]">
      <main className="mx-auto w-full max-w-[1310px] px-6 pb-16 pt-12 lg:px-8">
        <section className="border border-[#ae7cb6]/45 bg-white p-8 shadow-[-8px_10px_0px_0px_#ae7cb6] lg:p-12">
          <p className="text-[13px] font-medium uppercase tracking-[1px] text-[#340c3b]">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.02em] lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#555]">
            This policy explains how Tekspot collects, uses, and protects information
            when you use our website and services.
          </p>
          <p className="mt-3 text-[13px] text-[#666]">Last updated: March 18, 2026</p>
        </section>

        <section className="mt-10 border border-[#340c3b]/20 bg-white p-6 lg:p-8">
          {privacySections.map((section) => (
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

