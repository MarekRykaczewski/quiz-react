import React from "react";

export default function Answer(props) {

    const styles = {
        backgroundColor: props.text === props.selected ? "rgba(77, 91, 158, 1)" : "",
        color: props.text === props.selected ? "white" : ""

    }

    return (
            <button style={styles} className="question--button" onClick={props.pickOption}> {props.text} </button>
    )
}