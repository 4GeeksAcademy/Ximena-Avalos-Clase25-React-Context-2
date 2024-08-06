import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const Agendas = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getAgendas();
    }, []);

    const handleAgendaClick = (agendaSlug) => {
        navigate(`/agendas/${agendaSlug}`);
    };

    return (
        <div className="container">
            <h1>Agendas</h1>
            {store.agendas.length === 0 ? (
                <p>No agendas available</p>
            ) : (
                <ul className="list-group">
                    {store.agendas.map((agenda, index) => (
                        <li key={index} className="list-group-item" onClick={() => handleAgendaClick(agenda.slug)}>
                            {agenda.slug}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};