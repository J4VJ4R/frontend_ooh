import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button } from 'react-bootstrap'
import ModalSend from "./modal-send"
function Table1(){
return(
<Fragment>
  <h6 className="text-light text-start">Mesero: Javier Jaramillo</h6>
  <h6 className="text-light text-start">Número de mesa: 1</h6>
  <h6 className="text-light text-start">Fecha: 28-12-2021</h6>
  <Table striped bordered hover size="sm" className="bg-light table">
    <thead>
      <tr>
        <th>Cantidad</th>
        <th>Concepto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>Capuccino sin azucar</td>
        <td>$4000</td>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>0</td>
        <td >0</td>
        <td >0</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th></th>
        <th>Total:</th>
        <th>$ 8.000</th>
      </tr>
    </thead>
    
  </Table>
  <>
    <Button as="input" type="submit" value="Editar" variant="secondary" className="mx-2 my-4"  />
  </>
  <ModalSend></ModalSend>
  
</Fragment>
)
}

export default Table1