import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <span className="question--header"> {props.text} </span>
            <button className="question--button" onClick={props.chooseAnswer}> {props.firstOption} </button>
            <button className="question--button"> {props.secondOption} </button>
            <button className="question--button"> {props.thirdOption} </button>
            <button className="question--button"> {props.fourthOption} </button>
        </div>
    )
}