import React from "react";


const persona = (props) => {
  return(
    <p>
      Hola mi nombre es {props.name} y tengo {props.edad}
      <div>
        {props.children}
      </div>
    </p>
  )
}


export default persona;