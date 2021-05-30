import React from "react";

import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContact = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      name: "Bukola",
      email: "bukola@gmail.com",
    },
  ];
  const showContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickDeleteHandler={deleteContact}
        key={contact.id}
      />
    );
  });

  return (
    <div>
       <div style ={{marginTop: '90px'}}><h1>Contact List</h1> </div>
      <div className="ui celled list">{showContactList}</div>
    </div>
  );
};

export default ContactList;
