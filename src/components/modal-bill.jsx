import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

function ModalBill() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cafeteria, setCafeteria] = useState(["capuccino, irlandes"])

  return (
    <>
    {
    cafeteria.map ((item, index) =>
      <Button variant="link" onClick={handleShow}>
        {item}
      </Button>
    )
    }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SMARTABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            CANTIDAD:  +  2  -
          </h5>
          <h5>
            VALOR: $ 20.000
          </h5>
          <h5>
            OBSERVACIONES: SIN AZUCAR
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    </>
  );
}

// render(<Example />);

export default ModalBill