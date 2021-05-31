import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetails";


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

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //adding contact to the list
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={deleteContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route 
          path ="/contact/:id" component ={ContactDetail} />
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {deleteContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
