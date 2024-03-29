import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'
import Link from './../components/Link'
import Section from './../components/Section'
import Card from './../components/WorkCard'

//Import Image data
import HeaderImg from './../assets/images/work01_thumbnail.jpg'
import Image01 from './../assets/images/portfolio01/01.jpg'
import Image02 from './../assets/images/portfolio01/02.jpg'

// Import typography components
import { Heading, Subheading, Header3, Header4, Header4b, Text, ImageCaption, Title } from './../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage, HeaderImageWrapper, TextRow, IFrameWrapper, BlockQuote, HR } from './../components/Layout'



export default class Portf01 extends React.Component {
    render() {
        return (
            <ContentWrapper>
                <HeaderImageWrapper>
                    <HeaderImage src={HeaderImg} />
                </HeaderImageWrapper>

                <SubContentWrapper>
                    <div className="container-fluid">
                        <TextRow className="row">
                            <div className="col-12 col-md-9">
                                <Title>Invitation Card Project</Title>
                            </div>
                            <div className="col-12 col-md-3">
                                <Header4b className="text-right">High School Project</Header4b>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-9">
                                <Text>I was interested in graphic design, so I practiced using Photoshop and Illustrator, and made invitation cards for my friend's birthday party.</Text>
                            </div>
                            <div className="col-12 col-md-3">
                                <Text className="text-right">
                                    Photoshop<br />
                                    Illustrator
                                </Text>
                            </div>
                        </TextRow>
                        <HR/>
                    </div>
                </SubContentWrapper>

            </ContentWrapper>
        );
    };
}