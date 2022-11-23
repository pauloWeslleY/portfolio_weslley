import { memo } from "react";
import { Stack } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { ContactItem } from "./index";

export const ContactList = ({ email1, email, number, cellphone }) => {
   return (
      <Stack p={5}>
         <ContactItem title={email1} icon={<HiOutlineMail />} name={email} />
         <ContactItem title={cellphone} icon={<BsTelephone />} name={number} />
      </Stack>
   );
};

export default memo(ContactList);
