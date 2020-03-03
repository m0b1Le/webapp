import React, { Component } from 'react'

export class PressureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onPressureChange(e.target.value);
    }

    render() {
        const pressure = this.props.pressure;
        return (            
            <div>
              <input id="press-input" value={pressure} onChange={this.handleChange}/> 
            </div>
        )
    }
}

export default PressureInput
