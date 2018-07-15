import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'
import Link from './../components/Link'
import Section from './../components/Section'
import Card from './../components/WorkCard'

//Import Image data
import HeaderImg from './../assets/images/work09_thumbnail.jpg'
import Image01 from './../assets/images/portfolio01/01.jpg'
import Image02 from './../assets/images/portfolio01/02.jpg'

import Asset01 from './../assets/images/portfolio08/asset01.png'
import Asset02 from './../assets/images/portfolio08/asset02.png'
import Asset03 from './../assets/images/portfolio08/asset03.png'

// Import typography components
import { Heading, Subheading, Header3, Header4, Header4b, Text, ImageCaption, Title, MidLimiter } from './../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage, HeaderImageWrapper, TextRow, IFrameWrapper, BlockQuote, HR } from './../components/Layout'



export default class Portf09 extends React.Component {
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
                                <Title>I Incubate</Title>
                            </div>
                            <div className="col-12 col-md-3">
                                <Header4b className="text-right">The University of Tokyo iiiExhibition Extra</Header4b>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-9">
                                <Text>I Incubate is a work created to be showcased in Seisakuten, a media art exhibition held twice annually in the University of Tokyo. Being the first of the two, the exhibition aims to prepare the exhibitors towards the second through hands-on experience and feedback.</Text>
                            </div>
                            <div className="col-12 col-md-3">
                                <Text className="text-right">Unity</Text>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-3">
                                <Header4b>Team</Header4b>
                                <Text>
                                    Richard Sahala Hartanto<br />
                                    Tetsuya Yokose<br />
                                </Text>
                            </div>
                            <div className="col-12 col-md-9">
                                <Header4b>Role - Creator</Header4b>
                                <Text>
                                    Being my first exhibition, I worked on almost the entire process, from the concept, coding until the exhibition preparations. I also worked on this application in parallel with designing the visual design for this exhibition.
                                </Text>
                            </div>
                        </TextRow>

                        <HR />

                        <TextRow className="row">
                            <div className="col-12 col-md-6">
                                <Subheading>Creation Process</Subheading>
                            </div>
                        </TextRow>

                        <TextRow className="row">
                            <div className="col-12 col-md-6">
                                <Header4>Concept</Header4>
                                <Text>If you have a display with an egg inside in front of you, what would you do to it? This work intends to encourage the user to explore different ways to interact with an egg while discovering various feedbacks. As a reward, the egg would respond by changing its color, and the creature hatching from inside the egg would have different shapes and color depending on the interaction given to the egg.</Text>
                            </div>
                            <div className="col-12 col-md-6">
                            <Header4>Coding</Header4>
                                <Text>
                                The coding was done using Unity in C#. The small birds were created using simple spheres and capsules, while the egg pattern was generated using photoshop. This work involves the manipulation of unity physics, shader properties, sound and touch inputs. </Text>
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
                                    
                                    <iframe src="https://player.vimeo.com/video/279267998" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                                </IFrameWrapper>
                            </div>

                        </div>

                    </div>

                </SubContentWrapper>
            </ContentWrapper>
        );
    };
}