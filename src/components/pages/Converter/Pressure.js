import React, { Component } from 'react'
import PressureInput from './PressureInput';
import './Pressure.css';
import { Link } from 'react-router-dom';

export class Pressure extends Component {
    constructor(props) {
        super(props);
        this.handleFirstSelectChange = this.handleFirstSelectChange.bind(this);
        this.handleSecondSelectChange = this.handleSecondSelectChange.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleSecondChange = this.handleSecondChange.bind(this);
        this.state = {
            pressure: '', 
            scale: 'a',
            valueLeft: '1',
            valueRight: '0',
            pressuveConv: [
                [1, 68.95, 0.0689, 0.0681, 6895, 6.895, 0.006895, 703.8, 27.71, 51.715, 2.036, 0.0704],
                [0.0145, 1, 0.001, 0.000967, 100, 0.100, 0.0001, 10.21, 0.402, 0.75, 0.0295, 0.00102],
                [14.504, 1000, 1, 0.987, 100000, 100, 0.1, 10210, 401.9, 750.1, 29.53, 1.02],
                [14.7, 1013.25, 1.01325, 1, 101325, 101.325, 0.1013, 10343, 407.2, 760.0, 29.92, 1.033],
                [0.000145, 0.01, 0.00001, 0.00001, 1, 0.001, 0.000001, 0.102, 0.00402, 0.0075, 0.000295, 0.00001],
                [0.14504, 10.0, 0.01, 0.00987, 1000, 1, 0.001, 102.07, 4.019, 7.5, 0.295, 0.0102],
                [145.04, 10000, 10, 9.87, 1000000, 1000, 1, 101971.6, 4014.6, 7500.6, 295.3, 10.2],
                [0.001421, 0.098, 0.000098, 0.000097, 9.8, 0.0098, 0.0000098, 1, 0.0394, 0.0735, 0.00289, 0.0001],
                [0.0361, 2.488, 0.002488, 0.00246, 248.8, 0.2488, 0.00025, 25.4, 1, 1.866, 0.0735, 0.00254],
                [0.01934, 1.333, 0.001333, 0.001316, 133.3, 0.1333, 0.00013, 13.61, 0.536, 1, 0.0394, 0.00136],
                [0.4912, 33.86, 0.03386, 0.03342, 3386, 3.386, 0.00386, 345.7, 13.61, 25.4, 1, 0.0345],
                [14.22, 980.7, 0.9807, 0.968, 98067, 98.067, 0.0981, 10010, 394.1, 735.6, 28.96,1]
            ],
            pressureNames: [
                'psi', 
                'милибарах', 
                'барах', 
                'атмосферах', 
                'паскалях', 
                'килопаскалях', 
                'мегапаскалях', 
                'миллиметрах водяного столба', 
                'дюймах водяного столба', 
                'миллиметрах ртутного столба', 
                'дюймах ртутного столба', 
                'килограммах на квадратный сантиметр']
        };
    }

    toFirst = (second) => {
        return second * this.state.pressuveConv[this.state.valueRight][this.state.valueLeft];
      }
      
    toSecond = (first) => {
        return first * this.state.pressuveConv[this.state.valueLeft][this.state.valueRight];
      }

    tryConvert(pressure, convert) {
        const input = parseFloat(pressure);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    handleFirstSelectChange(e) {
        this.setState({valueLeft: e.target.value});
      }

    handleSecondSelectChange(e) {
        this.setState({valueRight: e.target.value});
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
                    <p id="press-description">Введите давление в {this.state.pressureNames[this.state.valueLeft]}</p>
                    <p id="press-description">Введите давление в {this.state.pressureNames[this.state.valueRight]}</p>
                    <section>
                        <PressureInput scale="a" pressure={first} onPressureChange={this.handleFirstChange} />                        
                        <select class="pressureSelect" value={this.state.valueLeft} onChange={this.handleFirstSelectChange}>
                            <option value="0">psi</option>
                            <option value="1">мбар</option>
                            <option value="2">бар</option>
                            <option value="3">атм</option>
                            <option value="4">Па</option>
                            <option value="5">кПа</option>
                            <option value="6">МПа</option>
                            <option value="7">мм вод. ст.</option>
                            <option value="8">дюйм вод. ст.</option>
                            <option value="9">мм рт. ст.</option>
                            <option value="10">дюйм рт. ст.</option>
                            <option value="11">кг/см2</option>
                        </select>
                    </section>
                    <section>
                        <PressureInput scale="b" pressure={second} onPressureChange={this.handleSecondChange} />
                        <select class="pressureSelect" value={this.state.valueRight} onChange={this.handleSecondSelectChange}>
                            <option value="0">psi</option>
                            <option value="1">мбар</option>
                            <option value="2">бар</option>
                            <option value="3">атм</option>
                            <option value="4">Па</option>
                            <option value="5">кПа</option>
                            <option value="6">МПа</option>
                            <option value="7">мм вод. ст.</option>
                            <option value="8">дюйм вод. ст.</option>
                            <option value="9">мм рт. ст.</option>
                            <option value="10">дюйм рт. ст.</option>
                            <option value="11">кг/см2</option>
                        </select>
                    </section>
                    <Link to="/" className="back">Назад</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Pressure
