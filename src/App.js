import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import data from "./data.js";
import { nanoid } from 'nanoid'


function App() {

  const [questions, setQuestions] = React.useState(data.results.map(result =>{
    return (
      { question: result.question,
        options: [...result.incorrect_answers, result.correct_answer],
        answer: result.correct_answer,
        selected: "",
        id: nanoid()
      }
    )
  }))

  React.useEffect(() => {
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return (
        {
          ...question,
          options: shuffle([...question.options])
        }
      )
    }))
}, [])

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



  function selectAnswer(id, answer) {
    console.log(questions)
    setQuestions(oldQuestions => oldQuestions.map(question => {
      if (question.id === id) {
        return ({...question, selected: answer})
      } else {
        return question
      }

    }))
  }

  const questionElements = questions.map(element => {
    return (
      <Question 
      key={element.id}
      id={element.id}
      text={element.question}
      firstOption={element.options[0]}
      secondOption={element.options[1]}
      thirdOption={element.options[2]}
      fourthOption={element.options[3]}
      pickOption={selectAnswer}
      selected={element.selected}
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
