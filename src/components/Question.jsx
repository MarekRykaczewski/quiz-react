import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <span className="question--header"> {props.text} </span>
            <button className="question--button" onClick={() => props.pickOption(props.firstOption)}> {props.firstOption} </button>
            <button className="question--button" onClick={() => props.pickOption(props.secondOption)}>  {props.secondOption} </button>
            <button className="question--button" onClick={() => props.pickOption(props.thirdOption)}> {props.thirdOption} </button>
            <button className="question--button" onClick={() => props.pickOption(props.fourthOption)}> {props.fourthOption} </button>
        </div>
    )
}