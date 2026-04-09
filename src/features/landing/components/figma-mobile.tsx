
import { LandingHowWeWorkSection } from "@/features/landing/components/landing-engagement-sections";
import { MobileLandingScrollShell } from "@/features/landing/components/mobile-landing-scroll-shell";
import { TrustBandSection } from "@/shared/components/trust-band-section";
import { TypewriterLoop } from "@/shared/components/typewriter-loop";
import { LandingTestimonialSlider } from "@/features/landing/components/testimonial-slider";
import { AutoplayVideo } from "@/shared/components/autoplay-video";
import Link from "next/link";

const imgImage12 = "/assets/asset-045.png";
const imgImage8 = "/assets/asset-026.png";
const imgImage6 = "/assets/asset-066.png";
const imgImage7 = "/assets/asset-010.png";
const imgImage10 = "/assets/asset-007.png";
const imgImage11 = "/assets/asset-070.png";
const imgImage13 = "/assets/asset-046.png";
const imgImage14 = "/assets/asset-049.png";
const imgImage15 = "/assets/asset-060.png";
const img6981490C51C1E151D4Cb92192F69839085Edb11A12B2Ad6A95BlockerGradientMp4Mp4 = "/assets/asset-063.jpg";
const img6981490C51C1E151D4Cb92192F69839085Edb11A12B2Ad6A95BlockerGradientMp4Mp5 = "/assets/asset-021.jpg";
const imgEllipse1 = "/assets/asset-053.png";
const imgImage1 = "/assets/asset-022.png";
const imgImage2 = "/assets/asset-072.png";
const imgImage3 = "/assets/asset-035.png";
const imgImage5 = "/assets/asset-030.png";
const imgFrame = "/assets/asset-028.svg";
const imgFa6BrandsLinkedin = "/assets/asset-023.svg";
const imgMdiInstagram = "/assets/asset-065.svg";
const imgIcRoundFacebook = "/assets/asset-018.svg";
const imgMaterialSymbolsLightDirectionsOutlineSharp = "/assets/asset-042.svg";
const imgChevron = "/assets/asset-033.svg";
const imgChevron1 = "/assets/asset-012.svg";
const imgChevron2 = "/assets/asset-038.svg";
const imgGrid1 = "/assets/asset-037.svg";

const heroVideoSrc = "/videos/video-10.webm";

const trustLeaderCards = [
  { src: imgImage12, frameClass: "h-[28px] w-[216.468px]" },
  { src: imgImage8, frameClass: "aspect-[300/200] w-full" },
  { src: imgImage6, frameClass: "h-[72px] w-[134px]" },
  { src: imgImage7, frameClass: "h-[74px] w-[180px]" },
  { src: imgImage10, frameClass: "h-[52px] w-[198px]" },
  { src: imgImage11, frameClass: "h-[42px] w-[166px]" },
  { src: imgImage13, frameClass: "h-[34.644px] w-[184px]" },
  { src: imgImage14, frameClass: "h-[61.278px] w-[188px]" },
  { src: imgImage15, frameClass: "h-[56px] w-[210px]" },
] as const;

