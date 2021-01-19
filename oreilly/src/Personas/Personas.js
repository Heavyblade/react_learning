import React, {Component} from "react";
import Persona from "./Persona";

class Personas extends Component {

  shouldComponentUpdate(nextProps) {
    // Solo hace update the componente cuando cambia la gente
    return nextProps.gente !== this.props.gente
  }

  render() {
    console.log("[Personas] rendering")
    return this.props.gente.map((per, idx) => (
      <Persona name={per.name} onChangeHandler={this.props.onChange} edad={per.edad} key={idx}/>
    ));
  }
}

export default Personas;
