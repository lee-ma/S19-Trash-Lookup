import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';
import ReactHtmlParser from 'react-html-parser';

const ResultContainer = styled.div`
  display: flex;
  margin-top: 2.5em;
`

const Title = styled.div`
  width: 50%;
  margin-left: 1em;
  padding-top: 0.25em;
`
const Desc = styled.div`
  width: 50%;
  margin-top: -1em;
`

class Result extends React.Component{

  ratingChanged = (newRating) => {
    if(newRating) {
      this.props.addToFavourites(this.props.searchResult);
    }
  }

  render() {
    const { searchResult } = this.props;
    return(
      <ResultContainer>
        <ReactStars
          count={1}
          onChange={this.ratingChanged}
          size={24}
          half={false}
          value={this.props.isFavourited ? 1 : 0}
          color2={ '#208c54' }
        />
        <Title>
          {searchResult.title}
        </Title>
        {/* For some reason, I can't properly render the escaped HTML from the JSON without the line below */}
        <Desc dangerouslySetInnerHTML={{__html: ReactHtmlParser(searchResult.body)}}/>
      </ResultContainer>
    )
  }
}

export default Result;