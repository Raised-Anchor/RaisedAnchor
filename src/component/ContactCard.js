import { SiGmail } from "react-icons/si";

export const ContactCard = ({ contact }) => {
  return (
    <>
      <a>{contact.name}</a> -{" "}
      <a href={"mailto:" + contact.email}>
        <SiGmail />
      </a>
    </>
  );
};
