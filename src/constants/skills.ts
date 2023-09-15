import { IconType } from "react-icons";
import {
  SiReact,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiLinux,
  SiSass,
} from "react-icons/si";

const skills = {
  React: "React",
  Vue: "Vue",
  Nuxt: "Nuxt",
  Nextjs: "Nextjs",
  TypeScript: "TypeScript",
  JavaScript: "JavaScript",
  NodeJS: "NodeJS",
  Express: "Express",
  AWS: "AWS",
  MongoDB: "MongoDB",
  SQL: "SQL",
  Tailwindcss: "Tailwindcss",
  Git: "Git",
  Linux: "Linux",
  Sass: "Sass",
};

const skillIcons: { [key: string]: IconType } = {
  React: SiReact,
  Vue: SiVuedotjs,
  Nuxt: SiNuxtdotjs,
  Nextjs: SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  NodeJS: SiNodedotjs,
  Express: SiExpress,
  AWS: SiAmazonaws,
  MongoDB: SiMongodb,
  SQL: SiMysql,
  Tailwindcss: SiTailwindcss,
  Git: SiGit,
  Linux: SiLinux,
  Sass: SiSass,
};

const mainSkillIcons = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  Vue: SiVuedotjs,
  NodeJS: SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Git: SiGit,
  Sass: SiSass,
};

export { skillIcons, skills, mainSkillIcons };
