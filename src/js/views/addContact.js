import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const { agendaSlug } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.createContact(agendaSlug, contact);
        navigate(`/agendas/${agendaSlug}`);
    };

    return (
        <div className="container">
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={contact.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={contact.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        value={contact.phone}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address" 
                        value={contact.address}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            <a href={`/agendas/${agendaSlug}`}>or get back to contacts</a>
        </div>
    );
};