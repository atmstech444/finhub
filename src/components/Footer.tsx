import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Linkdin from "../assets/linklin.png";

export const Footer = () => {
  return (
    <div className="bg-black mt-[40%] pb-10 pt-[48px]">
      <div className="  px-3   smallTablet:w-[500px] tablet:w-[720px] tablet:m-auto bigTablet:w-[960px] desktop:w-[1140px] m-auto">
        <p className=" text-3xl text-white">Finhub 365</p>
        <div className="my-4 tablet:flex justify-between gap-10">
          <p className=" text-white pb-5 text-sm w-[360px]">
            Finhub 365 არის პლატფორმა, რომელიც შექმნილია ცნობისმოყვარე
            პირებისთვის და საწარმოებისთვის, რომელიც ემსახურება ფინანსური
            მონაცემების, სიახლეების და ანალიტიკის ცენტრს.
          </p>
          <div className="flex smallTablet:justify-end gap-5 text-white">
            <img className=" w-[32px] h-[32px]" src={Facebook} />
            <img className=" w-[32px] h-[32px]" src={Twitter} />
            <img className=" w-[32px] h-[32px]" src={Instagram} />
            <img className=" w-[32px] h-[32px]" src={Linkdin} />
          </div>
        </div>
        <div className=" h-1 bg-darkGray smallTablet:hidden"></div>
        <div className=" tablet:flex justify-between">
          <p className=" text-white py-2 tablet:w-[30%] text-sm">
            საავტორო უფლება © 2023 Finhub365
          </p>
          <div className=" flex justify-between tablet:w-[60%] text-sm">
            <p className=" text-white">წესები და პირობები</p>
            <p className=" text-white">კონფიდენციალურობის პოლიტიკა</p>
          </div>
        </div>
      </div>
    </div>
  );
};
