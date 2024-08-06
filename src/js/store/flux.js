const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            agendas: [],
			contacts: []
        },
        actions: {
            createAgenda: async (slug) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                    if (response.ok) {
                        const newAgenda = await response.json();
                        setStore({
                            agendas: [...getStore().agendas, newAgenda]
                        });
                    } else {
                        console.error('Error al crear la agenda', response.statusText);
                    }
                } catch (error) {
                    console.error('Error al crear la agenda', error);
                }
            },
			getAgendas: async () => {
				try {
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas?offset=0&limit=100`, {
					method: "GET",
					headers: {
					  "Content-Type": "application/json"
					}
				  });
				  if (!response.ok) throw new Error('Error fetching agendas');
				  const data = await response.json();
				  console.log('Agendas fetched', data);
		
				  // Actualizamos el store con las agendas obtenidas
				  setStore({ agendas: data.agendas });
				} catch (error) {
				  console.error(`Error fetching agendas: ${error.message}`);
				}
			  },
			  getContacts: async (agendaSlug) => {
				try {
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`, {
					method: "GET",
					headers: {
					  "Content-Type": "application/json"
					}
				  });
				  if (!response.ok) throw new Error('Error fetching contacts');
				  const data = await response.json();
				  console.log('Contacts fetched', data);
			  
				  // Add a default image to each contact if not available
				  const contactsWithImages = data.contacts.map(contact => ({
					...contact,
					image: contact.image || 'https://via.placeholder.com/150'
				  }));
			  
				  setStore({ contacts: contactsWithImages });
				} catch (error) {
				  console.error(`Error fetching contacts: ${error.message}`);
				}
			  },
			  createContact: async (agendaSlug, contact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        const newContact = await response.json();
                        setStore({
                            contacts: [...getStore().contacts, newContact]
                        });
                    } else {
                        console.error('Error al crear el contacto', response.statusText);
                    }
                } catch (error) {
                    console.error('Error al crear el contacto', error);
                }
            },
			updateContact: async (agendaSlug, contactId, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${contactId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (response.ok) {
                        const updatedContactData = await response.json();
                        const updatedContacts = getStore().contacts.map(contact => 
                            contact.id === contactId ? updatedContactData : contact
                        );
                        setStore({ contacts: updatedContacts });
                    } else {
                        console.error('Error updating contact', response.statusText);
                    }
                } catch (error) {
                    console.error('Error updating contact', error);
                }
            },
			deleteContact: async (agendaSlug, contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${contactId}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    if (response.ok) {
                        const updatedContacts = getStore().contacts.filter(contact => contact.id !== contactId);
                        setStore({ contacts: updatedContacts });
                    } else {
                        console.error('Error deleting contact', response.statusText);
                    }
                } catch (error) {
                    console.error('Error deleting contact', error);
                }
            },
			  
            }
        }
    };

export default getState;