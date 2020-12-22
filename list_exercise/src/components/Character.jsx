import React from "react"
import "./Character.css"
import Button from '@material-ui/core/Button';

const Character = (props) => {
  return(
    <Button className="Character" variant="contained" color="primary" onClick={() => props.delete(props.idx)}>{props.letter}</Button>
  )
}

export default Character