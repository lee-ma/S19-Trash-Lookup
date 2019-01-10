import React, { Component } from 'react';
import styled from 'styled-components';

import { Banner, Searchbar, Result, Favourite } from './components';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      favourites: []
    };
  }

  clearSearchResults = () => {
    this.setState({
      searchResults: []
    });
  }

  getSearchResults = (data) => {
    this.setState({
      searchResults: data
    });
  }

  addToFavourites = (favouritedItem) => {
    let favourites = this.state.favourites;
    favourites.push(favouritedItem);

    this.setState({
      favourites
    });
  }

  removeFromFavourites = (unfavouritedItem) => {
    let favourites = this.state.favourites.filter((favourite) => {
      return favourite.title !== unfavouritedItem.title;
    });

    this.setState({
      favourites
    });
  }

  render() {
    return (
      <div className="App">
        <Banner/>
        <div style={{margin: '1em 1em'}}>
          <Searchbar getSearchResults={this.getSearchResults} clearSearchResults={this.clearSearchResults}/>
          {
            this.state.searchResults.map((searchResult, idx) => {
              return (
                <Result addToFavourites={this.addToFavourites} searchResult={searchResult} key={idx}/>
              )
            })
          }
          {
            this.state.favourites.length
            ?
            <div style={{backgroundColor: '#f6fef9'}}>
              <h1>Favourites</h1>
              {
                this.state.favourites.map((favourite, idx) => {
                  return (
                    <Favourite removeFromFavourites={this.removeFromFavourites} favourite={favourite} key={idx}/>
                  )
                })
              }
            </div>
            :
            <div></div>
          }
          
        </div>
      </div>
    );
  }
}

export default App;
