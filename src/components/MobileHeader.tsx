import { useState } from "react";
import Arrow from "../assets/Arrow - Down.svg";
import Search from "../assets/Search.svg";

export const MobileHeader = ({ setIsMenuOpen }: any) => {
  //dropdowns
  const [isMarketHovered, setIsMarketHovered] = useState(false);
  const [isEducationHovered, setIsEducationHovered] = useState(false);
  const market = [
    { value: "stocks", label: "Stocks" },
    { value: "currencies", label: "Currencies" },
    { value: "commodities", label: "Commodities" },
  ];
  const education = [
    { value: "stocks", label: "Stocks" },
    { value: "currencies", label: "Currencies" },
    { value: "commodities", label: "Commodities" },
    { value: "stocks", label: "Stocks" },
  ];
  return (
    <div className=" absolute h-full left-0 w-full top-0 flex z-10">
      <div className=" p-5 bg-white w-[330px] smallTablet:w-[450px] ">
        <div className="flex justify-between ">
          <div className="flex rounded-sm border-gray border py-3 px-2">
            <input placeholder="ძიება"></input>
            <img src={Search} />
          </div>
          <svg
            onClick={() => setIsMenuOpen(false)}
            className="m-auto mx-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.767 5.26235C15.0404 5.53572 15.0404 5.97893 14.767 6.2523L6.28171 14.7376C6.00834 15.0109 5.56512 15.0109 5.29176 14.7376C5.01839 14.4642 5.01839 14.021 5.29176 13.7476L13.777 5.26235C14.0504 4.98898 14.4936 4.98898 14.767 5.26235Z"
              fill="#222628"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29177 5.26243C5.56514 4.98906 6.00835 4.98906 6.28172 5.26243L14.767 13.7477C15.0404 14.0211 15.0404 14.4643 14.767 14.7377C14.4936 15.011 14.0504 15.011 13.777 14.7377L5.29177 6.25238C5.0184 5.97901 5.0184 5.5358 5.29177 5.26243Z"
              fill="#222628"
            />
          </svg>
        </div>
        <hr className="my-6"></hr>
        <div className="flex flex-col gap-7 w-full font-medium">
          <p className="font-medium">მთავარი</p>
          <div
            className="relative inline-block  "
            onClick={() => setIsMarketHovered(!isMarketHovered)}
          >
            <div className="flex justify-between">
              <button className="font-medium">ბაზრები</button>
              <img src={Arrow} />
            </div>
            {isMarketHovered && (
              <div className="absolute border-darkGray mt-4 text-menuColor w-full rounded-md border bg-gray rounded-b shadow-md ">
                {market.map((option) => (
                  <p
                    className="hover:bg-gray cursor-pointer py-2 px-1 font-medium"
                    key={option.value}
                    onClick={() => console.log(option.value)}
                  >
                    {option.label}
                  </p>
                ))}
              </div>
            )}
          </div>
          <p className="font-medium	">კრიპტო</p>
          <p className="font-medium	">ეკონომიკა</p>
          <div
            className="relative inline-block pb-8 "
            onClick={() => setIsEducationHovered(!isEducationHovered)}
          >
            <div className="flex gap-4 justify-between">
              <button className="font-medium	">განათლება</button>
              <img src={Arrow} />
            </div>
            {isEducationHovered && (
              <div className="absolute border-darkGray mt-4 text-menuColor w-full rounded-md border bg-gray rounded-b shadow-md">
                {education.map((option) => (
                  <p
                    className="hover:bg-gray cursor-pointer py-2 px-1 font-medium	"
                    key={option.value}
                  >
                    {option.label}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
