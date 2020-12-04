import React, { Component } from 'react'
import { Alert } from 'antd';

interface IProps {
    value: string | undefined | null;
}

interface IState {
    count: string | undefined | null;
}

export default class MyAlert extends Component<IProps, {}> {
    render() {
        return (
            <div>
                <Alert message="Success Text" type="success" />
            </div>
        )
    }
}