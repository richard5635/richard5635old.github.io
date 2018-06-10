import React from 'react';
import styled from 'styled-components';


import { Heading, Subheading, Header3, Header4, Header4b, Text, ImageCaption, Title } from './../components/Typography'

const CardWrapper = styled.div`
    position: relative;
    height:100%;
    overflow:hidden;
    background-size:cover;
    background-position:center;
    `

const CardReveal = styled.div`
    background: rgba(0,0,0,0.7);
    text-align:center;
    color:white;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transition: opacity .25s ease-in-out;
    &:hover {
    opacity: 1;
  }
`

const TextBox = styled.div`
  padding-top:128px;
  height:100%;

`

const PortfolioItemThumbnail = styled.img`
  object-fit: cover;
  height:100%;
  `

export default props =>{

    let demoBtn = null;
    if(props.demo !== ""){
        demoBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.demo}><i className="material-icons right">present_to_all</i> demo</a>);
    } 

    return(
    <CardWrapper style={{
        backgroundImage: `url(${props.src})`}}>
            
        <CardReveal>
            <TextBox>
            <Heading className="centered">{props.title}</Heading>
            <Header3>{props.info}</Header3>
            </TextBox>
        </CardReveal>
    </CardWrapper>
    );
}