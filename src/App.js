import logo from './logo.svg';
import './App.css';
// import NumberGuessingGame from './guess';
// import Assignment3 from './Assignment3';
import { FruitProvider } from './FruitContext';
import BaseComponent from './BaseComponent';

function App() {
  return (
    <div className="App">
      {/* <NumberGuessingGame/> */}
      {/* <Assignment3/> */}
      <FruitProvider>
      <BaseComponent />
    </FruitProvider>

    </div>
  );
}

export default App;
