import React, { Component } from 'react'
import './SelectList.css'

export class SelectList extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '1'};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({value: e.target.value});
    }

    render() {
        
        return (
            <div className="pressureSelect">
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="0">Па</option>
                  <option value="1">кПа</option>
                  <option value="2">МПа</option>
                </select>
            </div>
        )
    }
}

export default SelectList
