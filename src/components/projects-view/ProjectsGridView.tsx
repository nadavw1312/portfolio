import projects from "@/constants/projects";
import { skillIcons } from "@/constants/skills";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Link,
} from "@nextui-org/react";
import SkillIcon from "../SkillIcon";

const ProjectsGridView = () => {
  return (
    <div className="flex flex-wrap gap-10 my-10">
      {projects.map((project, i) => (
        <Card
          key={i}
          className="max-w-[100%] sm:max-w-[45%] lg:max-w-[30%] flex flex-col  border-none bg-background/60 dark:bg-default-100/50  hover:scale-105 shadow-lg dark:shadow-slate-800"
          shadow="sm"
        >
          <CardBody className="flex flex-col gap-">
            <h3 className="font-semibold text-foreground/90 ">
              {project.title}
            </h3>
            <p className="text-small text-foreground/80 ">
              {project.description}
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <div>
                {project.associated.map((associate) => (
                  <Chip key={associate} size="sm">
                    {associate}
                  </Chip>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 ">
                {project.skills.map((skill) => (
                  <div key={skill}>
                    {skillIcons[skill] && <SkillIcon skill={skill} />}
                  </div>
                ))}
              </div>
              <Image alt={project.title} src={project.imageSrc} />
            </div>
          </CardBody>
          <CardFooter>
            <Link
              isExternal
              href={project.link}
              showAnchorIcon
              className="mt-auto text-primary-color"
            >
              See project
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default ProjectsGridView;
