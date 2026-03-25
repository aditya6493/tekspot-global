import Link from "next/link";

const imgLogo = "/assets/asset-009.svg";
const imgLinkedin = "/assets/asset-016.svg";
const imgInstagram = "/assets/asset-002.svg";
const imgFacebook = "/assets/asset-001.svg";
const imgDirections = "/assets/asset-039.svg";

type Office = {
  city: string;
  place?: string;
  address?: string;
  contact: string;
};

const primaryOffices: Office[] = [
  {
    city: "Bengaluru",
    place: "Chourasia Shreyas",
    address:
      "No 51, 3rd Cross Rd, 3r Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037",
    contact: "+91 8977799999",
  },
  {
    city: "Hyderabad",
    place: "Profound Tech Park",
    address:
      "5th Floor, White Field Rd, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500084",
    contact: "+91 8977799999",
  },
  {
    city: "Visakhapatnam",
    place: "Annapoorna Arcade",
    address: "202, 2nd Floor, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530017",
    contact: "+91 8977799999",
  },
  {
    city: "Vijayawada",
    place: "Benz Circle",
    address:
      "71-3-8A, Koneru Vari St, Benz Circle, Patamata, Vijayawada, Andhra Pradesh 520010",
    contact: "+91 8977799999",
  },
];

const globalOffices: Office[] = [
  { city: "Toronto", contact: "+91 8977799999" },
  { city: "Dubai", contact: "+91 8977799999" },
  { city: "Melbourne", contact: "+91 8977799999" },
  { city: "Dallas", contact: "+91 8977799999" },
];

function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="border-[0.5px] border-solid border-white/30 bg-transparent p-4">
      <h4 className="text-[20px] font-bold leading-[30px] tracking-[-0.2px] text-white">
        {office.city}
      </h4>
      {office.place ? (
        <p className="mt-1 text-[18px] leading-[27px] text-white/90">{office.place}</p>
      ) : null}
      {office.address ? (
        <p className="mt-1 text-[16px] leading-[24px] text-white/60">{office.address}</p>
      ) : null}
      <p className="mt-1 text-[16px] leading-[24px] text-white/60">Contact - {office.contact}</p>
      {office.address ? (
        <button
          type="button"
          className="mt-1 inline-flex items-center gap-2 text-[16px] leading-[24px] text-white/60"
        >
          <span>Get directions</span>
          <img alt="" className="size-5 invert opacity-60" src={imgDirections} />
        </button>
      ) : null}
    </article>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#340c3b] px-4 py-6 md:px-12 md:pb-12 md:pt-20">
      <div className="mx-auto w-full max-w-[1470px] rounded-[8px] px-0 md:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex w-full flex-col items-center justify-between gap-6 py-6 md:flex-row md:gap-16">
            <div className="w-full px-6 py-4">
              <img alt="Tekspot" className="h-12 w-[241px]" src={imgLogo} />
            </div>
            <div className="flex items-center gap-3">
              <img alt="LinkedIn" className="size-12" src={imgLinkedin} />
              <img alt="Instagram" className="size-12" src={imgInstagram} />
              <img alt="Facebook" className="size-12" src={imgFacebook} />
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {primaryOffices.map((office) => (
              <OfficeCard key={office.city} office={office} />
            ))}
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {globalOffices.map((office) => (
              <OfficeCard key={office.city} office={office} />
            ))}
          </div>

          <div className="px-6 py-10">
            <div className="flex flex-wrap items-center justify-center gap-6 text-[16px] leading-[24px] text-white/80 md:gap-12">
              <Link href="/#what-we-do">Services</Link>
              <Link href="/services/staffing">Staffing</Link>
              <Link href="/services/design-strategy">Design &amp; Strategy</Link>
              <Link href="/services/digital-marketing">Digital Marketing</Link>
              <Link href="/services/technology">Technology</Link>
              <Link href="/company">Company</Link>
              <Link href="/careers">Careers</Link>
              <span>Contact</span>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-center text-[16px] leading-[24px] text-white/50">
              © 2026 tekspotglobal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
