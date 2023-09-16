import { Project } from "@/constants/projects";
import { skillIcons } from "@/constants/skills";
import { Card, Image, Link } from "@nextui-org/react";
import React from "react";
import SkillIcon from "../SkillIcon";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  associated,
  skills,
  link,
}: Project) => {
  return (
    <Card className="h-full p-2" isBlurred={false}>
      <Image
        alt="Album cover"
        shadow="md"
        width="100%"
        height="auto"
        src={imageSrc}
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-foreground/90 line-clamp-2">
          {title}
        </h3>
        <p className="text-small text-foreground/80 line-clamp-3">
          {description}
        </p>
        <div>
          {associated.map((associate, index) => (
            <p key={index} className=" text-gray-400">
              {associate}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {skills.map((skill) => (
            <div key={skill}>
              {skillIcons[skill] && <SkillIcon skill={skill} />}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Link
          aria-labelledby="see project"
          isExternal
          href={link}
          showAnchorIcon
          className=" text-primary-color z-20"
        >
          See project
        </Link>
      </div>
    </Card>
  );
};
export default ProjectCard;
