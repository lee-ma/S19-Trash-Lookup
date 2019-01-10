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
`

class Result extends React.Component{

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
        <Desc dangerouslySetInnerHTML={{__html: ReactHtmlParser(favourite.body)}}/>
      </ResultContainer>
    )
  }
}

export default Result;