import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const SearchBar = ({onFormSubmit})=>{
  const [term,setTerm] = useState('');



    const  onSubmit=(event)=>{
        event.preventDefault();

        ///TODO: make sure we call callback from parent component this.setState({})
        onFormSubmit(term)
      }

      return(
        <div className = 'search-bar ui segment'>
          <form onSubmit = {onSubmit} className = 'ui form'>
            <div className = 'filed'>
              <label> Video Search</label>
              <input type = 'text'
              value = {term}
              onChange ={(e)=>setTerm(e.target.value)} />
            </div>
          </form>



        </div>

      );


};



export default SearchBar;
