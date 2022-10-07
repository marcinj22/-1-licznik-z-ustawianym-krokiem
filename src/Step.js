import React from "react";
import './Step.css';

const Step = (props) => {

    let inputStep = null;

    return (
        <div className="step">
            Step:
            <input className="stepCount" ref={(data) => {inputStep = data} } onChange={() => props.changeStep(inputStep)} type="number" id="number" min="0" />
        </div>
    );
}


export default Step;


        // <div className="step">
        //     Step:
        //     <input className="stepCount" onChange={(event) => {props.changeStep(event)}} type="number" id="number" min="0" />
        // </div>