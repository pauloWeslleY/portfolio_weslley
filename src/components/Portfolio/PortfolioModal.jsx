import { memo } from "react";
import {
   Container,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
} from "@chakra-ui/react";

export const PortfolioModal = ({
   title,
   image,
   isOpen,
   onClose,
   modal_theme,
}) => {
   return (
      <Container maxW={"5xl"}>
         <Modal
            isCentered
            blockScrollOnMount={false}
            size={{ xs: "xl", lg: "6xl" }}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset={"slideInBottom"}
         >
            <ModalOverlay />
            <ModalContent bg={modal_theme}>
               <ModalHeader fontSize={"1.7rem"}>{title}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>{image}</ModalBody>
            </ModalContent>
         </Modal>
      </Container>
   );
};

export default memo(PortfolioModal);
