import React from 'react';
import { Button } from '@material-ui/core';
import ImgMediaCard from './ImgMediaCard';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Validation from "./Validation";
import Character from "./components/Character"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: "Cristian"}
  }

  onChangeHandler = (event) => {
    let newState = {...this.state}
    newState.name = event.target.value
    this.setState(newState)
  }

  removeSelectedHandler = (index) => {
    let name = this.state.name.split("");
    name.splice(index, 1)
    this.setState({name: name.join("")})
  }

  render() {
    const Component = "div"

    return (
    <Component>
      <Container maxWidth="sm">
        <Button color="primary">Hello World</Button>
        <ImgMediaCard/>
      </Container>
      <Container maxWidth="sm">
        <TextField id="standard-name" label="Name" value={this.state.name} onChange={this.onChangeHandler} />
        <p>Length of input {this.state.name.length}</p>
        <Validation count={this.state.name.length}/>
        { this.state.name.split("").map((x, idx) => <Character letter={x} delete={this.removeSelectedHandler} key={idx} idx={idx} /> ) }
      </Container>
    </Component>)
  }
}

export default App;
