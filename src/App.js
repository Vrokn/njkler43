import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFilter: '',
    }
  }
  updateSearch = (event) => {
    this.setState({ searchFilter: event.target.value })
  }
  render() {
    let filteredTerms = posts.filter((post) => {
      return post.title.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) !== -1;
    })
    return (
      <div>
        <div className="filter">
          <input value={this.state.searchFilter} type="text" placeholder="Ingresa el término de búsqueda" 
          onChange={this.updateSearch.bind(this)} />
        </div>
        <ul>
          {filteredTerms.map((post) =>
            <li><a href={post.url}><img src={post.image}  alt={post.title}/></a>
              <p>{post.title}</p></li>)}
        </ul>
      </div>
    )
  }
}


export default App


