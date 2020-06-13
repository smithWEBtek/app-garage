// import React from 'react';

// export default class Search extends React.Component {
//   render() {
//     return (
//       <div className="ui raised segment no padding">
//         <form method="GET" action="search">
//           <div className="ui fluid icon transparent large input">
//             <input name="query" type="text" placeholder="Search apps..." autoComplete="off" />
//             <button type="submit">
//               <i className="search icon"></i>
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import axios from 'axios';
import CatIndex from './CatIndex';
import SearchResult from './SearchResult'

export default class Search extends Component {
  state = { loading: false, results: [] };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ loading: true });
    if (value.length > 0) { 
      axios.get('/search.json', { params: { query: value } })
        .then(res => this.setState({ loading: false, results: res.data }))
        .catch(() => this.setState({ loading: false, results: [] }));
    } else {
      this.setState({ loading: false, results: [] });
    }
  }

  render() {
    return (
      <div className="ui raised segment no padding">
        <CatIndex cats={this.state.cats} />
        <form method="GET" action="search">
          <div className="ui fluid icon transparent large input">
            <input name="query" type="text" placeholder="Enter search terms" onChange={this.onChange} autoComplete="off" />
            <button type="submit">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
        <SearchResult result={this.state.results} />
      </div>
    )
  }
}
