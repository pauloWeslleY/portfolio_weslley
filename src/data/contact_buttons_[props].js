import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

//? Buttons Props Pages Contacts
export const CONTACT_BUTTONS = [
   {
      id: 1,
      name_label: "Ícone do Instagram",
      name: "Instagram",
      color: "red.200",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/weslley.lima_13/",
   },
   {
      id: 2,
      name_label: "Ícone do WhatsApp",
      name: "WhatsApp",
      color: "green.50",
      icon: <BsWhatsapp />,
      link: "https://api.whatsapp.com/send?phone=+5511959562790&text=Olá! Deixe uma mensagem, e Entrarei em contato em breve.",
   },
   {
      id: 3,
      name_label: "Ícone do Linkedin",
      name: "Linkedin",
      color: "blue.300",
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/paulo-weslley-de-lima-firmino-17851a17b/",
   },
   {
      id: 4,
      name_label: "Ícone do GitHub",
      name: "GitHub",
      color: "gray.500",
      icon: <BsGithub />,
      link: "https://github.com/pauloWeslleY/",
   },
];
