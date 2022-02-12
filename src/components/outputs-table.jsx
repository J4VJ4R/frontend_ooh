import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button } from 'react-bootstrap'
function OutputsTable(){
return(
<Fragment>
  
  <h6 className="text-light bg-info p-2 text-center">SALIDAS</h6>
  <div className="table-responsive">
    <Table striped bordered hover size="sm" className="bg-light table">
      <thead>
        <tr>
          <th className="fs-6">CÓDIGO PROVEEDOR</th>
          <th className="fs-6">DESCRIPCIÓN</th>
          <th className="fs-6">CANTIDAD PARA COMPRAR</th>
          <th className="fs-6">UNIDAD DE MEDIDA</th>
          <th className="fs-6">VALOR POR UNIDAD</th>
          <th className="fs-6">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MERCACENTRO01</td>
          <td>PECHUGA</td>
          <td>10</td>
          <td>KG</td>
          <td>12000</td>
          <td>120000</td>
        </tr>
        <tr>
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
        </tr>
      </tbody>
      
    </Table>
  </div>
  
</Fragment>
)
}

export default OutputsTable