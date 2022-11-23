import {HStack} from "@chakra-ui/react"

import { DiHtml5, DiCss3, DiSass, DiMaterializecss } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
   SiPhp,
   SiJavascript,
   SiJquery,
   SiPrisma,
   SiExpo,
   SiTailwindcss,
   SiVite,
   SiChakraui,
   SiNextdotjs,
   SiTypescript,
   SiExpress,
   SiFirebase
} from "react-icons/si"

export const PORTFOLIO = [
   {
      image: "/images/acupuntura.jpg",
      title: "Clínica",
      name: "Acupuntura",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <SiPhp color="var(--blue-300)" />
            <DiSass color="var(--sass)" />
            <SiJavascript color="var(--javascript)"/>
            <SiJquery color="var(--blue-300)"/>
            <BsBootstrapFill color="var(--bootstrap)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      live: "Live Preview",
      link: "https://draacupuntura.000webhostapp.com/"
   },
   {
      image: "/images/serralheria.png",
      title: "Serralheria",
      name: "Karson",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <FaReact color="var(--react)" />
            <SiJavascript color="var(--javascript)"/>
            <DiSass color="var(--sass)" />
            <BsBootstrapFill color="var(--bootstrap)"/>
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      live: "Live Preview",
      link: "https://serralheriakarson.vercel.app"

   },
   {
      image: "/images/orchids.png",
      title: "Orquidário",
      name: "Iara",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize={{xs: "2rem", md: "2.5rem"}}>
             <SiVite color="var(--vite)" />
            <FaReact color="var(--react)" />
            <SiTypescript color="var(--typescript)" />
            <SiChakraui color="var(--chakra)" />
            <DiSass color="var(--sass)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/app_orchids",
      live: "Live Preview",
      link: "https://orquidario.vercel.app/"
   },
   {
      image: "/images/fiqlimp.png",
      title: "Fiq Limp",
      name: "Clear",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <SiVite color="var(--vite)" />
            <FaReact color="var(--react)" />
            <SiTypescript color="var(--typescript)" />
            <SiChakraui color="var(--chakra)" />
            <DiSass color="var(--sass)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/app_clear",
      live: "Live Preview",
      link: "https://fiq-limp.netlify.app/"
   },
   {
      image: "/images/pokedex.png",
      title: "Web",
      name: "Pokedex",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <FaReact color="var(--react)" />
            <SiChakraui color="var(--chakra)" />
            <SiNextdotjs color="var(--black)" />
            <SiTypescript color="var(--typescript)" />
            <DiSass color="var(--sass)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/pokedex__next",
      live: "Live Preview",
      link: "https://pokedexweb.vercel.app/"
   },
   {
      image: "/images/podcastnext.png",
      title: "NLW 5",
      name: "Podcastr",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <FaReact color="var(--react)" />
            <SiTypescript color="var(--typescript)" />
            <SiNextdotjs color="var(--black)" />
            <DiSass color="var(--sass)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/podcastrnext",
      live: "Live Preview",
   },
   {
      image: "/images/gourmet.png",
      title: "Candys",
      name: "Gourmet",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize={{xs: "2rem", md: "2.5rem"}}>
             <SiVite color="var(--vite)" />
            <FaReact color="var(--react)" />
            <SiTypescript color="var(--typescript)" />
            <SiChakraui color="var(--chakra)" />
            <DiSass color="var(--sass)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/app_gourmet",
      live: "Live Preview",
      link: "https://rosegourmet.vercel.app/"
   },
   {
      image: "/images/esports.png",
      title: "NLW",
      name: "eSports",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize={{xs: "2rem", md: "2.5rem"}}>
            <SiVite color="var(--vite)" />
            <FaReact color="var(--react)" />
            <SiTypescript color="var(--typescript)" />
            <SiTailwindcss color="var(--blue-300)" />
            <FaNodeJs color="var(--green-10)" />
            <SiExpo color="var(--gray-700)" />
            <SiPrisma color="var(--blue-900)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/nlw_esports_ignite",
      live: "Live Preview",
   },
   {
      image: "/images/doctorcare.png",
      title: "Doctor",
      name: "Care",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <DiHtml5 color="var(--html)" />
            <DiCss3 color="var(--blue-300)" />
            <SiJavascript color="var(--javascript)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/webdoctorcare",
      live: "Live Preview",
      link: "https://pauloweslley.github.io/webdoctorcare/"

   },
   {
      image: "/images/beautysalon.png",
      title: "Beauty",
      name: "Salon",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <DiHtml5 color="var(--html)" />
            <DiCss3 color="var(--blue-300)" />
            <SiJavascript color="var(--javascript)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/prejeto-Origin-nlw",
      live: "Live Preview",
      link: "https://web-origin-six.netlify.app/"
   },
   {
      image: "/images/assistencia.png",
      title: "Assistência",
      name: "Tecnica",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <DiHtml5 color="var(--html)" />
            <DiCss3 color="var(--blue-300)" />
            <SiJavascript color="var(--javascript)" />
            <DiMaterializecss color="var(--materialize)"/>
            <SiJquery color="var(--blue-300)"/>
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/ass_tecnica",
      live: "Live Preview",
      link: "https://assistencia-tecnica.netlify.app"
   },
   {
      image: "/images/pontocursos.png",
      title: "Ponto",
      name: "Com",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <DiHtml5 color="var(--html)" />
            <DiCss3 color="var(--blue-300)" />
            <SiJavascript color="var(--javascript)" />
            <BsBootstrapFill color="var(--bootstrap)"/>
            <SiJquery color="var(--blue-300)"/>
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      github: "https://github.com/pauloWeslleY/pontoscursos",
      live: "Live Preview",
      link: "https://ponto-cursos.netlify.app/"
   },
   {
      image: "/images/website.png",
      title: "My",
      name: "Portfólio",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <FaReact color="var(--react)" />
            <SiJavascript color="var(--javascript)" />
            <SiChakraui color="var(--chakra)" />
            <DiSass color="var(--sass)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      live: "Live Preview",
      link: "https://weslleylima.vercel.app"
   },
   {
      image: "/images/portfolio.png",
      title: "My",
      name: "WebSite",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <SiVite color="var(--vite)" />
            <FaReact color="var(--react)" />
            <DiSass color="var(--sass)" />
            <SiJavascript color="var(--javascript)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      live: "Live Preview",
      link: "https://weslleywebdeveloper.vercel.app"
   },
   {
      image: "https://camo.githubusercontent.com/1994b4521e0baafc06a1b96b4bef280448330e5d062e9f108e35f73bcde148b8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f68636f64652d636f6d2d62722e61707073706f742e636f6d2f6f2f44726f70426f78436c6f6e652e6a70673f616c743d6d6564696126746f6b656e3d64353963616430632d343430642d343531362d383866322d646139303462396262343433",
      title: "Dropbox",
      name: "Clone",
      tech: "Tecnologias Utilizadas",
      techlist: (
         <HStack fontSize="2.5rem">
            <DiCss3 color="var(--blue-300)" />
            <SiJavascript color="var(--javascript)" />
            <FaNodeJs color="var(--green-10)" />
            <SiExpress color="var(--black)" />
            <SiFirebase color="var(--firebase)" />
            <FaGitAlt color="var(--git)"/>
         </HStack>
      ),
      git: "GitHub",
      live: "Live Preview",
      link: "https://weslleywebdeveloper.vercel.app"
   },
]
