import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ka } from "date-fns/locale";

export const Header = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, MMMM dd, yyyy", {
    locale: ka,
  });

  console.log(formattedDate);

  return (
    <div>
      <div className="bg-black">
        <p className=" text-white text-center">{formattedDate}</p>
        <div>
          <p>გამოწერა</p>
        </div>
      </div>
    </div>
  );
};
