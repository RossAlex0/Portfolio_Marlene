import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import Navbar from "@/components/NavBar/Index";
import Footer from "@/components/Footer/Index";
import Loading from "./pages/Loading/Index";

import { scrollPosition } from "@/services/utils/scrollPosition";
import { preloadImages } from "@/services/utils/preload";
import projectsData from "@/services/data/projects.json";

import upArrow from "/upArrow.svg";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  const [posY, setPosY] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const Loader = () => <ClipLoader color="#1c2a7e" size={50} />;

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
      <Suspense fallback={<Loader />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <button
        type="button"
        className={posY >= 240 ? "btntotop" : "btntotop hide"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={upArrow}
          alt="arrow"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
      </button>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
      <SpeedInsights />
    </>
  );
}
