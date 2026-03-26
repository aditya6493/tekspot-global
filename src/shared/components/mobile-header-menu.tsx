"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const imgChevron = "/assets/asset-054.svg";

type ServiceItem = {
  title: string;
  href: string;
  bullets: readonly string[];
};

type IndustryItem = {
  title: string;
  summary: string;
};

type MobileHeaderMenuProps = {
  menuIconSrc: string;
  logoSrc: string;
  services: readonly ServiceItem[];
  industries: readonly IndustryItem[];
};

export function MobileHeaderMenu({
  menuIconSrc,
  logoSrc,
  services,
  industries,
}: MobileHeaderMenuProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <button
        aria-expanded={open}
        aria-label="Open menu"
        className="relative box-border flex h-[48px] min-h-[48px] max-h-[48px] shrink-0 items-center justify-center gap-2 overflow-clip border border-solid border-[#ae7cb6] bg-white px-3 shadow-[-4px_6px_0px_0px_#ae7cb6] transition hover:bg-[#faf7fb]"
        onClick={() => setOpen(true)}
        type="button"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-8">
            <img alt="" className="absolute block max-w-none size-full" src={menuIconSrc} />
          </div>
        </div>
      </button>

      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-[120] md:hidden">
              <button
                aria-label="Close menu"
                className="absolute inset-0 bg-black/45"
                onClick={() => setOpen(false)}
                type="button"
              />

              <aside className="absolute inset-0 h-dvh w-full bg-white">
                <div className="flex h-full flex-col">
                  <div className="px-5 pb-4 pt-5 flex justify-end">
                    <button
                      aria-label="Close menu"
                      className="rounded-full border border-[#340c3b]/20 px-3 py-1.5 text-[#340c3b] text-sm"
                      onClick={() => setOpen(false)}
                      type="button"
                    >
                      Close
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-5 py-5">
                    <div className="flex flex-col gap-5 pt-4 pl-6">
                      <Link
                        className="font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#1c1c1e]"
                        href="/"
                        onClick={() => setOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        className="font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#1c1c1e]"
                        href="/#what-we-do"
                        onClick={() => setOpen(false)}
                      >
                        Services
                      </Link>

                      <div className="rounded-[10px] border border-[#340c3b]/15 bg-[#faf7fb]">
                        <button
                          className="flex w-full items-center justify-between px-4 py-2.5 text-left"
                          onClick={() => setServicesOpen((prev) => !prev)}
                          type="button"
                        >
                          <span className="font-sans text-[16px] font-semibold leading-[22px] text-[#340c3b]">
                            Service Stack
                          </span>
                          <span className="text-[15px] font-medium leading-none text-[#340c3b] tabular-nums">
                            {servicesOpen ? "−" : "+"}
                          </span>
                        </button>
                        {servicesOpen ? (
                          <div className="border-t border-[#340c3b]/10 px-4 pb-4 pt-3">
                            <ul className="divide-y divide-dotted divide-[#e0d0ea]">
                              {services.map((service) => (
                                <li key={service.title} className="py-2.5 first:pt-0 last:pb-0">
                                  <Link
                                    className="font-sans text-[15px] font-semibold leading-[21px] text-[#1c1c1e] hover:text-[#340c3b]"
                                    href={service.href}
                                    onClick={() => setOpen(false)}
                                  >
                                    {service.title}
                                  </Link>
                                  <p className="mt-1 font-sans text-[13px] leading-[19px] text-[#666]">
                                    {service.bullets[0]}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>

                      <div className="rounded-[10px] border border-[#340c3b]/15 bg-white">
                        <button
                          className="flex w-full items-center justify-between px-4 py-2.5 text-left"
                          onClick={() => setIndustriesOpen((prev) => !prev)}
                          type="button"
                        >
                          <span className="font-sans text-[16px] font-semibold leading-[22px] text-[#340c3b]">
                            Industries
                          </span>
                          <span className="text-[15px] font-medium leading-none text-[#340c3b] tabular-nums">
                            {industriesOpen ? "−" : "+"}
                          </span>
                        </button>
                        {industriesOpen ? (
                          <div className="border-t border-[#340c3b]/10 px-4 pb-4 pt-3">
                            <ul className="divide-y divide-dotted divide-[#e0d0ea]">
                              {industries.map((industry) => (
                                <li key={industry.title} className="py-2.5 first:pt-0 last:pb-0">
                                  <p className="font-sans text-[15px] font-semibold leading-[21px] text-[#1c1c1e]">
                                    {industry.title}
                                  </p>
                                  <p className="mt-1 font-sans text-[13px] leading-[19px] text-[#666]">
                                    {industry.summary}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>

                      <Link
                        className="font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#1c1c1e]"
                        href="/company"
                        onClick={() => setOpen(false)}
                      >
                        Company
                      </Link>
                      <Link
                        className="font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#1c1c1e]"
                        href="/careers"
                        onClick={() => setOpen(false)}
                      >
                        Careers
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-[#e8e8e8] p-5">
                    <a
                      className="box-border flex h-[48px] min-h-[48px] max-h-[48px] w-full items-center justify-center gap-2 border border-solid border-[#ae7cb6] bg-white px-[17px] font-sans text-[15px] font-medium tracking-[-0.12px] text-[#340c3b] shadow-[-4px_6px_0px_0px_#ae7cb6] transition hover:bg-[#faf7fb]"
                      href="mailto:business@tekspotglobal.com"
                    >
                      <span className="leading-3">Contact us</span>
                      <img alt="" className="relative size-5 shrink-0" src={imgChevron} />
                    </a>
                  </div>
                </div>
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
