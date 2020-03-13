import React, { Component } from 'react'


export class Label extends Component {
    render() {
        return (
            <div>
                <label style={labelStyle}>{this.props.text}</label>
            </div>
        )
    }
}

const labelStyle = {
    marginLeft: "0.8em",
    fontSize: "0.8em",
    fontFamily: "arial, sans-serif"
}

export default Label
