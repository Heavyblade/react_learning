import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    render() {
        return(
            <div>
                <h3>Lista de mensajes</h3>
            </div>
        )

    };
}

export default MessageList