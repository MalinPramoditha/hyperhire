import Image from "next/image";
import Main from "./component/Main";
import OptionSlider from "./component/OptionSlider";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="pt-20 lg:pb-[123px] pb-[44px]" style={{ zIndex: 50 }}>
          <Main />
          <OptionSlider />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#26C2B9] to-[#288BE7] " />
        <div className="absolute inset-0 ">
          <Image 
            src="/assets/images/bg.png" 
            alt="Background" 
            fill 
            className="object-cover opacity-80 select-none"
            style={{ mixBlendMode: 'color-burn' }}
            draggable={false}
          />
        </div> 
      </div>
      <Footer />
    </>
  );
}
