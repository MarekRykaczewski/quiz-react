import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import data from "./data.js";


function App() {

  const [questions, setQuestions] = React.useState(data.results)

  const questionElements = questions.map(element => (
    <Question 
    text={element.question}
    firstOption={element.correct_answer}
    secondOption={element.incorrect_answers[0]}
    thirdOption={element.incorrect_answers[1]}
    fourthOption={element.incorrect_answers[2]}
    />
  ))

  return (
    <div className="App">
      {questionElements}
    </div>
  );
}

export default App;
