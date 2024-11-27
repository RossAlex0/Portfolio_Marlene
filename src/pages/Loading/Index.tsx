import Lottie from "lottie-react";
import loader from "@public/lottie/loader.json";

import "@/pages/Loading/loading.css";

export default function Loading() {
  return (
    <section className="loading_container">
      <div>
        <Lottie animationData={loader} loop={true} autoPlay={true} />
        <p>
          Chargement
          <span> . </span>
          <span> . </span>
          <span> . </span>
        </p>
      </div>
    </section>
  );
}
