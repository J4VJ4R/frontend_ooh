import React from 'react'
import organization from '../assets/organization.png'
import {Link} from 'react-router-dom';
const CardTable3 = () => {
return (
<div className='card p-3'>
  <h6 className='h6-size'>ESTÁNDARES DE APRENDIZAJE</h6>
  <img src={organization} alt='table' height={50} width={50} className='m-1 img-fluid mx-auto'></img>
  <div className='card-body bg-black bg-opacity-10 p-0 '>
    <ul>
      <li className='p-1'>Estandar de aprendizaje 1</li>
      <li className='p-1'>Estandar de aprendizaje 2</li>
      <li className='p-1'>Estandar de aprendizaje 3</li>
    </ul>
    <div className="">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Escribe aquí
      los estándares de aprendizaje'></textarea>
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

export default CardTable3