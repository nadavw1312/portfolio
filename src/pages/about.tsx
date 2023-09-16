/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout";
import Image from "next/image";

import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import SkillIcon from "@/components/SkillIcon";
import { mainSkillIcons } from "@/constants/skills";
import Seo from "@/components/Seo";

const About = () => {
  const isLoaded = useLoaded();

  const SendEmail = () => {
    const email = "nadavw1999@gmail.com";
    const subject = "Job offer";
    const emailBody = "Hi Nadav, I would like to offer you a job.";
    document.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  };

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
                  src={"/man-monitors.png"}
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
            <div className="text-center mt-10">
              <p className="h2">
                Proffesional <span className="key-words">Skillset</span>
              </p>
              <p className="my-2 text-gray-400 ">
                if you speak German, it's easier to learn Dutch than it is to
                learn Mandarin. Similarly, if you know Java, it's easier to
                learn C# than it is to learn Erlang.
              </p>
              <div>
                <div className="flex flex-wrap text-center justify-center items-center gap-8 my-4">
                  {Object.keys(mainSkillIcons).map((skill, index) => (
                    <div
                      key={skill}
                      className="w-[7rem] h-[7rem] flex-[0_0_22%] flex  items-center justify-center"
                    >
                      <div className="w-[6rem] h-[6rem] p-2 flex items-center justify-center mx-auto shadow-lg dark:shadow-gray-700 border hover:border-4  dark:border-primary-color">
                        <SkillIcon
                          skill={skill}
                          className="h-8 w-8 sm:h-[3rem] sm:w-[3rem] m-0"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default About;
