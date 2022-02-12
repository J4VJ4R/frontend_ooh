import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import ButtonCircle from './button-circle';

function ModalEntries() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex justify-content-end'>
      {
        <Button variant="secondary" onClick={handleShow} className='mt-2 btn btn-info text-white'>
          +
        </Button>
      }
    
    </div>
    
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="bg-loto-1 text-white">
          <Modal.Title>SMARTABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark-20">
          <label>Buscar Producto: </label>
          <input></input>
          <h5>PRODUCTO: CLUB COLOMBIA DORADA EN LATA X 24</h5>
          <h5>CANTIDAD: 2</h5>
          <h5>PRECIO: $ 66.000</h5>
        </Modal.Body>
        <Modal.Footer className="bg-loto-1 text-white">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Guardar
          </Button>
          
        </Modal.Footer>
      </Modal>

    </>
  );
}

// render(<Example />);

export default ModalEntries