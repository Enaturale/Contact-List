import "./App.css";
import React, {useState} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  //rendering a list
  // const contacts= [
  //   {
  //     id : "1",
  //     "name" :  "Bukola",
  //     "email" : "bukola@gmail.com"
  //   },
  //   {
  //     id : "2",
  //     "name" :  "Femi Folarin",
  //     "email" : "femifolarin@gmail.com"
  //   },

  // ]

  const[contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  };

  return (
    <div  className = "ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
