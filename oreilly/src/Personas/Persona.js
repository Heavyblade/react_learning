import React from "react";
import classes from './Persona.module.css'

const persona = (props) => {
  return(
    <div className={classes.Persona}>
      <p>Hola mi nombre es {props.name} y tengo {props.edad}</p>
      <div>
        {props.children}
      </div>
      <input onChange={props.onChangeHandler} type="text" value={props.name}/>
    </div>
  )
}


export default persona;