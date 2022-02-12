import React, {Fragment} from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function VerticalNav(){
return(
<Fragment>
  <Nav variant="pills" defaultActiveKey="./caja2" className='flex-column text-sm-center'>
    <Nav.Item>
      <Nav.Link>
        <Link to="/inventario-total">
          INVENTARIO TOTAL
        </Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/salidas">
          SALIDAS
        </Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/entradas">
          ENTRADAS
        </Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/pedidos">
          PEDIDOS
        </Link>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  
</Fragment>
)
}

export default VerticalNav