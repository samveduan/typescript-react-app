import React, { Component } from 'react'
import {Button} from 'antd'

export interface IProps {
    name: string
}

export interface IState {
    count: number
}

export default class MyButton extends Component<IProps, IState> {
    state = {
        count: 0
    }

    handleIncrementCount(){
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        const {name} = this.props;
        const {count} = this.state;

        return (
            <div>
                <Button type="primary" onClick={() => this.handleIncrementCount()}>{name}：{count}</Button>
            </div>
        )
    }
}
