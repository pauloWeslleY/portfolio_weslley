import { memo } from "react";
import { Box, chakra } from "@chakra-ui/react";

export const ContactItem = ({ title, name, icon }) => {
   return (
      <section>
         <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={"4xl"}
            fontWeight={"bold"}
            gap={4}
            pt={"1rem"}
            pb={"1.1rem"}
         >
            {icon} <chakra.h3>{title}</chakra.h3>
         </Box>
         <chakra.p
            fontSize={{
               base: "2.5rem",
               xs: "1.4rem",
               sm: "1.5rem",
               lg: "2rem",
            }}
            textAlign={"center"}
         >
            {name}
         </chakra.p>
      </section>
   );
};

export default memo(ContactItem);
