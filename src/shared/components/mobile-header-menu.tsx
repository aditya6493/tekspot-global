"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ServiceItem = {
  title: string;
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
        className="flex items-center justify-center relative shrink-0"
        onClick={() => setOpen(true)}
        type="button"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[40px]">
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
                    <div className="flex flex-col gap-6 pt-6 pl-8">
                      <Link
                        className="font-sans font-semibold text-[#1c1c1e] text-[24px] leading-[34px]"
                        href="/"
                        onClick={() => setOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        className="font-sans font-semibold text-[#1c1c1e] text-[24px] leading-[34px]"
                        href="/#what-we-do"
                        onClick={() => setOpen(false)}
                      >
                        Services
                      </Link>

                      <div className="rounded-[10px] border border-[#340c3b]/15 bg-[#faf7fb]">
                        <button
                          className="flex w-full items-center justify-between px-4 py-3 text-left"
                          onClick={() => setServicesOpen((prev) => !prev)}
                          type="button"
                        >
                          <span className="font-sans font-semibold text-[#340c3b] text-[24px]">
                            Service Stack
                          </span>
                          <span className="text-[#340c3b] text-[18px]">
                            {servicesOpen ? "−" : "+"}
                          </span>
                        </button>
                        {servicesOpen ? (
                          <div className="border-t border-[#340c3b]/10 px-4 pb-4 pt-3">
                            <ul className="divide-y divide-dotted divide-[#e0d0ea]">
                              {services.map((service) => (
                                <li key={service.title} className="py-3 first:pt-0 last:pb-0">
                                  <p className="font-sans font-semibold text-[#1c1c1e] text-[24px]">
                                    {service.title}
                                  </p>
                                  <p className="mt-1 font-sans text-[#666] text-[16px] leading-6">
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
                          className="flex w-full items-center justify-between px-4 py-3 text-left"
                          onClick={() => setIndustriesOpen((prev) => !prev)}
                          type="button"
                        >
                          <span className="font-sans font-semibold text-[#340c3b] text-[24px]">
                            Industries
                          </span>
                          <span className="text-[#340c3b] text-[18px]">
                            {industriesOpen ? "−" : "+"}
                          </span>
                        </button>
                        {industriesOpen ? (
                          <div className="border-t border-[#340c3b]/10 px-4 pb-4 pt-3">
                            <ul className="divide-y divide-dotted divide-[#e0d0ea]">
                              {industries.map((industry) => (
                                <li key={industry.title} className="py-3 first:pt-0 last:pb-0">
                                  <p className="font-sans font-semibold text-[#1c1c1e] text-[24px]">
                                    {industry.title}
                                  </p>
                                  <p className="mt-1 font-sans text-[#666] text-[16px] leading-6">
                                    {industry.summary}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>

                      <Link
                        className="font-sans font-semibold text-[#1c1c1e] text-[24px] leading-[34px]"
                        href="/company"
                        onClick={() => setOpen(false)}
                      >
                        Company
                      </Link>
                      <Link
                        className="font-sans font-semibold text-[#1c1c1e] text-[24px] leading-[34px]"
                        href="/careers"
                        onClick={() => setOpen(false)}
                      >
                        Careers
                      </Link>
                      <Link
                        className="font-sans font-semibold text-[#1c1c1e] text-[24px] leading-[34px]"
                        href="/privacy"
                        onClick={() => setOpen(false)}
                      >
                        Privacy
                      </Link>
                      <Link
                        className="font-sans font-semibold text-[#1c1c1e] text-[24px] leading-[34px]"
                        href="/terms"
                        onClick={() => setOpen(false)}
                      >
                        Terms
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-[#e8e8e8] p-5">
                    <a
                      className="block w-full border border-[#340c3b] bg-[#340c3b] px-4 py-3 text-center font-sans font-semibold text-[24px] text-white"
                      href="mailto:business@tekspotglobal.com"
                    >
                      Contact us
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
