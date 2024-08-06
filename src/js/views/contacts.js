import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams, useNavigate } from 'react-router-dom';
import ContactCard from '../component/contactCard';

export const Contacts = () => {
  const { store, actions } = useContext(Context);
  const { agendaSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    actions.getContacts(agendaSlug);
  }, [agendaSlug]);

  const handleAddContact = () => {
    navigate(`/agendas/${agendaSlug}/add-contact`);
  };

  const handleDeleteContact = (contactId) => {
    actions.deleteContact(agendaSlug, contactId);
  };

  return (
    <div className="container">
      <h1>Contacts in {agendaSlug} agenda</h1>
      <button className="btn btn-success mb-3" onClick={handleAddContact}>Add new contact</button>
      {store.contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        store.contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} onDelete={handleDeleteContact} />
        ))
      )}
    </div>
  );
};