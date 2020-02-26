import React, { Component } from 'react';
import './Clock.css';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    getDay() {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[this.state.date.getDay()];
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <div id='clock'>{ this.state.date.toLocaleTimeString() }<br /></div>
                <div id='day'>{ this.getDay()}, { this.state.date.toLocaleString('ru', {day: '2-digit', month: 'long' }) }</div>
            </div>
        )
    }
}

export default Clock;
