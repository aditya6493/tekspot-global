import Link from "next/link";
import { MobileHeaderMenu } from "@/shared/components/mobile-header-menu";

const imgCarbonEmail = "/assets/asset-032.svg";
const imgFa6BrandsLinkedin = "/assets/asset-017.svg";
const imgMdiInstagram = "/assets/asset-047.svg";
const imgIcRoundFacebook = "/assets/asset-043.svg";
const imgFrame = "/assets/asset-041.svg";
const imgChevron = "/assets/asset-011.svg";
const imgChevron1 = "/assets/asset-054.svg";
const imgImage1 = "/assets/asset-057.png";
const imgImage2 = "/assets/asset-036.png";
const imgImage3 = "/assets/asset-014.png";
const imgImage5 = "/assets/asset-071.png";
const imgFrameMobile = "/assets/asset-075.svg";
const imgMenu = "/assets/asset-076.svg";

const servicesMenuItems = [
  {
    title: "Talent/Staffing",
    icon: imgImage1,
    href: "/services/staffing",
    bullets: [
      "Contract & permanent hiring",
      "Bulk workforce onboarding",
      "Role-based talent screening",
    ],
  },
  {
    title: "Design and Strategy",
    icon: imgImage2,
    href: "/services/design-strategy",
    bullets: [
      "Product UX/UI design",
      "Brand and design systems",
      "Conversion-focused journeys",
    ],
  },
  {
    title: "Digital Marketing",
    icon: imgImage3,
    href: "/services/digital-marketing",
    bullets: [
      "Performance ad campaigns",
      "SEO and content growth",
      "Lead funnel optimization",
    ],
  },
  {
    title: "Web & App Development",
    icon: imgImage5,
    href: "/services/technology",
    bullets: [
      "Responsive web platforms",
      "Mobile app engineering",
      "API and backend integration",
    ],
  },
] as const;

const industriesMenuItems = [
  {
    title: "Healthcare & Life Sciences",
    summary:
      "Staffing support, patient-first digital journeys, and compliant execution at scale.",
  },
  {
    title: "BFSI",
    summary:
      "Growth programs, onboarding experience design, and process-led optimization.",
  },
  {
    title: "Retail & E-commerce",
    summary:
      "Storefront UX, performance marketing, and omnichannel conversion improvement.",
  },
  {
    title: "Manufacturing",
    summary:
      "Workforce ramp-up, operational support, and channel engagement initiatives.",
  },
  {
    title: "Technology & SaaS",
    summary:
      "Product teams, lifecycle growth, and platform engineering support.",
  },
  {
    title: "Logistics & Supply Chain",
    summary:
      "Operations staffing, workflow digitization, and efficiency-led transformation.",
  },
  {
    title: "EdTech & Training",
    summary:
      "Learner acquisition, course UX modernization, and support operations.",
  },
  {
    title: "Energy & Utilities",
    summary:
      "Program delivery teams and modernization of customer-facing service journeys.",
  },
] as const;

const industryServiceStack = [
  "Talent/Staffing",
  "Design & Strategy",
  "Digital Marketing",
  "Web & App Development",
] as const;

