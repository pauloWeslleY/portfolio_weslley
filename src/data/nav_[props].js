import { BsLayers, BsChatQuoteFill } from "react-icons/bs";
import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

//? NavItems Props
export const NAV_ITEMS = [
   {
      id: "home",
      name: "Início",
      icon: <AiFillHome />,
   },
   {
      id: "project",
      name: "Projetos",
      icon: <BsLayers />,
   },
   {
      id: "skills",
      name: "Skills",
      icon: <AiOutlineProject />,
   },
   {
      id: "about",
      name: "Sobre",
      icon: <BsChatQuoteFill />,
   },
   {
      id: "contact",
      name: "Contato",
      icon: <MdContacts />,
   },
];
