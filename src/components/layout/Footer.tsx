import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import ConnectWithMe from "../ConnectWithMe";

const Footer = () => {
  return (
    <footer className=" foorer h-28 flex flex-wrap justify-around items-center p-2">
      <div className="footer-text flex-1 flex items-center justify-center">
        <p>
          No &copy; copyright issues.
          <br />
          Feel free to copy.
          <br />
          This Website is
          <a
            href="https://github.com/nadavw1312/portfolio"
            target="_blank"
            className="open-sourced"
          >
            <span>open sourced</span>
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 flex-1 m-auto">
        <p>Connect With Me!</p>
        <ConnectWithMe size="sm" />
      </div>
    </footer>
  );
};
export default Footer;
