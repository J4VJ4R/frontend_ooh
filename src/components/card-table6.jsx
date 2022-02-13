import React from 'react'
import evaluation from '../assets/evaluation.png'
import {Link} from 'react-router-dom';
const CardTable6 = () => {
return (
<div className='card p-3'>
  <h6 className='h6-size'>MÉTODOS DE EVALUACIÓN</h6>
  <img src={evaluation} alt='table' height={50} width={50} className='m-1 img-fluid mx-auto'></img>
  <div className='card-body bg-black bg-opacity-10 p-0'>
  <ul>
    <li className='p-1'>Método de evaluación 1</li>
    <li className='p-1'>Método de evaluación 2</li>
    <li className='p-1'>Método de evaluación 3</li>
  </ul>
    <div className="">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Escribe aquí
      los métodos de evaluación'></textarea>
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

export default CardTable6