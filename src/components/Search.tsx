import SearchImage from "../assets/Search.svg";

export const Search = () => {
  return (
    <div className=" bg-white w-full absolute top-[175px]">
      <div className=" m-auto h-[20px]  tablet:py-5 tablet:max-w-[720px] tablet:m-auto bigTablet:max-w-[960px] desktop:max-w-[1140px] w-full">
        <div className=" border border-borderGray px-2 py-3 flex justify-between">
          <input placeholder="ძებნა" />
          <img src={SearchImage} />
        </div>
      </div>
    </div>
  );
};
