import { skills } from "./skills";

export interface Project {
  title: string;
  description: string;
  associated: string[];
  skills: string[];
  link: string;
  imageSrc: string;
}

const projects = [
  {
    title: "Dashboard and web app for municipalities",
    description: "Dashboard and Web app that let municipal employees manage features and data Intended for citizens.",
    associated: ["Associated with WeDev"],
    skills: [skills.Vue, skills.TypeScript,skills.Python, skills.MongoDB, skills.AWS],
    link: "https://shituf.tel-aviv.gov.il/#/",
    imageSrc: "/tel-aviv-project.webp",
    showOnHomePage: true,
  },
  {
    title: "Tasa candies store",
    description: "Online store for candies, with admin panel for managing products, orders and customers.",
    associated: ["Associated with WeDev"],
    skills: [skills.Nuxt, skills.TypeScript, skills.MongoDB, skills.AWS],
    link: "https://online.tasa.co.il/",
    imageSrc: "/tasa-candies-project.webp",
    showOnHomePage: true,
  },
  // {
  //   title: "Favorite Locations",
  //   description: "Manage your favorite locations",
  //   associated: [],
  //   skills: [skills.React, skills.TypeScript, skills.Python, skills.FastApi, skills.PostgreSql],
  //   link: "https://my-locations-client.onrender.com/",
  //   imageSrc: "/favorite_locations.webp",
  //   showOnHomePage: true,
  // },
  {
    title: "Manage Books",
    description: "Manage books and their authors",
    associated: [],
    skills: [skills.React, skills.TypeScript, skills.NodeJS, skills.Express, skills.MongoDB],
    link: "https://book-view.onrender.com/",
    imageSrc: "/book-view.webp",
    showOnHomePage: true,
  },
  {
    title: "Crypto Market",
    description: "Showing cryptocurrencies and their prices",
    associated: [],
    skills: [skills.Nextjs, skills.TypeScript, skills.Tailwindcss],
    link: "https://crypto-market-bice.vercel.app/",
    imageSrc: "/crypto-market.webp",
    showOnHomePage: false,
  },
];

export default projects;
