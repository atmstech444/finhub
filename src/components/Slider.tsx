import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Left from "../assets/Arrow - Left.svg";
import Right from "../assets/Arrow - Right.svg";
import axios from "axios";

export const Slider = () => {
  const items = [
    {
      time: "ორშაბათი, 05 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      image: "",
    },
    {
      time: "ორშაბათი, 06 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      image: "",
    },
    {
      time: "ორშაბათი, 07 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      image: "",
    },
    {
      time: "ორშაბათი, 08 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      image: "",
    },
  ];

  const [swiper, setSwiper] = useState<any>(null);

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    770: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
  //       );
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching blog:", error);
  //       return {
  //         success: false,
  //         message: "An unexpected error occurred",
  //       };
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <section className="flex gap-3 mt-10">
      <img src={Left} onClick={handlePrev} />

      {items && items.length > 0 && (
        <Swiper
          loop={false}
          spaceBetween={30}
          className="mySwiper slid"
          onSwiper={(swiper) => setSwiper(swiper)}
          breakpoints={breakpoints}
        >
          {items?.map((itm, index) => (
            <SwiperSlide key={index} style={{ cursor: "pointer" }}>
              <div className="flex gap-4">
                <div className="bg-gray w-[100px] h-[84px]"></div>
                <div>
                  <p className=" text-xs text-dark mb-2">{itm.time}</p>
                  <p className=" text-sm font-bold">{itm.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <img src={Right} onClick={handleNext} />
    </section>
  );
};
