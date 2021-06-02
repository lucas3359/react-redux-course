//

import React, {useState} from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
  {
      label : 'Afrikaans',
      value : 'af'
  },

  {
      label : 'Arabic',
      value : 'ar'
  },

  {
      label : 'Hindi',
      value : 'hi'
  },

];


const Translate = ()=>{


    const[language, setLanguage] = useState(options[0])
    const[text,setText] = useState('')


    return(
      <div>
      <div className = 'ui form'>
      <div className = 'filed'>
      <label> Enter Text</label>
        <input value = {text} onChange = {(e)=> setText(e.target.value)}/>
        </div>
        </div>
        <div>{text}</div>
        <Dropdown
        label = 'Select a Language'
        selected = {language}
        onSelectedChange = {setLanguage}
        options = {options}/>
        <hr/>
        <h3 className = 'ui header'>Outpuit</h3>
        <Convert text = {text} language = {language}/>

      </div>



    )

}


export default Translate;