import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      items:[]
    }
  } 
  componentDidMount(){
    var url = 'https://eshop-deve.herokuapp.com/api/v2/orders';
    fetch(url, {
      method: 'POST', // or 'PUT' // data can be `string` or {object}!
      headers:{
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ"
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  render(){
   
  return (
    <div className="App">
      <h1>
        hola
      </h1>
    </div>
  );
}
}

export default App;
