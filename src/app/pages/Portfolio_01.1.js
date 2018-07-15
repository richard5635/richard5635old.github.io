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

                        <blockquote class="blockquote text-center">

                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        <TextRow className="row">
                            <div className="col">
                                <Header3>This is Header 3</Header3>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col">
                                <img src={Image01} class="img-fluid"></img>
                                <ImageCaption>Title goes here </ImageCaption>
                            </div>
                            <div className="col">
                                <img src={Image01} class="img-fluid"></img>
                                <ImageCaption>Title goes here </ImageCaption>
                            </div>
                        </TextRow>
                        <div class="row">
                            <div class="col">
                            <IFrameWrapper>
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Ys-VbJjnNw0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </IFrameWrapper>
                            </div>

                        </div>
                        <IFrameWrapper>
                        <div class="sketchfab-embed-wrapper"><iframe width="640" height="480" src="https://sketchfab.com/models/452b10cb0d8e48fe93c5adacfc451bb9/embed?autostart=1" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe> </div>
                            </IFrameWrapper>
                        
                    </div>
                    
                </SubContentWrapper>
            </ContentWrapper>
        );
    };
}