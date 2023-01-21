import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { nanoid } from 'nanoid'


function App() {

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
    .then(res => res.json())
    .then(data => setQuestions(data.results.map(result =>{
      return (
        { question: result.question,
          options: [...result.incorrect_answers, result.correct_answer],
          answer: result.correct_answer,
          selected: "",
          id: nanoid()
        }
      )
    })))
}, [])  

  const [quizStatus, setQuizStatus] = React.useState({status: false, correct: 0})

  const [questions, setQuestions] = React.useState([])

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

  function checkAnswers() {
    let counter = 0
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].selected === questions[i].answer) {
        counter++
      }
    }
    setQuizStatus({status: true, correct: counter})
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
      <button onClick={checkAnswers} className='check--button'> Check answers </button>
      {quizStatus.status && <p> You got {quizStatus.correct} out of 5!</p>}
    </div>
  );
}

export default App;
