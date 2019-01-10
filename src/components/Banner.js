import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-image: linear-gradient(to right, #1b4f8a, #208c54);
  text-align: center;
  margin-top: 1em;
  padding: 1.5em;
`

const HeaderText = styled.h1`
  color: white;
  font-size: 3em;
`

const Banner = () => {
  return (
    <Background>
      <HeaderText>
        Toronto Waste Lookup
      </HeaderText>
    </Background>
  )
}

export default Banner;