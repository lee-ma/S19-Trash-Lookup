import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';
import ReactHtmlParser from 'react-html-parser';
import Result from  './Result';

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

class Favourite extends Result{

  ratingChanged = (newRating) => {
    if(newRating) {
      this.props.removeFromFavourites(this.props.favourite)
    }
  }

  render() {
    const { favourite } = this.props;
    return(
      <ResultContainer>
        <ReactStars
          count={1}
          onChange={this.ratingChanged}
          size={24}
          half={false}
          color1={ '#208c54' }
          color2={'gray'}
        />
        <Title>
          {favourite.title}
        </Title>
        {/* For some reason, I can't properly render the escaped HTML from the JSON without the line below */}
        <Desc dangerouslySetInnerHTML={{__html: ReactHtmlParser(favourite.body)}}/>
      </ResultContainer>
    )
  }
}

export default Favourite;