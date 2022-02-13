import React from 'react'
import product from '../assets/product.png'
import {Link} from 'react-router-dom';
const CardTable1 = () => {
return (
<div className='card p-3'>
  <h6 className='h6-size'>PRODUCTO FINAL</h6>
  <img src={product} alt='table' height={50} width={50} className='m-1 img-fluid mx-auto'></img>
  <div className='card-body bg-black bg-opacity-10 p-0 '>
    <p className='m-1'>lorem ipsum dolor sit amet, consectetur adip</p>
    <div className="">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
      placeholder='Escribe aquí el producto final'></textarea>
    </div>
    <Link to={'/'} className='btn btn-link text-black'>
    {/* buttons to crud */}
    <button type="button" className="btn btn-info btn-sm mx-1">Enviar</button>
    <button type="button" className="btn btn-success btn-sm mx-1">Editar</button>
    <button type="button" className="btn btn-danger btn-sm mx-1 my-sm-1">borrar</button>
    </Link>
  </div>
</div>
)
}

export default CardTable1