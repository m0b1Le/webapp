import React, { Component } from 'react'

export class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        return (            
            <div>
              <input id="temp-input" value={temperature} onChange={this.handleChange}/> 
            </div>
        )
    }
}

export default TemperatureInput
