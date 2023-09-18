import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const ConnectWithMe = () => {
  const SendEmail = () => {
    const email = "nadavw1999@gmail.com";
    const subject = "Job offer";
    const emailBody = "Hi Nadav, I would like to offer you a job.";
    document.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  };

  return (
    <div className={cn("flex flex-row items-center justify-center gap-4")}>
      <Link
        aria-labelledby="linkedin"
        href="https://www.linkedin.com/in/nadav-bourla-801220184/"
        target="blank"
      >
        <SiLinkedin className=" h-4 w-4 sm:h-6 sm:w-6 dark:text-primary-color" />
      </Link>
      <Link
        aria-labelledby="github"
        href="https://github.com/nadavw1312"
        target="blank "
      >
        <SiGithub className=" h-4 w-4 sm:h-6 sm:w-6 dark:text-primary-color" />
      </Link>
      {/* <Link aria-labelledby="whatsapp" href={whatsappUrl} target="blank">
        <SiWhatsapp className=" h-4 w-4 sm:h-6 sm:w-6 dark:text-primary-color" />
      </Link> */}
      <div onClick={SendEmail} className=" cursor-pointer">
        <MdOutgoingMail className=" h-4 w-4 sm:h-6 sm:w-6 dark:text-primary-color" />
      </div>
    </div>
  );
};
export default ConnectWithMe;
