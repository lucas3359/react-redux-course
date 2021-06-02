import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
{

  title: "What is React?",
  content: "React is a js fm"

},

{
  title: "why is React?",
  content: "React is the favorite js among engineers"


},

{
  title: "How to use React?",
  content: "Fucking open it"
}

]

;

const options = [
  {
    label : "The Color Red",
    value : "red"
  },
  {
    label : "The Color Green",
    value : "green"
  },
  {
    label : "The Color Blue",
    value : "blue"
  }

];

export default () => {

  return <div>
  <Translate />
  </div>
};
