import { HiOutlineCalculator } from "react-icons/hi2";
import { ThreeCanvasComponent } from ".";

export default function Hero() {
  return (
    <section className="max-w-[1200px] w-full m-auto flex justify-center xs:items-center  xs:flex-col-reverse lg:flex-row gap-x-6 xs:my-16 relative z-10">
      <div className="xs:w-[296px] md:w-[466px] w-[588px] flex flex-col gap-y-6">
        <h1 className="font-normal font-archivo tracking-wider xs:text-4xl md:text-[56px] md:leading-relaxed 2xl:text-[80px] text-black">
          CREATING YOUR OWN STORY
        </h1>
        <p className="xs:text-sm md:test-base font-normal font-raleway">
          Every company has its own unique culture and values, so it's important
          to find an outsourcing company that shares your vision and approach to
          business․ Cost is always a consideration for companies, especially
          startups. However, it's important to strike a balance between cost and
          quality.
        </p>
        <div className="flex xs:flex-col-reverse md:flex-row xs:items-start md:items-center gap-6 font-raleway xs:justify-center lg:justify-start">
          <button className="bg-blue border-2 border-blue font-bold py-4 px-5 hover:bg-activeBlue  hover:text-white xs:text-sm md:test-base">
            LET'S TALK
          </button>
          <button className="flex items-center gap-x-2.5 border-2 py-4 px-5 font-bold hover:bg-activeBlue hover:border-activeBlue hover:text-white xs:text-sm md:test-base">
            <HiOutlineCalculator />
            <span>CALCULATE THE COST</span>
          </button>
        </div>
      </div>
      <div className="xs:w-52 xs:h-[200px] md:w-[466px] md:h-[456px] 2xl:w-[588px] 2xl:h-[576px] ">
        <ThreeCanvasComponent />
      </div>
    </section>
  );
}
