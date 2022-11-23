import { DiCss3, DiMaterializecss } from "react-icons/di";
import { SiJavascript, SiChakraui, SiTypescript, SiNextdotjs} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaReact, FaGitAlt, FaHtml5, FaSass } from "react-icons/fa";

export const SKILLS = [
   {
      name: "HTML5",
      icons: <FaHtml5 />,
      color: "var(--html)",
      border: "var(--gray-900)",
      description: "HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
      experience: "Tempo de experiência: 2 ano"
   },
   {
      name: "CSS3",
      icons: <DiCss3 />,
      color: "var(--css)",
      border: "var(--gray-900)",
      description: "CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.",
      experience: "Tempo de experiência: 2 ano"
   },
   {
      name: "JavaScript",
      icons: <SiJavascript />,
      color: "var(--javascript)",
      border: "var(--gray-900)",
      description: "JavaScript é a linguagem de programação da Web. A ampla maioria dos sites modernos usa JavaScript e todos os navegadores modernos – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript, tornando-a a linguagem de programação mais onipresente da história.",
      experience: "Tempo de experiência: 1 ano"
   },
   {
      name: "Sass/Scss",
      icons: <FaSass />,
      color: "var(--sass)",
      border: "var(--gray-900)",
      description: "O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente",
      experience: "Tempo de experiência: 1 ano"
   },
   {
      name: "Bootstrap",
      icons: <BsBootstrap />,
      color: "var(--bootstrap)",
      border: "var(--gray-900)",
      description: "O Bootstrap é uma ferramenta gratuita para desenvolvimento HTML, CSS e JS. Crie protótipos rápidamente ou aplicações completas com nossas variáveis e mixins Sass, sistemas de grid responsivo, componentes pré-construídos e poderosos plugins com jQuery.",
      experience: "Tempo de experiência: 2 ano"
   },
   {
      name: "Materialize",
      icons: <DiMaterializecss />,
      color: "var(--materialize)",
      description: "O Materialize é um Framework desenvolvido para facilitar e agilizar nosso desenvolvimento quando o assunto é Material Design. Além de ágil, possui uma infinidade de vantagens que permitem que na maioria das vezes dispensam o uso de outros frameworks para complementá-lo.",
      experience: "Tempo de experiência: 1 ano"
   },
   {
      name: "Chakra UI",
      icons: <SiChakraui />,
      color: "var(--chakra)",
      description: "Chakra UI é uma biblioteca de componentes moderna para React criada por Segun Adebayo para construir aplicativos front-end. Ele fornece acessibilidade, simplicidade e modularidade, tornando-o uma biblioteca poderosa com mais de 50 componentes.",
      experience: "Tempo de experiência: 5 meses"
   },
   {
      name: "React.Js",
      icons: <FaReact />,
      color: "var(--react)",
      description: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
      experience: "Tempo de experiência: 7 meses"
   },
   {
      name: "Next.Js",
      icons: <SiNextdotjs />,
      color: "var(--next)",
      description: "O Next.js oferece a melhor experiência de desenvolvedor com todos os recursos necessários para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota e muito mais.",
      experience: "Tempo de experiência: 1 meses"
   },
   {
      name: "TypeScript",
      icons: <SiTypescript />,
      color: "var(--typescript)",
      description: "Typescript é uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente. Então esse “superset” foi criado para adicionar recursos de tipagem estáticas à linguagem original.",
      experience: "Tempo de experiência: 4 meses"
   },
   {
      name: "Git",
      icons: <FaGitAlt />,
      color: "var(--git)",
      description: "Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos",
      experience: "Tempo de experiência: 6 meses"
   },
];
