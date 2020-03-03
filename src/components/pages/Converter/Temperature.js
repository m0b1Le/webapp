import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import './Temperature.css';
import { Link } from 'react-router-dom';

export class Temperature extends Component {
    constructor(props) {
        super(props);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'}
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    handleCelciusChange(temperature) {
        this.setState({scale:'c', temperature})
    }

    handleFarenheitChange(temperature) {
        this.setState({scale:'f', temperature})
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

        return (
            <React.Fragment>
                <div className="temperature">
                    <h1 id="temp_conv">Конвертер температуры</h1>
                    <p id="temp-description">Введите температуру в Цельсиях</p>
                    <p id="temp-description">Введите температуру в Кельвинах</p>
                    <section>
                        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelciusChange} />
                        <p id="temp-unit">&deg;С</p>
                    </section>
                    <section>
                        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFarenheitChange} />
                        <p id="temp-unit">&deg;F</p>
                    </section>
                    <Link to="/" className="back">Назад</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Temperature
