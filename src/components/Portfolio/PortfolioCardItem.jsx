import { memo } from "react";
import {
   Box,
   Heading,
   Text,
   Stack,
   Image,
   Flex,
   Link,
   useDisclosure,
   chakra,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import { PortfolioModal, Btn, useColors } from "./index";

export function PortfolioCardItem({
   image,
   title,
   name,
   tech,
   techlist,
   git,
   github,
   livePreview,
   link,
}) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { THEME } = useColors();

   return (
      <Flex
         direction={"column"}
         flex={1}
         basis={"10rem"}
         bg={THEME.PORTFOLIO_BG_CARDS}
         role={"group"}
         m={2}
         p={5}
         boxShadow={"2xl"}
         rounded={"lg"}
         pos={"relative"}
         zIndex={1}
         transition={"all 0.6s ease-in-out"}
         _hover={{
            transform: "translateY(-6px)",
         }}
      >
         <Box
            align={"center"}
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"23rem"}
            _after={{
               transition: "all .3s ease-in",
               content: '""',
               w: "full",
               h: "full",
               pos: "absolute",
               top: 5,
               left: 0,
               backgroundImage: `url(${image})`,
               filter: "blur(15px)",
               zIndex: -1,
            }}
            _groupHover={{
               _after: {
                  filter: "blur(20px)",
               },
            }}
         >
            <Link onClick={onOpen}>
               <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={image}
               />
            </Link>
         </Box>
         <Stack pt={10} align={"center"}>
            <Text
               color={THEME.PORTFOLIO_SPAN_COLOR}
               fontSize={"1.5rem"}
               textTransform={"uppercase"}
            >
               {title}
            </Text>
            <Heading fontSize={"2.1rem"} fontFamily={"body"} fontWeight={500}>
               {name}
            </Heading>
            <chakra.p
               mt={1}
               fontSize={"1.5rem"}
               color={THEME.PORTFOLIO_PARAGRAPH_COLOR}
            >
               {tech}
            </chakra.p>
            <Box>{techlist}</Box>
            <Flex
               alignItems={"center"}
               justifyContent={"center"}
               gap={2}
               px={4}
               py={2}
            >
               <Btn name={livePreview} link={link} icon={<BiLinkExternal />} />
               <Btn name={git} link={github} icon={<BsGithub />} />
            </Flex>
            <PortfolioModal
               title={"Pré visualização do Site."}
               image={
                  <Image
                     w={"full"}
                     fit={"cover"}
                     my={2}
                     src={image}
                     alt={name}
                  />
               }
               modal_theme={THEME.PORTFOLIO_BG_MODAL}
               isOpen={isOpen}
               onClose={onClose}
            />
         </Stack>
      </Flex>
   );
}

export default memo(PortfolioCardItem);
