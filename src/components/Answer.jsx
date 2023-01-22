import React from "react";

export default function Answer(props) {

    const styles = {
        backgroundColor: props.text === props.selected && "rgb(166 180 245)",
        color: props.text === props.selected && "rgb(50 63 125)",
        border: props.text === props.selected && "2px solid rgb(166 180 245)"
    }

    return (
            <button 
            style={styles} 
            className="question--button" 
            onClick={props.pickOption}> 
            {props.text} 
            </button>
    )
}