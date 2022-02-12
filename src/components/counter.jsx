import React, {Fragment, useState} from "react";

const Counter = () => {

  const [number, setNumber] = useState(0)
  const Increase = () => {
    setNumber(number + 1)
  }

  const Reduce = () => {
    setNumber(number - 1)
  }
  return(
    <Fragment>
      <p>CANTIDAD: </p>
      <button onClick={Increase}>+</button>
      <p>{number}</p>
      <button onClick={Reduce}>-</button>
    </Fragment>
  )
}

export default Counter