import React, { Component } from 'react'
import Select from 'react-select';

export class SelectList extends Component {
    
    render() {
        const options = [
            {value: '0', label: 'Padasdadsa'},
            {value: '1', label: 'кПа'}
        ]

        const customStyles = {
            option: (provided, state) => ({
              ...provided,
              borderBottom: '1px dotted pink',
              color: state.isSelected ? 'red' : 'blue',
              padding: 20,
            }),
            control: () => ({
              // none of react-select's styles are passed to <Control />
              width: 200,
            }),
            singleValue: (provided, state) => {
              const opacity = state.isDisabled ? 0.5 : 1;
              const transition = 'opacity 300ms';
          
              return { ...provided, opacity, transition };
            }
          }
          
        return (
            <div>
                <Select id="select" styles={customStyles} options={options} />
            </div>
        )
    }
}

export default SelectList
