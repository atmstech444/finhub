import React from "react";
const slides = [
  {
    proName: "FOREXCOM:SPXUSD",
    title: "S&P 500",
  },
  {
    proName: "FOREXCOM:NSXUSD",
    title: "US 100",
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR to USD",
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "Bitcoin",
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "Ethereum",
  },
  {
    proName: "FOREXCOM:SPXUSD",
    title: "S&P 500",
  },
  {
    proName: "FOREXCOM:NSXUSD",
    title: "US 100",
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR to USD",
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "Bitcoin",
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "Ethereum",
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR to USD",
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "Bitcoin",
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "Ethereum",
  },
];
export const Home = () => {
  return (
    <div className="px-3 smallTablet:w-[500px] tablet:w-[720px] tablet:m-auto bigTablet:w-[960px] desktop:w-[1140px] m-auto">
      <div id="information-area">
        <div id="horizontalScroll">
          <div id="scrollContent">
            {slides.map((slide, index) => (
              <div className="contentItem" key={index}>
                {slide.title}-{slide.proName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
