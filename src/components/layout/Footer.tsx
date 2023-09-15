import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import ConnectWithMe from "../ConnectWithMe";

const Footer = () => {
  const whatsappUrl =
    "https://wa.me/972544598264?text=I'm%20interested%20in%20your%20car%20for%20sale";

  const SendEmail = () => {
    const email = "nadavw1999@gmail.com";
    const subject = "Job offer";
    const emailBody = "Hi Nadav, I would like to offer you a job.";
    document.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  };

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
            href="https://github.com/iamhiman/personal-portfolio-website"
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
