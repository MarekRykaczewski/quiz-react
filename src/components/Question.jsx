import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <span className="question--header"> How would one say goodbye in Spanish? </span>
            <button className="question--button"> Adios </button>
            <button className="question--button"> Hola </button>
            <button className="question--button"> Au Revior </button>
            <button className="question--button"> Salir </button>
        </div>
    )
}