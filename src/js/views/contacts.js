import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import ContactCard from '../component/contactCard';

const Contacts = () => {
  const { store, actions } = useContext(Context);
  const { agendaSlug } = useParams();

  useEffect(() => {
    actions.getContacts(agendaSlug);
  }, [agendaSlug]);

  return (
    <div className="container">
      <h1>Contacts in {agendaSlug} agenda</h1>
      <button className="btn btn-success mb-3">Add new contact</button>
      {store.contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        store.contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))
      )}
    </div>
  );
};

export default Contacts;