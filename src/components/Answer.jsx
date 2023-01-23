import React from "react";

export default function Answer(props) {

    const styles = {
        backgroundColor: props.text === props.selected && !props.quizStatus.status ? "rgb(166 180 245)" : "",
        color: props.text === props.selected && !props.quizStatus.status ? "rgb(50 63 125)" : "",
        border: props.text === props.selected && !props.quizStatus.status ? "2px solid rgb(166 180 245)" : ""
    }

    return (
            <button 
            style={styles} 
            answer={props.answer}
            className={`question--button ${props.text === props.selected ? props.class : ""}`}
            onClick={props.pickOption}> 
            {props.text} 
            </button>
    )
}