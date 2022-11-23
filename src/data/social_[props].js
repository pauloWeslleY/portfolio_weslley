import { FiInstagram, FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa"

//? Icons Props Pages
export const SOCIAL_ICONS = [
   {
      id: 1,
      name: "Ícone do Instagram",
      icons: <FiInstagram />,
      back_ground: "insta",
      link: "https://www.instagram.com/weslley.lima_13/",
   },
   {
      id: 2,
      name: "Ícone do Email",
      icons: <FiMail />,
      back_ground: "red.200",
      link: "https://mailto:weslleywebdesign13@gmail.com",
   },
   {
      id: 3,
      name: "Ícone do Linkedin",
      icons: <FaLinkedinIn />,
      back_ground: "blue.300",
      link: "https://www.linkedin.com/in/paulo-weslley-de-lima-firmino-17851a17b/",
   },
   {
      id: 4,
      name: "Ícone do Github",
      icons: <BsGithub />,
      back_ground: "gray.600",
      link: "https://github.com/pauloWeslleY/",
   },
];
