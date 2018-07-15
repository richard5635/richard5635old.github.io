// Portfolio.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import Container component
import Container from './../components/Container';
import Section from './../components/Section';
import Card from '../components/WorkCard';

// Import Card data
import workDataArray from '../assets/data/work_data';

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon';


// Import typography components
import { Heading, Subheading, Text, MidLimiter } from './../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage, HeaderImageWrapper,TextRow, IFrameWrapper, BlockQuote  } from './../components/Layout'

const PortfolioWrapper = styled(Section) `
  padding-top: 120px;
  padding-bottom: 0px;
`
const PortfolioGrid = styled.div`
  padding-bottom: 0px;
  display: grid;
  flex-wrap: wrap;
  grid-auto-rows : 600px;
  @media (max-width: 768px) {
    grid-template-columns : 100%;
  }
  @media (min-width: 768px) and (max-width: 960px) {
    grid-template-columns : 50% 50%;
  }
  @media (min-width: 961px) {
    grid-template-columns : 1fr 1fr;
  }

`
const HeaderWrap = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
    text-align:left;
    @media (min-width: 768px) {
      padding-left: 32px;
      padding-right: 32px;
    }
`


const PortfolioItem = styled(Link)`
  background: gray;
  width: 100%;
  transition: opacity .25s ease-in-out;
  object-fit:cover;

  &:focus,
  &:hover {
    opacity: 1;
  }

  @media (max-width: 767px) {
    /* height:500px; */
  }

  @media (min-width: 768px) and (max-width: 991px) {
    /* height:600px; */
  }

  @media (min-width: 992px) {
    /* height: 300px; */
  }
`

const PortfolioItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: cover;
`
const cardList = workDataArray.map((item, index) =>{
    return(
        <PortfolioItem to={item.codeLink}>
        <Card title={item.name} info={item.info} src={item.img} key={index} alt={item.alt} code={item.codeLink} demo={item.demoLink}/>
        </PortfolioItem>
    );
});

export default class Portfolio extends React.Component {
    render() {
        return (
            <ContentWrapper>
                <SubContentWrapper>
                    <Heading>Hi there!
                      <br/>I'm Richard, 
                      <br/>A student aiming to be a UX Engineer.
                    </Heading>
                    <Text>My works are presented below. You can tap the image to see details about them.</Text>
                    <MidLimiter><AwesomeIcon icon="angle-double-down" /></MidLimiter>
                </SubContentWrapper>

                <PortfolioGrid>{cardList}</PortfolioGrid>

            </ContentWrapper>
        )
    }
}
