import React from "react";
import Answer from "./Answer";

export default function Question(props) {
    return (
        <div className="question">
            <span className="question--header"> {props.text} </span>
            {props.firstOption && 
            <Answer 
            selected={props.selected} 
            quizStatus={props.quizStatus}
            answer={props.answer}
            class={props.class}
            text={props.firstOption} 
            pickOption={() => props.pickOption(props.id, props.firstOption)} />}
            {props.secondOption && 
            <Answer 
            selected={props.selected} 
            quizStatus={props.quizStatus}
            answer={props.answer}
            class={props.class}
            text={props.secondOption} 
            pickOption={() => props.pickOption(props.id, props.secondOption)}/>}
            {props.thirdOption && 
            <Answer 
            selected={props.selected} 
            quizStatus={props.quizStatus}
            answer={props.answer}
            class={props.class}
            text={props.thirdOption} 
            pickOption={() => props.pickOption(props.id, props.thirdOption)}/>}
            {props.fourthOption && 
            <Answer 
            selected={props.selected} 
            quizStatus={props.quizStatus}
            answer={props.answer}
            class={props.class}
            text={props.fourthOption} 
            pickOption={() => props.pickOption(props.id, props.fourthOption)}/>}
        </div>
    )
}