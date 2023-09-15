import dynamic from "next/dynamic";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { userSelectedThemeContext } from "@/context/userSelectedThemeContext";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Link from "next/link";
import Seo from "@/components/Seo";
import ConnectWithMe from "@/components/ConnectWithMe";

const ContactForm = dynamic(() => import("@/components/home/ContactForm"));
const HomePageProjects = dynamic(
  () =>
    import(
      "@/components/projects-view/home-page-projects/HomePageProjectsCrousel"
    )
);
const TypedQuotes = dynamic(() => import("@/components/home/TypedQuotes"), {
  ssr: false,
});
const GradientOutlineButton = dynamic(
  () => import("@/components/buttons/GradientOutlineButton"),
  { ssr: false }
);
const ParticlesContainerBrain = dynamic(
  () => import("@/components/particles/ParticlesContainerBrain"),
  { ssr: false }
);
const CircuitBoard = dynamic(
  () => import("@/components/patterns/CircuitBoard"),
  { ssr: false }
);
const MatrixRainAnimation = dynamic(
  () => import("@/components/MatrixRainAnimation"),
  { ssr: false }
);

export default function Home() {
  const { ref, inView } = useInView();
  const { setTheme } = useTheme();
  const { selectedTheme } = useContext(userSelectedThemeContext);
  const projectsSection = useRef<any>(null);
  const contactSection = useRef(null);

  useEffect(() => {
    if (inView) {
      setTheme("dark");
    } else {
      if (selectedTheme) {
        setTheme(selectedTheme);
      }
    }
  }, [inView]);

  const Resourcers = () => {
    const resources = [
      {
        name: "Resume",
        icon: <AcademicCapIcon className="h-4 w-4" />,
        href: "https://drive.google.com/file/d/1dHBmv2yTU4zWminXn1Sw-p1PZ1WZk8yA/view?usp=drive_link",
      },
    ];

    return resources.map((resource) => (
      <Link
        key={resource.name}
        target="_blank"
        href={resource.href}
        className=" text-lg relative w-fit flex flex-row items-center content-center gap-1 mt-2 text-gray-400 hover:text-gray-500 hover:dark:text-gray-300"
      >
        {resource.icon}
        <span>{resource.name}</span>
      </Link>
    ));
  };

  const NextSection = ({ section }: { section: string }) => {
    const scrollTo = () => {
      const ref =
        section === "projectsSection" ? projectsSection : contactSection;
      if (ref) {
        ref?.current?.scrollIntoView({ behavior: "smooth", TimeRanges: 2000 });
      } else {
        window.scroll({
          behavior: "smooth",
          top: document.body.scrollHeight,
          left: 0,
        });
      }
    };

    return (
      <div onClick={scrollTo}>
        <BsFillArrowDownCircleFill className="animate-bounce w-6 h-6 absolute bottom-10 left-[50%] cursor-pointer" />
      </div>
    );
  };

  return (
    <Layout>
      <Seo />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5 }}
      >
        <section className="min-h-[calc(100vh_-_76px)] flex flex-col justify-center ">
          <ParticlesContainerBrain id="tsparticles" />
          <div className="layout ">
            <div className="flex flex-col items-start gap-2">
              <TypedQuotes className="absolute top-10 left-[50%] transform translate-x-[-50%]" />
              <h2 className="text-2xl md:text-4xl 2xl:text-5xl">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
              <h1 className="text-3xl md:text-5xl 2xl:text-6xl">
                My name is <span className="text-primary-color">Nadav</span>
              </h1>
              <p className="max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl">
                I work with react/vue ecosystem and nodejs on server side <br />{" "}
                I love to learn new tech and experience new challangers
              </p>
              <div className="relative">
                <Link href={"/about"}>
                  <GradientOutlineButton>About me</GradientOutlineButton>
                </Link>
              </div>
              <Resourcers />
              {/* <ConnectWithMe size="md" /> */}
            </div>
            <Image
              className="rounded-full absolute h-[100px] w-[100px] right-5 top-28 sm:right-10 sm:top-80 sm:h-[200px] sm:w-[200px] md:right-32 md:top-48 md:h-[250px] md:w-[250px]"
              src="/man_creating_metaverse.png"
              alt="man using a laptop to create a metaverse"
              width={250}
              height={250}
            />
          </div>
        </section>
        <NextSection section="projectsSection" />
      </motion.div>
      <CircuitBoard primary="black" secondary="purple" />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4 }}
        ref={projectsSection}
      >
        <section className="min-h-[screen] flex relative py-20">
          <div className="layout flex flex-col">
            <p className="h2 mb-4">Projects:</p>
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <HomePageProjects />
            </div>
          </div>
        </section>
        <NextSection section="contactSection" />
      </motion.div>
      <CircuitBoard primary="black" secondary="purple" />

      <section ref={contactSection} className="min-h-[75vh] flex relative">
        {inView && <MatrixRainAnimation />}
        <div className="layout flex items-center justify-center z-10 mt-14 ">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
