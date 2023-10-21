import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen justify-center align-middle relative">
      <div className="mx-auto ">
        <Image
          height={700}
          width={700}
          src={"/assets/images/hero.png"}
          className=""
        />
      </div>

      <div className="mx-auto absolute left-1/2 bottom-6 z-10 flex flex-col gap-4 -translate-x-1/2">
        <Image
          className="mx-auto"
          height={30}
          width={30}
          src={"/assets/icons/mouse-icon.svg"}
        />
        <p className="font-krona text-text-gray">Scroll Down</p>
      </div>
    </div>
  );
};

export default Hero;
