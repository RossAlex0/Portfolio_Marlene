import { Link, useNavigate } from "react-router-dom";

import logoM from "@public/logoM.svg";
import "@/components/NavBar/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header_work">
        <Link to={"/"} className="work">
          <h2>Work</h2>
        </Link>
      </div>
      <button type="button" onClick={() => navigate("/")}>
        <img src={logoM} alt="Marlene Ayrault" />
      </button>
      <div className="header_about">
        <a
          href="/CV_AYRAULT.pdf"
          download="Marlene_Ayrault_CV.pdf"
          className="about"
        >
          <h2>About</h2>
        </a>
      </div>
    </header>
  );
}
