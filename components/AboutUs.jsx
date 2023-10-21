import Image from "next/image";
import React from "react";
import {
  BanknotesIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <section className=" font-krona overflow-hidden py-32">
      <h1 className="text-3xl text-center">ABOUT US</h1>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className=" sm:text-xl text-xl mb-4 font-medium bg-gradient-to-tr from-pri-blue to-pri-cyan bg-clip-text text-transparent">
            X trodinory
          </h2>
          <p className="mb-8 leading-relaxed text-text-gray lg:pr-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 -mr-72 lg:-mr-72">
          <Image
            height={400}
            width={400}
            src={"/assets/images/X.png"}
            className=""
          />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 -ml-72 lg:-ml-52">
          <Image
            height={400}
            width={400}
            src={"/assets/images/Y.png"}
            className=""
          />
        </div>
        <div className="lg:flex-grow md:w-2/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className=" sm:text-xl text-xl mb-4 font-medium bg-gradient-to-tr from-pri-blue to-pri-cyan bg-clip-text text-transparent">
            Y trodinory
          </h2>
          <p className="mb-8 leading-relaxed text-text-gray lg:pr-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className=" sm:text-xl text-xl mb-4 font-medium bg-gradient-to-tr from-pri-blue to-pri-cyan bg-clip-text text-transparent">
            Z trodinory
          </h2>
          <p className="mb-8 leading-relaxed text-text-gray lg:pr-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 -mr-72 lg:-mr-72">
          <Image
            height={400}
            width={400}
            src={"/assets/images/Z.png"}
            className=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-10 gap-20 md:gap-6 py-32">
        <div className="relative bg-primary-bg-light rounded-3xl p-8">
          <div className="rounded-xl p-3 bg-sec-cyan absolute -top-8 right-14">
            <PresentationChartLineIcon className=" w-10 fill-pri-cyan " />
          </div>
          <h3 className="font-inter text-xl font-bold">IDEATE</h3>
          <p className="text-text-gray mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="relative bg-primary-bg-light rounded-3xl p-8">
          <div className="rounded-xl p-3 bg-sec-cyan absolute -top-8 right-14">
            <WrenchScrewdriverIcon className=" w-10 fill-pri-cyan " />
          </div>
          <h3 className="font-inter text-xl font-bold">BUILD</h3>
          <p className="text-text-gray mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative bg-primary-bg-light rounded-3xl p-8">
          <div className="rounded-xl p-3 bg-sec-cyan absolute -top-8 right-14">
            <BanknotesIcon className=" w-10 fill-pri-cyan " />
          </div>
          <h3 className="font-inter text-xl font-bold">MONETIZE</h3>
          <p className="text-text-gray mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
