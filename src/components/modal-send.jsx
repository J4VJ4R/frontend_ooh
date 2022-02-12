import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

function ModalSend() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {
      <Button variant="secondary" onClick={handleShow}>
        Facturar
      </Button>
    }
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="bg-success">
          <Modal.Title>SMARTABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-success">
          
          <h5>
            Pedido enviado con éxito 
          </h5>
        </Modal.Body>
        <Modal.Footer className="bg-success">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    </>
  );
}

// render(<Example />);

export default ModalSend