export default function AndroidCompact() {
  return (
    <MobileLandingScrollShell>
      <div className="hidden absolute bg-[#f5f5f5] content-stretch flex flex-col h-[2071px] items-start left-0 px-[16px] py-[24px] top-[7180px] w-full" data-name="Footer" data-node-id="129:9148">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="129:9149">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container" data-node-id="129:9150">
            <div className="content-stretch flex flex-col gap-[12px] items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9151">
              <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9152">
                <div className="h-[48px] overflow-clip relative shrink-0 w-[241.5px]" data-name="Logo" data-node-id="129:9153">
                  <div className="absolute h-[47.898px] left-0 top-0 w-[241.592px]" data-name="Frame" data-node-id="129:9154">
                    <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-[283.5px]" data-node-id="129:9179">
                <div className="relative shrink-0 size-[48px]" data-name="fa6-brands:linkedin" data-node-id="129:9180">
                  <img alt="" className="absolute block max-w-none size-full" src={imgFa6BrandsLinkedin} />
                </div>
                <div className="relative shrink-0 size-[48px]" data-name="mdi:instagram" data-node-id="129:9182">
                  <img alt="" className="absolute block max-w-none size-full" src={imgMdiInstagram} />
                </div>
                <div className="relative shrink-0 size-[48px]" data-name="ic:round-facebook" data-node-id="129:9184">
                  <img alt="" className="absolute block max-w-none size-full" src={imgIcRoundFacebook} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Location" data-node-id="129:9186">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container" data-node-id="129:9187">
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] h-[217px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9188">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9188;12:6098">
                  <p className="leading-[30px]">Visakhapatnam</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[18px] whitespace-nowrap" data-node-id="I129:9188;12:6099">
                  <p className="leading-[27px]">Annapoorna Arcade</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7d7d] text-[16px] w-[min-content]" data-node-id="I129:9188;12:6104">
                  <p className="leading-[24px]">202, 2nd Floor, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530017</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9188;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9188;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 6" data-node-id="I129:9188;12:6233">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9188;12:6234">
                    <p className="leading-[24px]">Get directions</p>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="material-symbols-light:directions-outline-sharp" data-node-id="I129:9188;12:6258">
                    <img alt="" className="absolute block max-w-none size-full" src={imgMaterialSymbolsLightDirectionsOutlineSharp} />
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] h-[241px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9189">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9189;12:6098">
                  <p className="leading-[30px]">Bengaluru</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[18px] whitespace-nowrap" data-node-id="I129:9189;12:6099">
                  <p className="leading-[27px]">Chourasia Shreyas</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7d7d] text-[16px] w-[min-content]" data-node-id="I129:9189;12:6104">
                  <p className="leading-[24px]">No 51, 3rd Cross Rd, 3r Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9189;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9189;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 6" data-node-id="I129:9189;12:6233">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9189;12:6234">
                    <p className="leading-[24px]">Get directions</p>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="material-symbols-light:directions-outline-sharp" data-node-id="I129:9189;12:6258">
                    <img alt="" className="absolute block max-w-none size-full" src={imgMaterialSymbolsLightDirectionsOutlineSharp} />
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] h-[241px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9190">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9190;12:6098">
                  <p className="leading-[30px]">Hyderabad</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[18px] whitespace-nowrap" data-node-id="I129:9190;12:6099">
                  <p className="leading-[27px]">Profound Tech Park,</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7d7d] text-[16px] w-[min-content]" data-node-id="I129:9190;12:6104">
                  <p className="leading-[24px]">5th Floor, White Field Rd, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500084</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9190;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9190;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 6" data-node-id="I129:9190;12:6233">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9190;12:6234">
                    <p className="leading-[24px]">Get directions</p>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="material-symbols-light:directions-outline-sharp" data-node-id="I129:9190;12:6258">
                    <img alt="" className="absolute block max-w-none size-full" src={imgMaterialSymbolsLightDirectionsOutlineSharp} />
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] h-[241px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9191">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9191;12:6098">
                  <p className="leading-[30px]">Vijayawada</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[18px] whitespace-nowrap" data-node-id="I129:9191;12:6099">
                  <p className="leading-[27px]">Benz Circle</p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7d7d] text-[16px] w-[min-content]" data-node-id="I129:9191;12:6104">
                  <p className="leading-[24px] whitespace-pre-wrap">{`71-3-8A, Koneru Vari St, Benz Circle, Patamata, Vijayawada,  Andhra Pradesh 520010.`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9191;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9191;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 6" data-node-id="I129:9191;12:6233">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9191;12:6234">
                    <p className="leading-[24px]">Get directions</p>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="material-symbols-light:directions-outline-sharp" data-node-id="I129:9191;12:6258">
                    <img alt="" className="absolute block max-w-none size-full" src={imgMaterialSymbolsLightDirectionsOutlineSharp} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="129:9192">
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9193">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9193;12:6098">
                  <p className="leading-[30px]">Toronto</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9193;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9193;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9194">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9194;12:6098">
                  <p className="leading-[30px]">Dubai</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9194;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9194;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9195">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9195;12:6098">
                  <p className="leading-[30px]">Melbourne</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9195;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9195;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-black border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9196">
                <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="I129:9196;12:6098">
                  <p className="leading-[30px]">Dallas</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5" data-node-id="I129:9196;12:6105">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="I129:9196;12:6106">
                    <p className="leading-[24px]">Contact - +91 8977799999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="129:9197">
            <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[40px] relative shrink-0 w-full" data-name="Container" data-node-id="129:9198">
              <div className="content-stretch flex font-sans font-normal items-center justify-between leading-[0] relative shrink-0 text-[#1c1c1e] text-[16px] w-full whitespace-nowrap" data-node-id="129:9199">
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="129:9202">
                  <a className="leading-[24px]" href="/company">
                    Company
                  </a>
                </div>
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="129:9203">
                  <a className="leading-[24px]" href="/careers">
                    Careers
                  </a>
                </div>
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="129:9204">
                  <p className="leading-[24px]">Contact</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="129:9206">
                  <a className="leading-[24px]" href="/privacy">
                    Privacy
                  </a>
                </div>
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="129:9208">
                  <a className="leading-[24px]" href="/terms">
                    Terms
                  </a>
                </div>
              </div>
            </div>
            <div className="border-[#e7e7e7] border-solid border-t content-stretch flex flex-col items-center justify-center pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder" data-node-id="129:9209">
              <div className="relative shrink-0 w-full" data-name="Container" data-node-id="129:9210">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] whitespace-nowrap" data-node-id="129:9211">
                    <p className="leading-[24px]">© 2026 tekspotglobal. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 px-[18px] py-[6px] top-[742px] w-full" data-name="Clients" data-node-id="129:8452">
        <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip py-[30px] relative shrink-0 w-full" data-name="Section" data-node-id="129:8453">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="title" data-node-id="129:8454">
            <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[15px] whitespace-nowrap" data-node-id="129:8455">
              <p className="leading-[20.25px]">Trust from leaders</p>
            </div>
          </div>
          <div className="clients-marquee w-full" data-name="Clients" data-node-id="161:9466">
            <div className="clients-marquee-track">
              {[...trustLeaderCards, ...trustLeaderCards].map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="bg-white border-[#bababa] border-[0.5px] border-solid content-stretch flex flex-col h-[96px] items-center justify-center px-[48px] py-[24px] relative shrink-0 w-[240px]"
                  data-name="Overlay"
                >
                  <div className={`${item.frameClass} relative shrink-0`}>
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={item.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="mobile-landing-stack"
        className="absolute left-0 top-[3082px] flex w-full flex-col"
        data-name="How we work and trust"
        data-node-id="129:8627"
      >
        <LandingHowWeWorkSection />
        <TrustBandSection
          body="Placing talent across technology, operations, marketing, and design — trusted by businesses that can't afford bad hires and won't accept slow ones."
          image="/assets/asset-040.png"
        />
        <div className="relative z-10 flex w-full flex-col items-stretch bg-white" data-name="Client" data-node-id="129:8701">
          <div className="mx-auto w-full max-w-[1374px] px-4 py-12 sm:px-6" data-node-id="129:8700">
            <div className="flex w-full min-w-0 flex-col gap-8" data-name="Container" data-node-id="129:8692">
              <div className="flex w-full min-w-0 flex-col gap-3">
                <h2
                  className="font-sans text-[28px] font-bold leading-[1.15] tracking-[-0.48px] text-[#1c1c1e] sm:text-[32px]"
                  data-node-id="129:8694"
                >
                  What our clients say
                </h2>
                <p
                  className="font-sans text-[16px] font-medium leading-[1.5] text-[#7d7d7d] sm:text-[18px]"
                  data-node-id="129:8696"
                >
                  Your whole firm communicates with confidence. Issues get fixed at the source. Compliance focuses on what matters.
                </p>
              </div>
              <div className="w-full min-w-0 max-w-full">
                <LandingTestimonialSlider variant="mobile" />
              </div>
            </div>
          </div>
          <div
            className="relative mt-8 flex w-full flex-col items-start overflow-clip bg-[#1c1c1e] px-4 py-14 sm:mt-10 sm:px-6 sm:py-14"
            data-name="Section"
            data-node-id="129:8629"
          >
            <div
              className="pointer-events-none absolute left-0 right-[-10.92%] top-[calc(50%+13.5px)] h-[524px] -translate-y-1/2 overflow-clip"
              data-name="Container"
              data-node-id="129:8630"
            >
              <div
                className="absolute left-1/2 top-1/2 flex h-[468px] w-[1428px] max-w-none -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-center overflow-clip sm:w-[min(1428px,calc(100vw+200px))]"
                data-name="6981490c51c1e151d4cb9219%2F69839085edb11a12b2ad6a95_blocker-gradient_mp4.mp4"
                data-node-id="129:8631"
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute left-0 top-[-42.32%] h-[184.64%] w-full max-w-none" src={img6981490C51C1E151D4Cb92192F69839085Edb11A12B2Ad6A95BlockerGradientMp4Mp4} />
                  </div>
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute left-0 top-[-34.52%] h-[168.99%] w-full max-w-none" src={img6981490C51C1E151D4Cb92192F69839085Edb11A12B2Ad6A95BlockerGradientMp4Mp5} />
                  </div>
                </div>
                <div className="h-[468px] w-full max-w-[1374px] shrink-0 bg-[rgba(0,0,0,0.25)]" data-node-id="129:8632" />
                <div className="min-h-px min-w-px w-full flex-[1_0_0]" data-name="Rectangle" data-node-id="129:8633" />
              </div>
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-[1374px] flex-col items-start" data-name="Container" data-node-id="129:8634">
              <p className="font-sans text-[10.9px] font-normal uppercase leading-[18px] tracking-[-0.12px] text-white" data-node-id="129:8635">
                TRUST CENTER
              </p>
              <div className="h-4 w-full shrink-0" data-name="Rectangle" data-node-id="129:8636" />
              <div className="flex w-full min-w-0 flex-col gap-4 text-white tracking-[-0.48px]" data-name="Heading 2" data-node-id="129:8637">
                <p className="font-sans text-[28px] font-medium leading-[1.4] sm:text-[32px]" data-node-id="129:8638">
                  Proven teams. Reliable execution. Real business impact.
                </p>
                <p className="font-sans text-[16px] font-normal leading-[1.4] text-white/90" data-node-id="129:8639">
                  From hiring to design to growth — we deliver with consistency, speed, and quality you can trust.
                </p>
              </div>
              <div className="h-8 w-full shrink-0" data-name="Rectangle" data-node-id="129:8640" />
              <a
                className="flex h-14 w-full max-w-full items-center justify-center border border-[#ae7cb6] bg-white px-5 font-sans text-[16px] font-medium text-[#202124] shadow-[0px_8px_0px_0px_#ae7cb6] sm:inline-flex sm:min-w-[240px] sm:max-w-[329px]"
                data-name="Component"
                data-node-id="129:8641"
                href="mailto:business@tekspotglobal.com?subject=Intro%20%E2%80%94%20Tekspot"
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="what-we-do"
        className="scroll-mt-[140px] absolute inset-x-0 top-[963px] relative isolate z-[20] flex flex-col items-start overflow-visible bg-[#340c3b] bg-[linear-gradient(90deg,#8d3da6_0%,#642478_56%,#1a0427_100%)] px-4 py-14"
        data-name="Section"
        data-node-id="129:8477"
      >
        <div className="mx-auto flex w-full max-w-[1374px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2" data-node-id="129:8480">
              <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.48px] w-full" data-node-id="129:8481">
                <p className="leading-[57.6px]">What we do</p>
              </div>
            </div>
            <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-white/80 w-full" data-node-id="129:8482">
              <p className="leading-[27px]">From building teams to driving growth and delivering digital products — we bring everything together to help your business scale faster.</p>
            </div>
          </div>
          <div className="content-stretch relative flex w-full shrink-0 flex-col items-start gap-0" data-name="Container" data-node-id="129:8483">
            <Link
              href="/services/staffing"
              className="bg-white border-[#340c3b] border-[0.5px] border-solid content-stretch relative flex flex-col items-start overflow-clip p-[24px] shadow-[-8px_8px_0px_0px_#ae7cb6] z-[1] max-lg:sticky max-lg:top-[80px] max-lg:h-[405px] max-lg:shrink-0 max-lg:w-full max-lg:mt-[40px] max-lg:first:mt-0"
              data-name="Component 3"
              data-node-id="129:8484"
            >
              <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="129:8485">
                <div className="h-[32px] relative shrink-0 w-[32.667px]" data-name="Chevron" data-node-id="129:8486">
                  <img alt="" className="absolute block max-w-none size-full" src={imgChevron2} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Container" data-node-id="129:8488">
                <div className="relative shrink-0 size-[100px]" data-name="image 1" data-node-id="129:8489">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                </div>
                <div className="h-[24px] shrink-0 w-0" data-name="Rectangle" data-node-id="129:8490" />
                <div className="h-[4px] shrink-0 w-full" data-name="Rectangle" data-node-id="129:8491" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-node-id="129:8492">
                  <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[24px] whitespace-nowrap" data-node-id="129:8493">
                    <p className="leading-[27px]">Talent/Staffing</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pr-[15.29px] relative w-full" data-name="Container" data-node-id="129:8494">
                    <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] w-full" data-node-id="129:8495">
                      <p className="leading-[24px]">Build your workforce across blue, grey, and white-collar roles — efficiently and at scale. We ensure quality hiring, faster turnaround, and consistent delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/services/design-strategy"
              className="bg-white border-[#340c3b] border-[0.5px] border-solid content-stretch relative flex flex-col items-start overflow-clip p-[24px] shadow-[-8px_8px_0px_0px_#ae7cb6] z-[2] max-lg:sticky max-lg:top-[80px] max-lg:h-[405px] max-lg:shrink-0 max-lg:w-full max-lg:mt-[40px]"
              data-name="Component 4"
              data-node-id="129:8496"
            >
              <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="129:8497">
                <div className="h-[32px] relative shrink-0 w-[32.667px]" data-name="Chevron" data-node-id="129:8498">
                  <img alt="" className="absolute block max-w-none size-full" src={imgChevron2} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Container" data-node-id="129:8500">
                <div className="relative shrink-0 size-[100px]" data-name="image 2" data-node-id="129:8501">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                </div>
                <div className="h-[24px] shrink-0 w-0" data-name="Rectangle" data-node-id="129:8502" />
                <div className="h-[4px] shrink-0 w-full" data-name="Rectangle" data-node-id="129:8503" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-node-id="129:8504">
                  <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[24px] whitespace-nowrap" data-node-id="129:8505">
                    <p className="leading-[27px]">Design and Strategy</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pr-[15.29px] relative w-full" data-name="Container" data-node-id="129:8506">
                    <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] w-full" data-node-id="129:8507">
                      <p className="leading-[24px]">Turn ideas into meaningful user experiences that convert and retain. We combine design with strategy to drive measurable growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/services/digital-marketing"
              className="bg-white border-[#340c3b] border-[0.5px] border-solid content-stretch relative flex flex-col items-start overflow-clip p-[24px] shadow-[-8px_8px_0px_0px_#ae7cb6] z-[3] max-lg:sticky max-lg:top-[80px] max-lg:h-[405px] max-lg:shrink-0 max-lg:w-full max-lg:mt-[40px]"
              data-name="Component 5"
              data-node-id="129:8508"
            >
              <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="129:8509">
                <div className="h-[32px] relative shrink-0 w-[32.667px]" data-name="Chevron" data-node-id="129:8510">
                  <img alt="" className="absolute block max-w-none size-full" src={imgChevron2} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Container" data-node-id="129:8512">
                <div className="relative shrink-0 size-[100px]" data-name="image 3" data-node-id="129:8513">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                </div>
                <div className="h-[24px] shrink-0 w-0" data-name="Rectangle" data-node-id="129:8514" />
                <div className="h-[4px] shrink-0 w-full" data-name="Rectangle" data-node-id="129:8515" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-node-id="129:8516">
                  <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[24px] whitespace-nowrap" data-node-id="129:8517">
                    <p className="leading-[27px]">Digital Marketing</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pr-[15.29px] relative w-full" data-name="Container" data-node-id="129:8518">
                    <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] w-full" data-node-id="129:8519">
                      <p className="leading-[24px]">
                        Drive measurable growth with data-driven digital marketing.
                        <br aria-hidden="true" />
                        From leads to conversions, we optimize for real business impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="bg-white border-[#340c3b] border-[0.5px] border-solid content-stretch relative flex flex-col items-start overflow-clip p-[24px] shadow-[-8px_8px_0px_0px_#ae7cb6] z-[4] max-lg:sticky max-lg:top-[80px] max-lg:h-[405px] max-lg:shrink-0 max-lg:w-full max-lg:mt-[40px]" data-name="Component 7" data-node-id="129:8520">
              <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="129:8521">
                <div className="h-[32px] relative shrink-0 w-[32.667px]" data-name="Chevron" data-node-id="129:8522">
                  <img alt="" className="absolute block max-w-none size-full" src={imgChevron2} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Container" data-node-id="129:8524">
                <div className="relative shrink-0 size-[100px]" data-name="image 5" data-node-id="129:8525">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                </div>
                <div className="h-[24px] shrink-0 w-0" data-name="Rectangle" data-node-id="129:8526" />
                <div className="h-[4px] shrink-0 w-full" data-name="Rectangle" data-node-id="129:8527" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-node-id="129:8528">
                  <div className="flex flex-col font-sans font-medium justify-center leading-[27px] relative shrink-0 text-[#1c1c1e] text-[24px] whitespace-nowrap whitespace-pre" data-node-id="129:8529">
                    <p className="mb-0">{`Web & App `}</p>
                    <p>developement</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pr-[15.29px] relative w-full" data-name="Container" data-node-id="129:8530">
                    <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#7d7d7d] text-[16px] w-full" data-node-id="129:8531">
                      <p className="leading-[24px]">Develop high-performance web and mobile applications with seamless user experiences, speed, and reliability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[606px] items-start justify-between left-0 px-[16px] py-[44px] top-[136px] w-full" data-name="Hero" data-node-id="129:8476">
        <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full" data-name="Grid - BG" data-node-id="129:8373">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="h-[303px] relative w-[1470px]" data-name="Grid" data-node-id="129:8374">
                <img alt="" className="absolute block max-w-none size-full" src={imgGrid1} />
              </div>
            </div>
          </div>
          <div className="h-[303px] relative shrink-0 w-[1470px]" data-name="Grid" data-node-id="129:8411">
            <img alt="" className="absolute block max-w-none size-full" src={imgGrid1} />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[480px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Img" data-node-id="129:8449">
          <AutoplayVideo
            className="pointer-events-none absolute inset-0 z-0 size-full object-cover"
            src={heroVideoSrc}
          />
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[2]">
            <div className="absolute inset-0 bg-[#340c3b] opacity-50" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center px-4">
            <TypewriterLoop
              words={["Staffing", "Design", "Digital Marketing", "Technology"]}
              className="text-center font-sans text-[clamp(40px,11vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
            />
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="Rectangle" data-node-id="129:8450" />
        </div>
      </div>
    </MobileLandingScrollShell>
  );
}