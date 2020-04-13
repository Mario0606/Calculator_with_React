import Display from '../components/Display'
import Button from '../components/Button'
import React , {Component } from 'react'
import './Calculator.css'

export default class Calculator extends Component {
    render() {
        const buttons_label = ['1', '2', '3', '4', '5', '6', '7',
                       '8', '9', '+', '-', '/', '*', '=',
                       '%', '<-', 'C']
        let buttons = []
        buttons_label.forEach((button) => buttons.push(<Button label={button}/>))

        return (
            <div className="calculator">
                <Display value="100"/>
                {buttons}
            </div>
        )
    }
}