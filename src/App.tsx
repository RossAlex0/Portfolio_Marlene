import { Outlet } from "react-router-dom";

import Navbar from "@/components/NavBar/Index";
import Footer from "@/components/Footer/Index";
import { useEffect, useState } from "react";
import upArrow from "@public/upArrow.svg";
import { scrollPosition } from "@/services/utils/scrollPosition";
function App() {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    scrollPosition(setPosY);
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <button
        type="button"
        className={posY >= 240 ? "btntotop" : "btntotop hide"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={upArrow} alt="arrow" />
      </button>
      <Footer />
    </>
  );
}

export default App;
