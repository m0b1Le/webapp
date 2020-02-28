import React, { Component } from 'react';
import Clock from './Clock';

export class Header extends Component {
    render() {
        return (
            <div>
               <Clock className='Clock'/> 
            </div>
        )
    }
}

export default Header
