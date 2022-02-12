import React, {Fragment, useState} from "react";

const Products = () => {

  const [products, setProduct] = useState(["Capuccino", "Esspreso"])

  return(
    <Fragment>
      <ul>
        {
          products.map ((item, index) =>
            <li>
              <button>
                {item}
              </button>
            </li>
          ) 
        }
      </ul>
    </Fragment>
  )
}

export default Products