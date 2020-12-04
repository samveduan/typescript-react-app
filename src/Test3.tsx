import React, { Component } from 'react'

class App extends React.Component<
    {},
    {
        count: number | null; // like this
    }
    > {
    state = {
        count: null,
    };

    render() {
        return <div onClick={() => this.increment(1)}>{this.state.count}</div>;
    }
    
    increment = (amt: number) => {
        this.setState((state) => ({
            count: (state.count || 0) + amt,
        }));
    };
}