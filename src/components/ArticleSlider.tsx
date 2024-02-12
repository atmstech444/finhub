import { useState } from "react";
import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import Article3 from "../assets/article3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Left from "../assets/Arrow - Left 1.svg";
import Right from "../assets/Arrow - Right 1.svg";

export const ArticleSlider = () => {
  const items = [
    {
      time: "ორშაბათი, 05 თებერვალი , 2024 წელი",
      title: "Chevron-ის 2023 ფინანსური ლანდშაფტი: გამოწვევები და ტრიუმფები",
      desc: "აქციები",
      bg: "blue",
      image: Article1,
    },
    {
      time: "ორშაბათი, 06 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      desc: "პოლიტიკა",
      bg: "green",
      image: Article1,
    },
    {
      time: "ორშაბათი, 07 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      desc: "აქციები",
      bg: "blue",
      image: Article1,
    },
    {
      time: "ორშაბათი, 08 თებერვალი , 2024 წელი",
      title: "exxon’s 2023: მოგება, გამოწვევები და ინვესტიციები",
      desc: "პოლიტიკა",
      bg: "green",
      image: Article1,
    },
  ];

  const secondItems = [
    {
      time: "ორშაბათი, 05 თებერვალი , 2024 წელი",
      title: "უკრაინის სამხედრო ლიდერების ცვლა: ზალუჟნიის მოცილება",
      desc: "აქციები",
      bg: "blue",
      image: Article2,
    },
    {
      time: "ორშაბათი, 06 თებერვალი , 2024 წელი",
      title: "უკრაინის სამხედრო ლიდერების ცვლა: ზალუჟნიის მოცილება",
      desc: "პოლიტიკა",
      bg: "green",
      image: Article3,
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

  return (
    <div className="mt-16 flex flex-col tablet:flex-row m-auto">
      <div className=" tablet:w-[66.4%]">
        {items && items.length > 0 && (
          <Swiper
            loop={false}
            spaceBetween={30}
            className="mySwiper slid"
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {items?.map((itm, index) => (
              <SwiperSlide key={index} style={{ cursor: "pointer" }}>
                <div className="flex gap-4 relative">
                  <p
                    className={`bg-${itm.bg} absolute py-1 px-3 top-5 left-5 text-white`}
                  >
                    {itm.desc}
                  </p>
                  <img
                    src={Left}
                    className=" absolute left-1 top-[45%]"
                    onClick={handlePrev}
                  />
                  <img className=" w-auto" src={itm.image} />
                  <div className=" absolute bottom-4 text-white left-4">
                    <p className=" text-xs  mb-2">{itm.time}</p>
                    <p className=" text-sm font-bold">{itm.title}</p>
                  </div>
                  <img
                    src={Right}
                    className=" absolute right-1 top-[45%]"
                    onClick={handleNext}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div>
        {secondItems?.map((itm, index) => (
          <div className="flex gap-4 relative" key={index}>
            <p
              className={`bg-${itm.bg} absolute py-1 px-3 top-5 left-5 text-white`}
            >
              {itm.desc}
            </p>
            <img className=" mobile:w-[476px] " src={itm.image} />
            <div className=" absolute bottom-4 text-white left-4">
              <p className=" text-xs  mb-2">{itm.time}</p>
              <p className=" text-sm font-bold">{itm.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
