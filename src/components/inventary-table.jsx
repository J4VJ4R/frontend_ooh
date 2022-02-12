import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button } from 'react-bootstrap'
import ModalSend from "./modal-send"
function InventaryTable(){
return(
<Fragment>
  
  <h6 className="text-light bg-info p-2 text-center">INVENTARIO DE PRODUCTOS</h6>
  
  <div className="table-responsive">
  <table className="table text-dark bg-white">
  <thead>
    <tr>
      <th scope="col">Código Producto</th>
      <th scope="col">Descripción</th>
      <th scope="col">Existencias iniciales</th>
      <th scope="col">Entradas</th>
      <th scope="col">Salidas</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BF001</td>
      <td>FRAPE</td>
      <td>10</td>
      <td>10</td>
      <td>2</td>
      <td>18</td>
    </tr>
    <tr>
      <td>BF001</td>
      <td>FRAPE</td>
      <td>10</td>
      <td>10</td>
      <td>2</td>
      <td>18</td>
    </tr>
    <tr>
      <td>BF001</td>
      <td>FRAPE</td>
      <td>10</td>
      <td>10</td>
      <td>2</td>
      <td>18</td>
    </tr>
  </tbody>
</table>
  </div>
</Fragment>
)
}

export default InventaryTable