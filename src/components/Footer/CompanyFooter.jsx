import { memo } from "react";
import { Text, VStack } from "@chakra-ui/react";

export const CompanyFooter = ({ title }) => {
   return (
      <VStack py={3}>
         <Text as={"span"} textAlign={"center"} fontSize={"smaller"}>
            {title}
         </Text>
      </VStack>
   );
};

export default memo(CompanyFooter);
