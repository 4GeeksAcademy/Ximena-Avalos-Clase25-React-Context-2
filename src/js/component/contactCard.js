import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import ConfirmationModal from './confirmationModal'; 
const ContactCard = ({ contact, onDelete }) => {
  const { agendaSlug } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    onDelete(contact.id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img 
            src={contact.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_Mo26_I0wLIq2OD7O1I-3-5cZ1XxBR214w&s'} 
            className="card-img rounded-circle img-thumbnail" 
            alt="Contact" 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">
                <i className="fas fa-map-marker-alt"></i> {contact.address}
              </p>
              <p className="card-text">
                <i className="fas fa-phone"></i> {contact.phone}
              </p>
              <p className="card-text">
                <i className="fas fa-envelope"></i> {contact.email}
              </p>
            </div>
            <div className="d-flex">
              <Link to={`/agendas/${agendaSlug}/edit-contact/${contact.id}`} className="btn btn-light mr-2">
                <i className="fas fa-pencil-alt"></i>
              </Link>
              <button className="btn btn-light" onClick={handleDelete}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmDelete} 
      />
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactCard;