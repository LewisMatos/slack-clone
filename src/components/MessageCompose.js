import React, { Component } from 'react';


export default class MessageCompose extends Component {

    state = {
        input: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let message = {
            name: 'guy1',
            text: this.state.input
        }

        this.props.handleNewMessageSent(message)
        this.setState({
            input: ''
        })
    }

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.onInputChange} placeholder="Type your message here!!!" ></input>
                </form>
            </div>
        )
    }
}


