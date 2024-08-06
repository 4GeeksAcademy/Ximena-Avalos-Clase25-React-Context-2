import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">React Boilerplate</span>
            </Link>
            <div className="ml-auto">
                <Link to="/agendas">
                    <button className="btn btn-primary">View Agendas</button>
                </Link>
                <button className="btn btn-secondary ml-2" data-bs-toggle="modal" data-bs-target="#addAgendaModal">
                    Add Agenda
                </button>
            </div>
        </nav>
    );
};