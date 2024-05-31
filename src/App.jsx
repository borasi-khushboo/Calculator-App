import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'
import Heading from './components/Heading'
import './App.css'

function App() {

  let [calVal, SetCalVal] = useState("");

  function OnClick(buttonText) {
    console.log(`${buttonText}  Button Clicked`);

    if (buttonText === 'AC') {
      SetCalVal("");
    }
    else if (buttonText === '=') {
      const result = eval(calVal);

      SetCalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      SetCalVal(newDisplayValue);

    }




  }

  return <>
    <Heading />
    <div data-id='calculator'>


      <Display displayValue={calVal} />

      <ButtonsContainer OnButttonClick={OnClick} />


    </div>
  </>
}

export default App
