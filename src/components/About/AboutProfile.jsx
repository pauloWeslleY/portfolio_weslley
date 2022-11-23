import { memo } from "react";
import { Box, chakra, Flex } from "@chakra-ui/react";
import { useColors } from "./index";

export const AboutProfile = ({ img, job, title }) => {
   const { THEME } = useColors();

   return (
      <Flex
         direction={"column"}
         justifyContent={"center"}
         alignItems={"center"}
         mx={8}
         my={5}
         flexBasis={"20px"}
         flexGrow={2}
         flexShrink={1}
         w={{ xs: "50%" }}
      >
         <Box
            bg={"gray.300"}
            h={"35rem"}
            w={"full"}
            rounded={"lg"}
            shadow={"md"}
            bgSize={"cover"}
            bgPos={"center"}
            style={{
               backgroundImage: `url(${img})`,
            }}
         ></Box>
         <Box
            w={{
               base: "25rem",
               md: "20rem",
            }}
            bg={THEME.ABOUT_PROFILE_BG}
            mt={-10}
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
         >
            <chakra.h3
               py={2}
               fontWeight={"bold"}
               textAlign={"center"}
               textTransform={"uppercase"}
               letterSpacing={1}
               color={THEME.ABOUT_PROFILE_TITLES_COLORS}
            >
               {title}
            </chakra.h3>
            <Flex
               bg={THEME.ABOUT_PROFILE_BG_CONTAINER_TITLES}
               alignItems={"center"}
               justifyContent={"center"}
               py={2}
               px={3}
            >
               <chakra.span
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={THEME.ABOUT_PROFILE_TITLE_COLORS}
               >
                  {job}
               </chakra.span>
            </Flex>
         </Box>
      </Flex>
   );
};

export default memo(AboutProfile);
