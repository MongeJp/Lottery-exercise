import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    };

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.maxBalls })
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.generateNumbers();
    }

    generateNumbers() {
        this.setState(curState => ({
            nums: curState.nums.map(n => {
                return Math.floor(Math.random() * this.props.maxNum) + 1;
            })
        }));
    }
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(num => <Ball num={num} />
                    )}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;