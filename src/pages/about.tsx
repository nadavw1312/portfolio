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
      <main className="min-h-main relative">
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
                There are a lot of things and technologies to learn in frontend
                and backend development and I am motivated to learn as much as
                possible.
                <br /> I enjoy learning something new and getting feedback to
                make myself better and improve.
                <br />I have gained{" "}
                <span className="key-words">3 years of experience</span> working
                in a company in Israel as a FullStack Developer, developing web
                apps dashboard and websites.
              </p>
              <p data-fade="6">
                When I'm not busy scribbling code, I like to keep things
                interesting by playing video games, doing sport like tennis,
                football and basketball, and sometimes surfing, oh and ofc
                watching movies and series.
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
