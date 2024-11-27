import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "@/components/NavBar/Index";
import Footer from "@/components/Footer/Index";
import Loading from "./pages/Loading/Index";

import { scrollPosition } from "@/services/utils/scrollPosition";
import { preloadImages } from "@/services/utils/preload";
import projectsData from "@/services/data/projects.json";

import upArrow from "@public/upArrow.svg";

export default function App() {
  const [posY, setPosY] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    scrollPosition(setPosY);

    preloadImages(projectsData)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
