import React from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`

const SearchInput = styled.input`
  font-size: 2em;
  border-radius: 2.5px;
  border: 1px solid grey;
  width: 100%;
  margin-right: 0.5em;
`

const SearchButton = styled.button`
  background-color: #208c54;
  font-size: 2em;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 2.5px;
  color: white;
`

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  doesKeywordsOrTitleOrBodyContainQuery = (response) => {

    return response.keywords.includes(this.state.query) ||
      response.title.includes(this.state.query) ||
      response.body.includes(this.state.query);
  }

  handleChange = (event) => {
    this.setState({query: event.target.value});

    if(!event.target.value.length) {
      this.props.clearSearchResults();
    }
  }

  handleSubmit = (event) => {

    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
      .then((response) => response.json())
      .then((responseJson) => {

        let searchResults = [];

        responseJson.forEach((response) => {

          if(this.doesKeywordsOrTitleOrBodyContainQuery(response)) {
            searchResults.push(response);
          }
        })

        this.props.getSearchResults(searchResults);
      })
      .catch(error => {
        console.log(error);
      });


    event.preventDefault();
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit = {this.handleSubmit}>
          <SearchInput type="text" value={this.state.query} onChange={this.handleChange}/>
          <SearchButton type='submit'><i className="fas fa-search fa-flip-horizontal"></i></SearchButton>
        </SearchForm>
      </div>
    )
  }
}

export default Searchbar;