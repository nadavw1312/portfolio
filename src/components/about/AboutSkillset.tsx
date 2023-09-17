import { mainSkillIcons } from "@/constants/skills";
import SkillIcon from "../SkillIcon";

const AboutSkillset = () => {
  return (
    <div className="text-center ">
      <p className="h2">
        Proffesional <span className="key-words">Skillset</span>
      </p>
      <p className="my-2 text-gray-400 ">
        {
          "if you speak German, it's easier to learn Dutch than it is to learn Mandarin. Similarly, if you know Java, it's easier to learn C# than it is to learn Erlang."
        }
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
  );
};
export default AboutSkillset;
