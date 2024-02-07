import React, { useState } from "react";
import { format } from "date-fns";
import { ka } from "date-fns/locale";
import Menu from "../assets/Menu.svg";
import Arrow from "../assets/Arrow - Down.svg";
import SearchImage from "../assets/Search.svg";
import { MobileHeader } from "./MobileHeader";
import { Search } from "./Search";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  //live date
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, MMMM dd, yyyy", {
    locale: ka,
  });

  //dropdowns
  const [selectedOption, setSelectedOption] = useState("international");
  const [isMarketHovered, setIsMarketHovered] = useState(false);
  const [isEducationHovered, setIsEducationHovered] = useState(false);
  const options = [
    { value: "international", label: "International" },
    { value: "usa", label: "USA" },
  ];
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
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <div className="bg-black">
        <div className=" py-3 tablet:flex tablet:justify-between tablet:py-5 tablet:max-w-[720px] tablet:m-auto bigTablet:max-w-[960px] desktop:max-w-[1140px]">
          <p className=" text-white text-center">{formattedDate}</p>
          <div className="flex justify-center gap-6 mt-5 tablet:mt-0">
            <select
              className=" bg-black text-white border border-solid border-white"
              onChange={handleOptionChange}
              value={selectedOption}
            >
              {options.map((option) => (
                <option
                  className=" text-white"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <p className=" text-white smallTablet:hidden tablet:block">
              გამოწერა
            </p>
          </div>
        </div>
      </div>
      <div className=" rounded-b shadow-md rounded-sm fixed w-full ">
        <div className="flex justify-between  max-w-[540px] m-auto tablet:px-0 tablet:max-w-[720px] bigTablet:max-w-[960px] desktop:max-w-[1140px]  bg-white bigTablet:pt-[32px]">
          <img
            className="p-4 border border-solid border-gray  m-auto mx-0 bigTablet:hidden "
            src={Menu}
            onClick={() => setIsMenuOpen(true)}
          />
          <p>Finhub 365</p>
          <div className="hidden bigTablet:flex gap-10 ">
            <p className="hover:border-b-2 border-red cursor-pointer">
              მთავარი
            </p>
            <div
              className="relative inline-block pb-8 "
              onMouseEnter={() => setIsMarketHovered(true)}
              onMouseLeave={() => setIsMarketHovered(false)}
            >
              <div className="flex gap-4">
                <button>ბაზრები</button>
                <img src={Arrow} />
              </div>
              {isMarketHovered && (
                <div className="absolute mt-8  bg-white border-t-2 border-red rounded-b shadow-md rounded-sm ">
                  {market.map((option) => (
                    <p
                      className="hover:bg-gray cursor-pointer py-2 px-1"
                      key={option.value}
                      onClick={() => console.log(option.value)}
                    >
                      {option.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <p className="hover:border-b-2 border-red cursor-pointer">კრიპტო</p>
            <p className="hover:border-b-2 border-red cursor-pointer">
              ეკონომიკა
            </p>
            <div
              className="relative inline-block pb-8 "
              onMouseEnter={() => setIsEducationHovered(true)}
              onMouseLeave={() => setIsEducationHovered(false)}
            >
              <div className="flex gap-4">
                <button>განათლება</button>
                <img src={Arrow} />
              </div>
              {isEducationHovered && (
                <div className="absolute mt-8 bg-white border-t-2 border-red rounded-b shadow-md rounded-sm ">
                  {education.map((option) => (
                    <p
                      className="hover:bg-gray cursor-pointer py-2 px-1"
                      key={option.value}
                    >
                      {option.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
            {isSearchOpen ? (
              <svg
                onClick={() => setIsSearchOpen(false)}
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
            ) : (
              <img
                className="mb-8"
                src={SearchImage}
                onClick={() => setIsSearchOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileHeader setIsMenuOpen={setIsMenuOpen} />}
      {isSearchOpen && <Search />}
    </div>
  );
};
