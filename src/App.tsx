import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className=" mt-[50px] bigTablet:mt-[90px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
