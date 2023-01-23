import React from "react";

export default function Answer(props) {

    const styles = {
        backgroundColor: props.text === props.selected && !props.quizStatus.status ? "rgb(166 180 245)" : "",
        color: props.text === props.selected && !props.quizStatus.status ? "rgb(50 63 125)" : "",
        border: props.text === props.selected && !props.quizStatus.status ? "2px solid rgb(166 180 245)" : ""
    }

    console.log(props.quizStatus.status)

    function buttonClass() {
        if (props.quizStatus.status) {
            if (props.selected === props.answer && props.selected === props.text) {
                return "correct"
            } else if (props.selected != props.answer && props.selected === props.text) {
                return "incorrect"
            } else if (props.answer === props.text && props.text != props.selected)  {
                return "correct"
            } else {
                return "normal"
            }
        } 
    }
    
    return (
            <button 
            style={styles} 
            answer={props.answer}
            className={`question--button ${buttonClass()}`}
            onClick={props.pickOption}> 
            {props.text} 
            </button>
    )
}