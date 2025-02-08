export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Backend",
    techs: [".Net", "C#"],
    link: "https://github.com/Ali-Sinai/Portfolio_Backend",
  },
  {
    title: "MarketPlace ( full ecommerce learning project )",
    techs: ["C#", ".Net", "Onion Arcitechture", "JavaScript"],
    link: "https://github.com/Ali-Sinai/Market_Place",
  },
  // {
  //   title: "Dictionary App",
  //   techs: ["Next.js", "react-query", "zod"],
  //   link: "https://github.com/MaeWolff/dictionary-app",
  // },
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro", "TypeScript"],
  //   link: "https://github.com/MaeWolff/astro-portfolio-template",
  //   isComingSoon: true,
  // },
];

export default projects;
