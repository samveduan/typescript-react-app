import React, { Component } from 'react'

export default class MyComponent extends React.Component<{
    message?: string; // like this
  }> {
    render() {
      const { message = "default" } = this.props;
      return <div>{message}</div>;
    }
  }