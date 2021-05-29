import "./App.css";
import React, {useState, useEffect} from "react";
import { uuid } from "uuidv4";
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

  const  LOCAL_STORAGE_KEY = "contacts"
  const[contacts, setContacts] = useState([]);

  //adding contact to the list
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() =>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

 

  return (
    <div  className = "ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {deleteContactHandler}/>
    </div>
  );
}

export default App;
