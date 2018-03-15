import React, {Component} from 'react';
import MessageList from './MessageList';
import Header from './Header';

class App extends Component {
    render() {
        return(
            <div>
                <h1> Hola react </h1>
                <Header title="Hello world"/>
                <MessageList />
            </div>
        );
    }
}

export default App;