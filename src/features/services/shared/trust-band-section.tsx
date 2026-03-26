const imgStar = "/assets/asset-006.svg";

export type TrustBandSectionProps = {
  body: string;
  image: string;
  sectionBackgroundClassName?: string;
};

export function TrustBandSection({
  body,
  image,
  sectionBackgroundClassName = "bg-[#f7f7f7]",
}: TrustBandSectionProps) {
  return (
    <section className={`${sectionBackgroundClassName} py-[64px] md:py-[80px]`}>
      <div className="mx-auto w-full max-w-[1374px] px-4 md:px-6">
        <div className="relative flex flex-col gap-[40px] rounded-[8px] bg-white p-[34px] lg:flex-row lg:gap-[80px] lg:items-center lg:pl-[200px] lg:pr-[120px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[8px] opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#340c3b 1px,transparent 1px),linear-gradient(90deg,#340c3b 1px,transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative flex flex-col gap-[16px] items-start lg:max-w-[520px]">
            <div className="absolute -top-10 left-[260px] size-[100px] pointer-events-none opacity-60">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgStar} />
            </div>
            <div className="font-sans font-bold text-[#1c1c1e] text-[80px] lg:text-[96px] tracking-[-2px] leading-[0.9]">9+</div>
            <p className="font-sans font-bold text-[#1c1c1e] text-[36px] lg:text-[48px] tracking-[-0.48px] leading-[1.1]">years of trust</p>
            <p className="font-sans font-light text-[#7d7d7d] text-[16px] lg:text-[18px] leading-[27px] max-w-[440px]">{body}</p>
          </div>

          <div className="relative flex flex-1 items-center justify-center lg:justify-end">
            <div className="relative h-[280px] lg:h-[360px] w-full max-w-[500px]">
              <img
                alt="Trust illustration"
                className="absolute inset-0 max-w-none object-contain size-full"
                src={image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
