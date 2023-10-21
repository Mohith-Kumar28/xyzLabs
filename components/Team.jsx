import React from "react";

const Team = () => {
  return (
    <div className="font-krona">
      <h2 className=" sm:text-3xl text-3xl text-center mb-4 font-medium bg-gradient-to-t from-pri-blue to-pri-cyan bg-clip-text text-transparent">
        Team
      </h2>
      <div className="lg:flex-row flex flex-col gap-20 lg:gap-6 p-10">
        <div className="lg:w-1/2   rounded-tl-full rounded-3xl lg:rounded-3xl lg:rounded-l-full lg:flex bg-primary-bg-light ">
          <div className="bg-white aspect-square h-72 rounded-full bg-gradient-to-t from-pri-blue to-pri-cyan  p-1">
            <div className="bg-white w-full h-full rounded-full relative"></div>
          </div>
          <div className="py-10 px-12">
            <h3 className="text-white text-xl">Mohith Kumar</h3>
            <h4 className=" text-xl text-text-gray">TECHNOLOGY</h4>
            <p className="text-text-gray mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>
        </div>
        <div className="lg:w-1/2  rounded-tr-full rounded-3xl lg:rounded-3xl lg:rounded-r-full flex flex-col-reverse lg:flex-row bg-primary-bg-light ">
          <div className="py-10 px-12">
            <h3 className="text-white text-xl">Soaib Aktar</h3>
            <h4 className=" text-xl text-text-gray">BUSINESS</h4>
            <p className="text-text-gray mt-6">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>

          <div className="bg-white aspect-square h-72 w-72 ml-auto rounded-full bg-gradient-to-t from-pri-blue to-pri-cyan  p-1">
            <div className="bg-white w-full h-full rounded-full relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
