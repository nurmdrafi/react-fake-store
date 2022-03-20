import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);
    const {title, category, description, image } = props.product;
    return (
        <div>
          <Button variant="success" onClick={handleShow}>
            Details
          </Button>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{width: '100%', margin: '0 auto'}} src={image} alt="" />
                <h3>Category: {category}</h3>
                <div>{description}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
};

export default ReactModal;
