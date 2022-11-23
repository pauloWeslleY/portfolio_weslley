import { memo } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

export const HeadTitle = ({ title, subtitle }) => {
   const { THEME } = useColors();

   return (
      <Flex
         direction={"column"}
         alignSelf={"flex-start"}
         px={[10, 15, 20, 32]}
         py={16}
      >
         <Heading
            fontWeight={"extrabold"}
            color={THEME.PAGE_TITLE_COLORS}
            size={"4xl"}
            as={"h2"}
         >
            {title}
         </Heading>
         <Text
            fontWeight={"semibold"}
            fontSize={"2xl"}
            color={THEME.PAGE_SUBTITLE_COLORS}
            as={"h3"}
         >
            {subtitle}
         </Text>
      </Flex>
   );
};

export default memo(HeadTitle);
