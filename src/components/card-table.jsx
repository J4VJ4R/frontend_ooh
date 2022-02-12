import React from 'react'
import table1 from '../assets/table-1.png'
import {Link} from 'react-router-dom';
const CardTable = (props) => {
  const {table} = props
  return (
    <div className='card'>
      <img src={table1} alt='table' height={150} width={150} ></img>
      <div className='card-body bg-black bg-opacity-10 '>
      <Link to={'/comanda1'} className='btn btn-link text-black'>
        <h2 className='card-title  '>{table}</h2>
      </Link>
      </div>
    </div>
  )
}

export default CardTable
