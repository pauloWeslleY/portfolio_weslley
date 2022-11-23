import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { useColors } from "./index";

import styles from "./About.module.scss";

export const AboutParagraph = ({ content }) => {
   const { THEME } = useColors();
   return (
      <Box
         className={styles.hero__describe}
         mt={2}
         fontSize={"2rem"}
         color={THEME.ABOUT_CONTENT_TEXT_COLORS}
      >
         {content}
      </Box>
   );
};

export default memo(AboutParagraph);
