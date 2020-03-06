import React, { Component } from 'react'
import Select from 'react-select'
// import './SelectList2.css'

export class SelectList2 extends Component {
    
    render() {
        const customStyles = {
            control: (base, state) => ({
              ...base,
              background: "#023950",
              // Overwrittes the different states of border
              borderColor: state.isFocused ? "yellow" : "green",
              // Removes weird border around container
              boxShadow: state.isFocused ? null : null,
              "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "red" : "blue"
              }
            })
          };
        
          const options = [
            {
              label: "option 1",
              value: 1
            },
            {
              label: "option 2",
              value: 2
            },
            {
              label: "option 3",
              value: 3
            },
            {
              label: "option 4",
              value: 4
            },
            {
              label: "option 5",
              value: 5
            }
          ];
        
        return (
            <div id="select">
                <Select styles={customStyles} options = {options} />
            </div>
        )
    }
}

export default SelectList2
