import { memo } from "react";
import { Flex } from "@chakra-ui/react";

export const Wrapper = ({ children }) => {
   return (
      <Flex
         alignSelf={"flex-end"}
         maxWidth={{
            base: "100%",
            xl: "75%",
         }}
      >
         {children}
      </Flex>
   );
};

export default memo(Wrapper);
