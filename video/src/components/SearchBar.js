import React from 'react'
import ReactDOM from 'react-dom'


class SearchBar extends React.Component{
  state = {term :''};
  onInputChange= (event) =>{
    console.log(event.target.value);
    this.setState({term:event.target.value})


  };

  onFormSubmit=(event)=>{
    event.preventDefault();

    ///TODO: make sure we call callback from parent component this.setState({})
    this.props.onFormSubmit(this.state.term)
  }



  render(){
    return(
      <div className = 'search-bar ui segment'>
        <form onSubmit = {this.onFormSubmit} className = 'ui form'>
          <div className = 'filed'>
            <label> Video Search</label>
            <input type = 'text'
            value = {this.state.term}
            onChange ={this.onInputChange} />
          </div>
        </form>



      </div>

    );
  }

}


export default SearchBar;
