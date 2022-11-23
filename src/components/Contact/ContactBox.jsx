import { memo } from "react";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

function CardContact({ icon, name, label }) {
   return (
      <Flex
         direction={"column"}
         align={"center"}
         basis={"15rem"}
         grow={1}
         shrink={1}
         m={"1rem"}
         rounded={"lg"}
         boxShadow={"md"}
         p={6}
         textAlign={"center"}
      >
         <Icon as={icon} w={10} h={10} mb={4} />
         <Heading
            fontSize={{ base: "smaller", sm: "2rem" }}
            fontFamily={"body"}
            mb={"0.9rem"}
         >
            {name}
         </Heading>
         <Text
            as={"span"}
            fontSize={{ base: "smaller", sm: "1.7rem" }}
            fontFamily={"body"}
            fontWeight={500}
         >
            {label}
         </Text>
      </Flex>
   );
}

export function ContactBox() {
   const CARDS = [
      {
         id: 1,
         name: "Telefone",
         label: "(+55) 11 95948-5618",
         icon: BsTelephone,
      },
      {
         id: 2,
         name: "Email",
         label: "weslleywebdesign13@gmail.com",
         icon: HiOutlineMail,
      },
   ];

   return (
      <section>
         <Flex flexWrap={"wrap"} w={{ base: "100%", lg: "90rem" }}>
            {CARDS.map((item) => (
               <CardContact
                  key={item.id}
                  name={item.name}
                  label={item.label}
                  icon={item.icon}
               />
            ))}
         </Flex>
      </section>
   );
}

export default memo(ContactBox);
