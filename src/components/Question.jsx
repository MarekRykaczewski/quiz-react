import React from "react";
import Answer from "./Answer";

export default function Question(props) {
    return (
        <div className="question">
            <span className="question--header"> {props.text} </span>
            {/* <button className="question--button" onClick={() => props.pickOption(props.firstOption)}> {props.firstOption} </button>
            <button className="question--button" onClick={() => props.pickOption(props.secondOption)}>  {props.secondOption} </button>
            <button className="question--button" onClick={() => props.pickOption(props.thirdOption)}> {props.thirdOption} </button>
            <button className="question--button" onClick={() => props.pickOption(props.fourthOption)}> {props.fourthOption} </button> */}
            <Answer selected={props.selected} text={props.firstOption} pickOption={() => props.pickOption(props.id, props.firstOption)} />
            <Answer selected={props.selected} text={props.secondOption} pickOption={() => props.pickOption(props.id, props.secondOption)}/>
            <Answer selected={props.selected} text={props.thirdOption} pickOption={() => props.pickOption(props.id, props.thirdOption)}/>
            <Answer selected={props.selected} text={props.fourthOption} pickOption={() => props.pickOption(props.id, props.fourthOption)}/>
        </div>
    )
}