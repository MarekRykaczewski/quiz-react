import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import data from "./data.js";


function App() {

  const [questions, setQuestions] = React.useState(data.results)

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  const questionElements = questions.map(element => {
    let answers = 
    [element.correct_answer, 
      element.incorrect_answers[0],
      element.incorrect_answers[1], 
      element.incorrect_answers[2]]

    shuffle(answers)

    return (
      <Question 
      text={element.question}
      firstOption={answers[0]}
      secondOption={answers[1]}
      thirdOption={answers[2]}
      fourthOption={answers[3]}
      />
    )
  }

  )

  return (
    <div className="App">
      {questionElements}
    </div>
  );
}

export default App;
