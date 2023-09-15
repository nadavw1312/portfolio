import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import ConnectWithMe from "../ConnectWithMe";

const Footer = () => {
  return (
    <footer className=" foorer h-28 flex flex-wrap justify-around items-center">
      <div className="footer-text">
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

      <div className="flex flex-col gap-2">
        <p>Connect With Me!</p>
        <ConnectWithMe size="md" />
      </div>
    </footer>
  );
};
export default Footer;
