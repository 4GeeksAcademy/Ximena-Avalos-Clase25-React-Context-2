import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

const AddAgendaModal = () => {
    const { actions } = useContext(Context);
    const [slug, setSlug] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Creating agenda with slug:', slug); 
        actions.createAgenda(slug);
        setSlug('');
        const modalElement = document.getElementById('addAgendaModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    };

    return (
        <div className="modal fade" id="addAgendaModal" tabIndex="-1" aria-labelledby="addAgendaModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addAgendaModalLabel">Create a new Agenda</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="agendaSlug">Agenda Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="agendaSlug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    placeholder="Enter agenda name"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Create Agenda</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAgendaModal;