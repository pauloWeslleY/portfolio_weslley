import { memo } from "react";
import {
   Flex,
   Heading,
   IconButton,
   Spacer,
   useColorMode,
   useColorModeValue,
   VStack,
} from "@chakra-ui/react";
import {
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaSun,
   FaMoon,
} from "react-icons/fa";

export const NavMenu = ({ title }) => {
   const { colorMode, toggleColorMode } = useColorMode();
   const isDark = colorMode === "dark";
   const title_colors = useColorModeValue("blue.600", "blue.100");

   const iconProps = [
      {
         id: 1,
         name: "Icone do Linkedin",
         color: "blue.300",
         icon: <FaLinkedin />,
         link: "https://www.linkedin.com/in/paulo-weslley-de-lima-firmino-17851a17b/",
      },
      {
         id: 2,
         name: "Icone do instagram",
         color: "red.200",
         icon: <FaInstagram />,
         link: "https://www.instagram.com/weslley.lima_13/",
      },
      {
         id: 3,
         name: "Icone do GitHub",
         color: "gray.600",
         icon: <FaGithub />,
         link: "https://github.com/pauloWeslleY/",
      },
   ];

   const getIconBtn = () =>
      iconProps.map(({ id, name, color, link, icon }) => {
         return (
            <IconButton
               key={id}
               textAlign={"center"}
               arial-label={name}
               color={color}
               icon={icon}
               isRound={true}
               onClick={() => window.open(link)}
               mx={1}
               fontSize={16}
               variant={"ghost"}
               size={"lg"}
               transition={"all 0.5s ease-in"}
               _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "dark-lg",
               }}
            />
         );
      });

   return (
      <VStack p={5}>
         <Flex w={"100%"} alignItems={"center"}>
            <Heading
               ml={"8"}
               size={"md"}
               fontWeight={"semibold"}
               color={title_colors}
               _dark={{
                  color: "blue.100",
               }}
            >
               {title}
            </Heading>
            <Spacer></Spacer>
            {getIconBtn()}
            <IconButton
               aria-label={"Icone que mudar as cores da Página"}
               ml={8}
               icon={isDark ? <FaSun /> : <FaMoon />}
               isRound={true}
               onClick={toggleColorMode}
               variant={"ghost"}
               size={"lg"}
               fontSize={15}
               transition={"all 0.5s ease-in"}
               _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "dark-lg",
               }}
            />
         </Flex>
      </VStack>
   );
};

export default memo(NavMenu);
