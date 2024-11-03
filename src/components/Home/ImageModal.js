import React from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Selected" />
        <button className="close-modal" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;
