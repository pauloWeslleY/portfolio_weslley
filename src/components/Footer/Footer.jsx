import { memo } from "react";
import { Flex, chakra, Text, Container } from "@chakra-ui/react";

import { FooterIcon, useColors } from "./index";

import styles from "./Footer.module.scss";

export const Footer = ({ title_footer, name_link, subtitle_footer }) => {
   const linkedin =
      "https://www.linkedin.com/in/paulo-weslley-de-lima-firmino-17851a17b/";
   const { THEME } = useColors();

   return (
      <footer className={styles.footer__hero}>
         <Container maxW={"container.xl"}>
            <Flex
               flexDir={{
                  base: "column",
                  sm: "row",
               }}
               as={"footer"}
               alignItems={"center"}
               justify={"space-around"}
            >
               <Flex
                  basis={"7rem"}
                  flexGrow={1}
                  flexShrink={1}
                  align={"center"}
                  justify={"center"}
               >
                  <chakra.p
                     fontSize={"xl"}
                     fontWeight={"extrabold"}
                     letterSpacing={"0.03rem"}
                     color={THEME.FOOTER_TEXT_COLOR_LIGHT}
                     _dark={{
                        color: THEME.FOOTER_TEXT_COLOR_DARK,
                     }}
                  >
                     {title_footer}{" "}
                     <chakra.a
                        p={"0.3rem"}
                        href={linkedin}
                        color={THEME.FOOTER_LINK_COLOR_LIGHT}
                        _dark={{
                           color: THEME.FOOTER_LINK_COLOR_DARK,
                           _hover: {
                              color: THEME.FOOTER_LINK_COLOR_DARK_HOVER,
                           },
                        }}
                        transition={"all 0.5s ease-in-out"}
                        _hover={{
                           color: THEME.FOOTER_LINK_COLOR_DARK,
                           transform: "translateY(-2px)",
                           boxShadow: "dark-lg",
                        }}
                     >
                        {name_link}
                     </chakra.a>
                  </chakra.p>
               </Flex>
               <Flex
                  basis={"7rem"}
                  flexGrow={1}
                  flexShrink={1}
                  align={"center"}
                  justify={"center"}
                  p={4}
               >
                  <FooterIcon />
               </Flex>
               <Flex
                  basis={"7rem"}
                  flexGrow={1}
                  flexShrink={1}
                  align={"center"}
                  justify={"center"}
               >
                  <Text
                     as={"span"}
                     textAlign={"center"}
                     fontSize={{ base: "smaller", sm: "1.3rem" }}
                  >
                     {subtitle_footer}
                  </Text>
               </Flex>
            </Flex>
         </Container>
      </footer>
   );
};

export default memo(Footer);
