import React, { Component } from 'react'

class App extends React.Component<{
    message: string;
}> {
    pointer: number = 0; // like this
    componentDidMount() {
        this.pointer = 3;
    }
    render() {
        return (
            <div>
                {this.props.message} and {this.pointer}
            </div>
        );
    }
}