import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Import Container component
import Container from './../../components/Container'
import Link from './../../components/Link'
import Section from './../../components/Section'
import Card from './../../components/WorkCard'

//Import Image data
import HeaderImg from './../../assets/images/work01_thumbnail.jpg'

// Import typography components
import { Heading, Subheading, Header3, Text } from './../../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage } from './../../components/WorkDetailLayout'



export default class Portf01 extends React.Component {
    render() {
        return (
            <ContentWrapper>
                <HeaderImage src={HeaderImg} />
                <SubContentWrapper>
                    <Header3>Testing</Header3>
                    <Text>Testing everything here because I have to see if it is actually working there.</Text>
                </SubContentWrapper>
            </ContentWrapper>
        );
    };
}