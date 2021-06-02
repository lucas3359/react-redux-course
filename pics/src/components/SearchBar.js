import React from 'react'


class SearchBar extends React.Component{
  state = {term: ''};

  //
  // onInputClick(){
  //   console.log('Input was clicked')
  // }

  onFormSubmit =(event)=>{
    event.preventDefault();
    this.props.ontheSubmit(this.state.term);
  };

  render(){
    return(
     <div className = "ui segment">
       <form  onSubmit={this.onFormSubmit} className = "ui form">
        <div className = "filed">
          <label> Image Search</label>
         <input
         type = "text"
         value = {this.state.term}
         onChange = {(e)=> this.setState({term: e.target.value})}
         />
         </div>
       </form>
     </div>

   );
 }


}

export default SearchBar
