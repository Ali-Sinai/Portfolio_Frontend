type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "alisinai850@gmail.com",
  title: "Hi, I’m Ali Sinai 👋",
  // profile: "/profile.webp",
  description:
    "Hello, my friend 👋 I am a Backend developer with over a year of experience of web development. My primary focus has been .Net core and have toched Angular a little bit :) I love rock music🤘 and watching tv shows is my guilty pleaasure. On my way to learn Node.Js to become an allmighty full-stack developer.",
  socials: [
    {
      label: "../../public/github.png",
      link: "https://github.com/Ali-Sinai",
    },
    {
      label: "../../public/linkedin.png",
      link: "https://linkedin.com/in/ali-sinai-pour",
    },
    {
      label: "../../public/telegram.png",
      link: "https://t.me/Sina_the_s",
    },
    {
      label: "../../public/mobile.png",
      link: "tel:+989104204630"
    }
  ],
};

export default presentation;
