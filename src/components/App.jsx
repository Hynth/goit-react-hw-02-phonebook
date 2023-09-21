import { useState } from "react";
import Phonebook from "./Phonebook";
import SearchContacts from "./SearchContacts";
import ShowContacts from "./ShowContacts";

export const App = () => {
  const [state, setState] = useState({
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: '',
    name: '',
    number: ''
  });

  const [showContact, setShowContact] = useState(state.contacts)

  return (
    <div>
      <Phonebook state={state} setState={setState} setShowContact={setShowContact}/>      
      <SearchContacts state={state} setState={setState} setShowContact={setShowContact}/>
      <ShowContacts contacts={showContact} state={state} setState={setState} setShowContact={setShowContact}/>
    </div>
  );
};
