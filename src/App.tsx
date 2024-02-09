import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className=" mt-[50px] bigTablet:mt-[90px]"></div>
      <Footer />
    </>
  );
}

export default App;
