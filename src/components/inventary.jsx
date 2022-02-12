import React, { Fragment } from 'react';
import inventaryTotal from '../assets/table-1.png';
import {Link} from 'react-router-dom';
function Inventary(){
return(
<div className='container bg-loto-1 d-flex flex-wrap justify-content-around'>
  <div className='col d-flex flex-column align-items-center'> <Link to='/inventario-total'>
      <img src={inventaryTotal} alt='inventaryTotal' width={100} className=' img-fluid img-thumbnail p-2 mt-2' />
    </Link>
    <Link to="/inventario-total" className='my-2 btn btn-link text-decoration-none text-light p-0 '>Inventario Total</Link>
  </div>
  <div className='col d-flex flex-column align-items-center'>
    <Link to='/salidas'>
      <img src={inventaryTotal} alt='inventaryTotal' width={100} className=' img-fluid img-thumbnail p-2 mt-2' />
    </Link>
    <Link to="/salidas" className='my-2 btn btn-link text-decoration-none text-light p-0'>Salidas</Link>
  </div>
  <div className='col d-flex flex-column align-items-center'>
    <Link to='/entradas'>
      <img src={inventaryTotal} alt='inventaryTotal' width={100} className=' img-fluid img-thumbnail p-2 mt-2' />
    </Link>
    <Link to="/entradas" className='my-2 btn btn-link text-decoration-none text-light p-0'>Entradas</Link>
  </div>
  <div className='col d-flex flex-column align-items-center'>
    <Link to='/pedidos'>
      <img src={inventaryTotal} alt='inventaryTotal' width={100} className=' img-fluid img-thumbnail p-2 mt-2' />
    </Link>
    <Link to="/pedidos" className='my-2 btn btn-link text-decoration-none text-light p-0'>Pedidos</Link>
  </div>
</div>
)
}

export default Inventary