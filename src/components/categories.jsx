import React, {Fragment, useState} from "react";
import {Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalBill from "./modal-bill";
const Categories = () => {

const [categories, setCategories] = useState(["Cafetería", "Restaurante"])
const [cafeteria, setCafeteria] = useState(["Capuccino", "Salmon"]) 
const [restaurant, setRestaurant] = useState(["Capuccino", "Salmon"])

return(
<Fragment>
  <Accordion>
    {
    categories.map ((item, index) =>
    <Accordion.Item eventKey={item}>
      <Accordion.Header>{item}</Accordion.Header>
      <Accordion.Body>
          {
            cafeteria.map ((item, index) =>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-start">
                <ModalBill></ModalBill>
              </li>
            </ul>
            )
          }
      </Accordion.Body>
    </Accordion.Item>
    )
    }
  </Accordion>
  
</Fragment>
)
}

export default Categories