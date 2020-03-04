import React, { Component } from 'react'
import Select from 'react-select';

export class SelectList extends Component {
    
    state = {
      selectedOption: null,
    }

    handleChange = selectedOption => {
      this.setState({ selectedOption });
    }

    render() {
        const options = [
            {value: '0', label: 'Padasdadsa', checked: 'true'},
            {value: '1', label: 'кПа'}
        ]
        const customStyles = {
          control: (provided, state) => ({
            ...provided,
            height: "50px",
            backgroundColor: 'none',
            borderColor: 'white',
            borderLeft: 'none',
            borderRadius: '0 15px 15px 0'
        }),
          placeholder: () => ({
           backgroundColor: 'none',
           paddingTop: '10px'
          }),
          menu: (provided, state) => ({
            ...provided,
          })
          }
          const {selectedOption} = this.state;
        return (
            <div>
                <Select styles={customStyles} onChange={this.handleChange} options={options} value={selectedOption} />
            </div>
        )
    }
}

export default SelectList
