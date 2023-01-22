import React from "react";
import Answer from "./Answer";

export default function Question(props) {
    return (
        <div className="question">
            <span className="question--header"> {props.text} </span>
            {props.firstOption && 
            <Answer 
            selected={props.selected} 
            text={props.firstOption} 
            pickOption={() => props.pickOption(props.id, props.firstOption)} />}
            {props.secondOption && 
            <Answer 
            selected={props.selected} 
            text={props.secondOption} 
            pickOption={() => props.pickOption(props.id, props.secondOption)}/>}
            {props.thirdOption && 
            <Answer 
            selected={props.selected} 
            text={props.thirdOption} 
            pickOption={() => props.pickOption(props.id, props.thirdOption)}/>}
            {props.fourthOption && 
            <Answer 
            selected={props.selected} 
            text={props.fourthOption} 
            pickOption={() => props.pickOption(props.id, props.fourthOption)}/>}
        </div>
    )
}