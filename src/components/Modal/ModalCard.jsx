import { memo } from "react";
import {
   Box,
   Center,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
} from "@chakra-ui/react";

export const ModalCard = ({
   isOpen,
   onClose,
   bgColor,
   name,
   icon,
   description,
   exp,
}) => {
   return (
      <Modal
         blockScrollOnMount={false}
         isCentered
         isOpen={isOpen}
         onClose={onClose}
         motionPreset={"slideInBottom"}
         size={"lg"}
      >
         <ModalOverlay />
         <ModalContent bg={bgColor}>
            <ModalHeader fontSize="2.5rem">{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Box
                  display={"flex"}
                  flexDir={"column"}
                  gap={"1.7rem"}
                  fontSize={"2rem"}
                  textAlign={"center"}
                  py={"2rem"}
               >
                  <Center fontSize={"10rem"}>{icon}</Center>
                  {description}
               </Box>
            </ModalBody>
            <ModalFooter>{exp}</ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default memo(ModalCard);
