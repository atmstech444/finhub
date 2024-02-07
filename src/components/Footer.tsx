import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black mt-[40%] py-10">
      <div className="  px-3   smallTablet:w-[500px] tablet:w-[720px] tablet:m-auto bigTablet:w-[960px] desktop:w-[1140px] m-auto">
        <p className=" text-3xl text-white">Finhub 365</p>
        <div className="my-4 tablet:flex justify-between gap-10">
          <p className=" text-white">
            Finhub 365 არის პლატფორმა, რომელიც შექმნილია ცნობისმოყვარე
            პირებისთვის და საწარმოებისთვის, რომელიც ემსახურება ფინანსური
            მონაცემების, სიახლეების და ანალიტიკის ცენტრს.
          </p>
          <div className="flex justify-end text-white">
            <p>icons</p>
          </div>
        </div>
        <div className=" h-1 bg-darkGray smallTablet:hidden"></div>
        <div className=" tablet:flex justify-between">
          <p className=" text-white tablet:w-[30%]">
            საავტორო უფლება © 2023 Finhub365
          </p>
          <div className=" flex justify-between tablet:w-[60%]">
            <p className=" text-white">წესები და პირობები</p>
            <p className=" text-white">კონფიდენციალურობის პოლიტიკა</p>
          </div>
        </div>
      </div>
    </div>
  );
};
