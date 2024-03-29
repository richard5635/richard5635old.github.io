import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'
import Link from './../components/Link'
import Section from './../components/Section'
import Card from './../components/WorkCard'

//Import Image data
import HeaderImg from './../assets/images/work08_thumbnail.jpg'
import Image01 from './../assets/images/portfolio01/01.jpg'
import Image02 from './../assets/images/portfolio01/02.jpg'

import Asset01 from './../assets/images/portfolio08/asset01.png'
import Asset02 from './../assets/images/portfolio08/asset02.png'
import Asset03 from './../assets/images/portfolio08/asset03.png'

// Import typography components
import { Heading, Subheading, Header3, Header4, Header4b, Text, ImageCaption, Title, MidLimiter } from './../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage, HeaderImageWrapper, TextRow, IFrameWrapper, BlockQuote, HR } from './../components/Layout'



export default class Portf08 extends React.Component {
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
                                <Title>Think-Think, Minigame by Hanamaru Lab</Title>
                            </div>
                            <div className="col-12 col-md-3">
                                <Header4b className="text-right">Internship Project</Header4b>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-9">
                                <Text>Think! Think! is the free educational app to help improve your children’s thinking ‘sense’,
their problem solving and critical thinking skills.
Supervised by an elite team of education specialists in Japan,
it has become Japan’s leading educational app for children, with over 50,000 active users.</Text>
                            </div>
                            <div className="col-12 col-md-3">
                                <Text className="text-right">
                                    Unity

                                    </Text>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-3">
                                <Header4b>Team</Header4b>
                                <Text>
                                    Naoki Kosaka (Supervisor)<br />
                                    Richard Sahala Hartanto<br />
                                </Text>
                            </div>
                            <div className="col-12 col-md-9">
                                <Header4b>Role - Unity Game Developer</Header4b>
                                <Text>
                                    I interned in Hanamaru Lab in once a week basis.
                                    During my intern, I mainly used Unity's 2D Tools with minimum reliance on Physics Engine. Turnblocks was my first game created using Unity. While receiving strict feedbacks and iteratively improving the game in its UX and scripts, I spent half a year to finish it. Thanks to that experience, however, I was able to complete SpotDiff and Monomaze in approximately one or two months each.
                                </Text>
                            </div>
                        </TextRow>

                        <HR />

                        <TextRow className="row">
                            <div className="col-12">
                                <Subheading>Games Developed</Subheading>
                            </div>
                            <div className="col-6">
                            <img src={Asset01} class="img-fluid"></img>
                                <ImageCaption>TurnBlocks</ImageCaption>
                            </div>
                            <div className="col-6">
                            <img src={Asset02} class="img-fluid"></img>
                                <ImageCaption>SpotDiff</ImageCaption>
                            </div>
                            <div className="col-6">
                            <img src={Asset03} class="img-fluid"></img>
                                <ImageCaption>Monomaze</ImageCaption>
                            </div>
                        </TextRow>

                        <HR />

                        <TextRow className="row">
                            <div className="col-12">
                                <Subheading>Video</Subheading>
                            </div>
                        </TextRow>

                        <div class="row">
                            <div class="col">
                                <IFrameWrapper>
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/EKn6xByDtkQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                                </IFrameWrapper>
                            </div>
                        </div>
                    </div>

                </SubContentWrapper>
            </ContentWrapper>
        );
    };
}