export function DesktopSiteHeader() {
  return (
    <>
      <div className="bg-[#340c3b] h-[48px] ml-[calc(50%-50vw)] relative shrink-0 w-screen z-[3]">
        <div className="mx-auto flex h-full w-full max-w-[1470px] items-center justify-between px-6 lg:px-16">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgCarbonEmail} />
            </div>
            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.4]">business@tekspotglobal.com</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[32px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgFa6BrandsLinkedin} />
            </div>
            <div className="relative shrink-0 size-[32px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgMdiInstagram} />
            </div>
            <div className="relative shrink-0 size-[32px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgIcRoundFacebook} />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-sticky-header bg-white h-[96px] ml-[calc(50%-50vw)] sticky top-0 w-screen z-[40]">
        <div className="mx-auto flex h-full w-full max-w-[1470px] items-center justify-between px-6 py-[24px] lg:px-16">
          <div className="content-stretch flex h-full items-center justify-between min-h-px min-w-px relative w-full">
            <Link href="/" className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[201.25px]">
              <div className="h-[39.915px] relative shrink-0 w-[201.327px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
              </div>
            </Link>
            <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="group">
                  <button
                    className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0"
                    type="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#340c3b] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px]">Services</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
                      <div className="flex-none rotate-90 transition-transform duration-200 group-hover:translate-x-0.5">
                        <div className="relative size-[24px]">
                          <img alt="" className="absolute block max-w-none size-full" src={imgChevron} />
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="desktop-mega-menu invisible opacity-0 pointer-events-none transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                    <div className="rounded-none border border-[#ae7cb6]/45 bg-[rgba(255,255,255,0.9)] p-4 shadow-[0_18px_45px_rgba(52,12,59,0.14)] backdrop-blur-[16px]">
                      <div className="grid grid-cols-4 gap-4">
                        {servicesMenuItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="border border-[#340c3b]/20 bg-white/80 p-5 transition hover:border-[#ae7cb6] hover:bg-white"
                          >
                            <div className="mb-4 relative size-[72px]">
                              <img
                                alt=""
                                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                src={item.icon}
                              />
                            </div>
                            <h4 className="font-sans font-medium text-[#1c1c1e] text-[24px] leading-[27px]">
                              {item.title}
                            </h4>
                            <ul className="mt-3 space-y-1.5 text-[#555] text-[14px]">
                              {item.bullets.map((point) => (
                                <li key={point} className="flex items-start gap-2 leading-6">
                                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#340c3b]" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <button
                    className="content-stretch flex gap-[7.99px] items-center px-[16px] py-[10px] relative shrink-0"
                    type="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#340c3b] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px]">Industries</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
                      <div className="flex-none rotate-90 transition-transform duration-200 group-hover:translate-x-0.5">
                        <div className="relative size-[24px]">
                          <img alt="" className="absolute block max-w-none size-full" src={imgChevron} />
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="desktop-mega-menu invisible opacity-0 pointer-events-none transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                    <div className="rounded-none border border-[#ae7cb6]/45 bg-[rgba(255,255,255,0.92)] p-6 shadow-[0_18px_45px_rgba(52,12,59,0.14)] backdrop-blur-[16px]">
                      <div className="mb-5 flex items-end justify-between border-b border-[#340c3b]/10 pb-3">
                        <div>
                          <p className="font-sans text-[#340c3b] text-[13px] tracking-[1px] uppercase">
                            Industries We Serve
                          </p>
                          <p className="font-sans text-[#555] text-[14px] mt-1">
                            A single integrated model tailored for each industry context.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-[320px_1fr] gap-4">
                        <div className="border border-[#340c3b]/20 bg-[#f9f2fb] p-5">
                          <p className="font-sans font-medium text-[#340c3b] text-[18px] leading-6">
                            All 4 services included
                          </p>
                          <p className="mt-1 font-sans text-[#5f4a65] text-[13px] leading-5">
                            Every industry engagement combines the same end-to-end service stack.
                          </p>
                          <ul className="mt-4 space-y-2">
                            {industryServiceStack.map((service) => (
                              <li key={service} className="flex items-center gap-2 text-[#1c1c1e] text-[14px]">
                                <span className="inline-flex h-5 w-5 items-center justify-center border border-[#ae7cb6]/60 bg-white text-[#340c3b] text-[11px]">
                                  ✓
                                </span>
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {industriesMenuItems.map((item) => (
                            <div
                              key={item.title}
                              className="border border-[#340c3b]/20 bg-white/90 p-4 transition hover:border-[#ae7cb6] hover:bg-white"
                            >
                              <h4 className="font-sans font-medium text-[#1c1c1e] text-[20px] leading-6">
                                {item.title}
                              </h4>
                              <p className="mt-2 font-sans text-[#555] text-[14px] leading-6">
                                {item.summary}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#340c3b] text-[16px] whitespace-nowrap">
                    <Link className="leading-[24px]" href="/company">
                      Company
                    </Link>
                  </div>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#340c3b] text-[16px] whitespace-nowrap">
                    <a className="leading-[24px]" href="/careers">
                      Careers
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#340c3b] border-solid content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip p-[17px] relative shadow-[-4px_6px_0px_0px_#ae7cb6] shrink-0">
                <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#340c3b] text-[16px] tracking-[-0.12px] whitespace-nowrap">
                  <p className="leading-[12px]">Contact us</p>
                </div>
                <div className="relative shrink-0 size-[24px]">
                  <img alt="" className="absolute block max-w-none size-full" src={imgChevron1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function MobileSiteHeader() {
  return (
    <>
      {/* Purple top bar — scrolls away */}
      <div className="bg-[#340c3b] h-[48px] relative w-full z-[41]">
        <div className="flex h-full items-center justify-center">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgCarbonEmail} />
            </div>
            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.4]">business@tekspotglobal.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky nav bar */}
      <div className="landing-sticky-header bg-white sticky top-0 w-full z-[40]">
        <div className="flex items-center justify-between gap-[40px] p-[24px]">
          <Link href="/" className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[201.25px]">
            <div className="h-[39.915px] relative shrink-0 w-[201.327px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgFrameMobile} />
            </div>
          </Link>
          <MobileHeaderMenu
            industries={industriesMenuItems}
            logoSrc={imgFrameMobile}
            menuIconSrc={imgMenu}
            services={servicesMenuItems}
          />
        </div>
      </div>
    </>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="hidden md:contents">
        <DesktopSiteHeader />
      </div>
      <div className="md:hidden">
        <MobileSiteHeader />
      </div>
    </>
  );
}

