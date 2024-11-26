import logoM from "@public/logoM.svg";
import "@/components/Footer/footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={logoM} alt="Marlene Ayrault" />
      <div>
        <p>All rights reserved</p>
        <p>
          <span className="copyright">©</span>{" "}
          <a
            href="https://alex-rossignol.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="name"
          >
            Alex Rossignol Developer
          </a>{" "}
          -- 2024 --
        </p>
      </div>
    </footer>
  );
}
