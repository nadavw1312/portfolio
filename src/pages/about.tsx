/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import Seo from "@/components/Seo";
import dynamic from "next/dynamic";

const AboutSkillset = dynamic(
  () => import("@/components/about/AboutSkillset"),
  {
    ssr: false,
  }
);

const About = () => {
  const isLoaded = useLoaded();

  const MeDsiaply = () => {
    return (
      <pre className="about-code self-center h3 sm:h1 z-10 " data-fade="1">
        <span className="code-info">const </span>
        <span className="string-highlight">{"Developer "}</span>

        <span className="code-input">{"= {"}</span>
        <div className=" ml-16 flex flex-col ">
          <div className="flex flex-row gap-2 whitespace-nowrap">
            <span className="code-input">{"name: "}</span>
            <span className="code-data">"Nadav Bourla"</span>
            <span className="code-input">,</span>
          </div>
          <div className="flex flex-row gap-2">
            <span className="code-input">type: </span>
            <span className="code-data">"Software Developer"</span>
          </div>
        </div>
        <span className="code-input">{"};"}</span>
      </pre>
    );
  };

  return (
    <Layout>
      <Seo
        templateTitle="About"
        description="Nadav Bourla is a full-stack developer with 3 years of experience. He is passionate about writing clean, efficient and optimized code."
      />
      <main className="min-h-header relative">
        <section className={clsx(isLoaded && "fade-in-start", "flex flex-col")}>
          <MeDsiaply />
          <div className="layout  z-10 relative m-auto">
            <div className="float-right">
              <div
                className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
                data-fade="2"
              >
                <Image
                  src={"/man-monitors.webp"}
                  alt="Me matrix style"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="text-lg " data-fade="3">
              <p className=" text-md" data-fade="4">
                My name is <span className="key-words">Nadav</span> and I am a{" "}
                <span className="key-words">Full Stack developer</span>,
                passionate about writing clean, efficient and optimized code.
                <br /> Professionally, I have been in the field since 2019 but i
                into programming since middle School. <br /> I am a self-taught
                developer with computer science background.
              </p>
              <p className="my-10" data-fade="5">
                Frontend and backend development encompass a wide array of
                technologies, and I'm highly driven to expand my knowledge
                across both domains. I thrive on the process of continuous
                learning, actively seeking new challenges, and using feedback to
                refine my skills and grow. With{" "}
                <span className="key-words">
                  three years of professional experience
                </span>{" "}
                as a FullStack Developer at WeDev company, I've had the
                opportunity to work on web apps, dashboards, and websites,
                contributing to my well-rounded skill set.
              </p>
              <p data-fade="6">
                When I'm not engrossed in coding, I enjoy adding some excitement
                to my life by engaging in activities such as playing video
                games, participating in sports like tennis, football, and
                basketball, surfing, and watching movies and series.
              </p>
            </div>
            <div className="mt-10">
              <AboutSkillset />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default About;
