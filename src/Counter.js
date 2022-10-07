import React, { Component } from "react";
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1,   
        };
    }

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });

        });
    }

    changeStep = (ref) => {

        this.setState({
            stepValue: +ref.value  
        });

        console.log(ref.value);
    };

    

    render() {

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step changeStep={this.changeStep}/>
            </div>
        );
    }
}

export default Counter;


// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     )
// }

// export default Counter;