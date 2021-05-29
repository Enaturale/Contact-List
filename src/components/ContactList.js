import React from "react";

import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContact = (id) => {
    props.getContactId(id);
  }

  const showContactList = props.contacts.map((contact) => {
    return (
      <ContactCard  contact= {contact} clickDeleteHandler={deleteContact} key={contact.id} />
    );
  });

  return (
    <div className="ui celled list">
      <h3>Contact List</h3>
      {showContactList}
    </div>
  );
};

export default ContactList;
