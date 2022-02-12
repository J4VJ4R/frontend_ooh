import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button } from 'react-bootstrap'
import ModalEntries from "./modal-entries";
function EntriesTable(){
return(
<Fragment>
  
  <h6 className="text-light bg-info p-2 text-center">ENTRADAS</h6>
  <div className="table-responsive">
    <Table striped bordered hover size="sm" className="bg-light table">
      <thead>
        <tr>
          <th className="fs-6">CÓDIGO DE PROVEEDOR</th>
          <th className="fs-6">FECHA</th>
          <th className="fs-6">CÓDIGO DE PRODUCTO</th>
          <th className="fs-6">DESCRIPCIÓN</th>
          <th className="fs-6">CANTIDAD</th>
          <th className="fs-6">VALOR UNITARIO</th>
          <th className="fs-6">VALOR TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BABARIAA01</td>
          <td>11-01-22</td>
          <td>10</td>
          <td>KG</td>
          <td>12000</td>
          <td>120000</td>
          <td>120000</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >12s</td>
        </tr>
      </tbody>
      
    </Table>
  </div>
  <ModalEntries/>
</Fragment>
)
}

export default EntriesTable