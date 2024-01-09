import React, { useEffect, useState } from "react";

const NumberGuessingGame = (props) => {
  const [randomNumber, setRandomNumber] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [message, setMessage] = useState("");
 

  useEffect(() => {
   
    const num = Math.round(Math.random(100) * 20);
    setRandomNumber(num)
  }, []);

  const handleInputChange = (e) => {
   
    setInputNumber(e.target.value);
  };

  useEffect(() => {
    
    checkNumber();
  }, [inputNumber]);

  const checkNumber = () => {
    if (!inputNumber) {
       
        setMessage("Guess a number");
    }
    else if (inputNumber < randomNumber) {
     
      setMessage("you lost!");
     

     
    } else if (inputNumber > randomNumber) {
     
      setMessage("Number is more");
      
    
    } else {
     
      setMessage("Hurray! you won.");
     
    }
  };

  return (
    <div>
      <h3> Guess a number between 1 to 20</h3>
      <input
        type="number"
        min={0}
        max={20}
        value={inputNumber}
        onChange={handleInputChange}
      />
      <br />
      {message}
      
    </div>
  );
};

export default NumberGuessingGame;