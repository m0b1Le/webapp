import React, { Component } from 'react'
import Select from 'react-select';
import './SelectList.css'

export class SelectList extends Component {
    
    state = {
      selectedOption: null,
    }

    handleChange = selectedOption => {
      this.setState({ selectedOption });
    }

    render() {
        const options = [
            {value: '0', label: 'Па'},
            {value: '1', label: 'кПа'}
        ]
        const customStyles = {
          control: (provided) => ({
            ...provided,
            fontFamily: 'Jura',
            height: "50px",
            backgroundColor: 'none',
            borderColor: 'white',
            borderLeft: 'none',
            borderRadius: '0 15px 15px 0',
            width: 300,
            padding: 10
        }),
          placeholder: (provided) => ({
            ...provided,
           backgroundColor: 'none',
           paddingTop: '10px',
           
          }),
          option: (provided, state) => ({
            ...provided,
            fontFamily: 'Jura',
            color: state.isSelected ? 'white' : 'black'
          }),
          singleValue: (provided) => ({
            ...provided,
            color: 'white',
            fontFamily: 'Jura',
            alignSelf: 'center',
            
          }),
          menu: (provided) => ({
            ...provided,
            color: 'white',
            backgroundColor: 'none'
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
            borderLeft: 'none',
            width: 40
          }),
          container: (provided) => ({
            ...provided,
            zIndex: 200
          })
          }
          const {selectedOption} = this.state;
        return (
            <div>
                <Select styles={customStyles} onChange={this.handleChange} options={options} defaultValue={options[0]} menuIsOpen={true} />
            </div>
        )
    }
}

export default SelectList
