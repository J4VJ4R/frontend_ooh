import React from 'react'
import capacity from '../assets/capacity.png'
import {Link} from 'react-router-dom';
const CardTable = () => {
return (
<div className='card p-3'>
  <h6 className='h6-size'>COMPETENCIAS CLAVE</h6>
  <img src={capacity} alt='table'  className='m-1 img-fluid mx-auto card-img-custom img-custom ' height={50} width={50}></img>
  <div className='card-body p-0 bg-black bg-opacity-10 '>
  <ul>
    <li className='p-1'>Competencia uno</li>
    <li className='p-1'>Competencia dos</li>
    <li className='p-1'>Competencia tres</li>
  </ul>
    <div className="">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Escribe aquí las
      competencias clave'></textarea>
    </div>
    <Link to={'/'} className='btn btn-link text-black'>
    {/* buttons to crud */}
    <button type="button" className="btn btn-info btn-sm btn-lg-custom mx-1">Enviar</button>
    <button type="button" className="btn btn-success btn-sm mx-1">Editar</button>
    <button type="button" className="btn btn-danger btn-sm mx-1 my-sm-1">Borrar</button>
    </Link>
  </div>
</div>
)
}

export default CardTable