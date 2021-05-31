import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContact = (id) => {
    props.getContactId(id);
  };

 
  const showContactList = props.contacts.map((contact) => {
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
      <div style={{ marginTop: "90px" }}>
        <h1>
          Contact List
          <Link to="/add">
            <button
              className="ui button blue right"
              style={{ marginLeft: "29rem" }}
            >
              Add Contact
            </button>
          </Link>
        </h1>
      </div>
      <div className="ui celled list">{showContactList}</div>
    </div>
  );
};

export default ContactList;
