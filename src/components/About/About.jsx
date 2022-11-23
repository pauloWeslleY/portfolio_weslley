import { memo } from "react";
import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import {
   AboutContent,
   AboutProfile,
   HeadTitle,
   Wrapper,
   ABOUT,
   ScrollReveal,
   useColors,
} from "./index";

import styles from "./About.module.scss";

export const About = ({ title }) => {
   const { THEME } = useColors();
   const [isNotSmallerScreen] = useMediaQuery("min-width:(600px)");

   return (
      <Container maxW={"1545px"}>
         <Flex
            id={"about"}
            className={styles.hero__about}
            direction={isNotSmallerScreen ? "row" : "column"}
         >
            <ScrollReveal>
               <HeadTitle title={title} />
            </ScrollReveal>
            <Wrapper>
               <ScrollReveal>
                  <Flex
                     bg={THEME.BG_PAGE_SECTION}
                     py={4}
                     px={4}
                     shadow={"xl"}
                     rounded={"lg"}
                     flexWrap={"wrap"}
                     flexDirection={"row"}
                  >
                     <AboutContent
                        name={ABOUT.name}
                        img={ABOUT.avatar}
                        description={ABOUT.description1}
                        description2={ABOUT.description2}
                        description3={ABOUT.description3}
                     />

                     <AboutProfile
                        name={ABOUT.name}
                        title={ABOUT.title}
                        img={ABOUT.image}
                        job={ABOUT.job}
                     />
                  </Flex>
               </ScrollReveal>
            </Wrapper>
         </Flex>
      </Container>
   );
};

export default memo(About);
