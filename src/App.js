import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <Question 
      text={"How would one say goodbye in Spanish?"}
      firstOption={"Adios"}
      secondOption={"Hola"}
      thirdOption={"Au Revior"}
      fourthOption={"Salir"}
      />
    </div>
  );
}

export default App;
