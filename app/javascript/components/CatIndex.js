import React, { Component } from 'react';
import CatShow from './CatShow';
import axios from 'axios';

class CatIndex extends Component {
  state = {
    cats: []
  }

  componentDidMount = () => {
    axios.get('/cats.json', (res) => {
      console.log('RESPONSE: ', res)
      debugger;
    })
  }
  
  render(){
    const renderedCats = this.state.cats.forEach(cat => {
      return (
        <CatShow cat={cat} />
      )
    })

    return(
      <div>
        <h1>The list of all cats.</h1>
        {renderedCats}
      </div>
    )
  }
}

export default CatIndex;
