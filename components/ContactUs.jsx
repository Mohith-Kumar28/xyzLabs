import React from "react";

const ContactUs = () => {
  return (
    <div className="flex justify-center">
      <div className="p-12 pb-14 rounded-3xl font-krona bg-sec-cyan text-text-light-gray flex flex-col justify-center m-8 lg:mx-20 my-40 max-w-4xl">
        <p className="px-8">
          Are you ready to Xplore Your Zone and take your brand to the next
          level? We are excited to explore the possibilities with you. Contact
          us today to start the conversation. Together, we will create,
          innovate, and conquer the Creator landscape!
          <br />
          <br />
          Join us on the journey to explore your creative zone, with XYZ Labs.
        </p>
        <button className="text-pri-bg font-krona font-bold text-xl bg-gradient-to-br from-pri-blue to-pri-cyan p-3 rounded-full -mb-20 mt-9 mx-12 lg:-mb-20 lg:mt-7 lg:mx-16 shadow-xl">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
