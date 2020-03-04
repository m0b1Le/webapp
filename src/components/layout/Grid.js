import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Grid.css';

export class Grid extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="container">
               <h1 className="description">Конвертеры</h1>
               <Link to="/pressure" className="box">Давление</Link>
               <Link to="/temperature" className="box">Температура</Link>
               <Link className="box">Объёмный расход</Link>
               <Link to="/weight" className="box">Масса</Link>
            </div>
            </React.Fragment>
        )
    }
}

export default Grid
