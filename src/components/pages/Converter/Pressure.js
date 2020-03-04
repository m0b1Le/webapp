import React, { Component } from 'react'
import PressureInput from './PressureInput';
import './Pressure.css';
import { Link } from 'react-router-dom';
import SelectList from '../../layout/SelectList';
import SelectList2 from '../../layout/SelectList2';

export class Pressure extends Component {
    constructor(props) {
        super(props);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleSecondChange = this.handleSecondChange.bind(this);
        this.state = {pressure: '', scale: 'a'};
        
    }
    
    

    toFirst(second) {
        return ;
      }
      
    toSecond(first) {
        return ;
      }

    tryConvert(pressure, convert) {
        const input = parseFloat(pressure);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        //const rounded = Math.round(output * 1000) / 1000;
        return output.toString();
    }

    handleFirstChange(pressure) {
        this.setState({scale:'a', pressure})
    }

    handleSecondChange(pressure) {
        this.setState({scale:'b', pressure})
    }

    render() {
        
        const scale = this.state.scale;
        const pressure = this.state.pressure;
        const first = scale === 'b' ? this.tryConvert(pressure, this.toFirst) : pressure;
        const second = scale === 'a' ? this.tryConvert(pressure, this.toSecond) : pressure;

        return (
            <React.Fragment>
                <div className="pressure">
                    <h1 id="press_conv">Конвертер давления</h1>
                    <p id="press-description">Введите давление в </p>
                    <p id="press-description">Введите давление в</p>
                    <section>
                        <PressureInput scale="a" pressure={first} onPressureChange={this.handleFirstChange} />                        
                        <SelectList />
                    </section>
                    <section>
                        <PressureInput scale="b" pressure={second} onPressureChange={this.handleSecondChange} />
                        <p id="temp-unit">&deg;С</p>
                    </section>
                    
                    <Link to="/" className="back">Назад</Link>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Pressure
