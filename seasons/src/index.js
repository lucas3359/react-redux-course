import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state = { lat: null, errorMessage: ''};
  // }

  state = {lat: null, errorMessage: '' };



// initial data loading, user position  etc--one time
  componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({lat : position.coords.latitude}),
          (err) => this.setState({errorMessage: err.message})
      );}

// // geo location , rerendeor(updates) itself
//   componentDidUpdate(){
//     console.log('My component was just updated - it rerendered!')
//   }
//
//
// //about to remove component and to clean
//   componentWillUnmount(){
//
//   }

renderContent() {

        if(this.state.errorMessage && !this.state.lat){
          return <div> Error:{this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
          return <SeasonDisplay lat = {this.state.lat}/>;
        }
        return   <Spinner  />;


}



//only to return jsx
  render(){
    return(
      <div className = "border red">
        {this.renderContent()}
      </div>

    )

  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')


);
