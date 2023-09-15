import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

interface ConnectWithMeProps {
  size?: "sm" | "md";
}

const ConnectWithMe = ({ size }: ConnectWithMeProps) => {
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
    <div
      className={cn(
        "flex flex-row gap-4 items-center justify-center relative",
        size === "sm" && "h-4",
        size === "md" && "h-6"
      )}
    >
      <Link
        className="h-full w-full"
        href="https://www.linkedin.com/in/nadav-bourla-801220184/"
        target="blank"
      >
        <SiLinkedin className="h-full w-full dark:text-primary-color" />
      </Link>
      <Link
        className="h-full w-full"
        href="https://github.com/nadavw1312"
        target="blank"
      >
        <SiGithub className="h-full w-full dark:text-primary-color" />
      </Link>
      <Link className="h-full w-full" href={whatsappUrl} target="blank">
        <SiWhatsapp className="h-full w-full dark:text-primary-color" />
      </Link>
      <div onClick={SendEmail} className=" h-full w-full cursor-pointer">
        <MdOutgoingMail className="h-full w-full dark:text-primary-color" />
      </div>
    </div>
  );
};
export default ConnectWithMe;
