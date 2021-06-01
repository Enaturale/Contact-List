import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from '../api/contacts'
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetails";
import EditContact from "./EditContact";




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
  const [searchTerm, setSearchTerm] = useState("");

  //retrieveContacts from the api to the contacts page
  const retrieveContacts = async () =>{
    const response =  await api.get("/contacts");
    return response.data;
  }

  //adding contact to the list
  const addContactHandler =async (contact) => {
    console.log(contact);
    const request= {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  };

  //deleting the contact from the list
  const deleteContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  //updating contact in the list
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id, name, email} = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? {...response.data} : contact

    }));

  }
  
  //search handler
  const searchHandler = () => {
    
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
                term = {searchTerm}
                searchKeyword={searchHandler}
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
            path="/edit"
            render={(props) => (
              <EditContact {...props} updateContactHandler={updateContactHandler} />
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
