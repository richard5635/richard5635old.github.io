import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'
import Link from './../components/Link'
import Section from './../components/Section'
import Card from './../components/WorkCard'

//Import Image data
import HeaderImg from './../assets/images/work07_thumbnail.jpg'
import Image01 from './../assets/images/portfolio01/01.jpg'
import Image02 from './../assets/images/portfolio01/02.jpg'

import Asset00 from './../assets/images/portfolio07/asset00.jpg'
import Asset01 from './../assets/images/portfolio07/asset01.png'
import Asset02 from './../assets/images/portfolio07/asset02.jpg'
import Asset03 from './../assets/images/portfolio07/asset03.jpg'
import Asset04 from './../assets/images/portfolio07/asset04.jpg'
import Asset05 from './../assets/images/portfolio07/asset05.jpg'

// Import typography components
import { Heading, Subheading, Header3, Header4, Header4b, Text, ImageCaption, Title, MidLimiter} from './../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage, HeaderImageWrapper,TextRow, IFrameWrapper, BlockQuote, HR  } from './../components/Layout'



export default class Portf07 extends React.Component {
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
                                <Title>LevioPole - A Mid-air Haptic Device</Title>
                            </div>
                            <div className="col-12 col-md-3">
                                <Header4b className="text-right">Research Student Project</Header4b>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-9">
                                <Text>This project started as an attempt to create a new way of creating a haptic feedback from Virtual Reality interactions. We call the device Leviopole, which is powered by drones. 

The content that I created is published on GitHub, and you can check it out <a href="https://github.com/richard5635/IH_WearableDrone">here</a>.</Text>
                            </div>
                            <div className="col-12 col-md-3">
                                <Text className="text-right">
                                    Unity<br />
                                    SteamVR<br/>
                                    HTC Vive

                                    </Text>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                        <div className="col-12 col-md-3">
                                <Header4b>Team</Header4b>
                                <Text>
                                    Tomoya Sasaki<br />
                                    Richard Sahala Hartanto<br/>
                                    Maark Liu
                                    </Text>
                            </div>
                            <div className="col-12 col-md-9">
                                <Header4b>Role - Unity Content Developer</Header4b>
                                <Text>
                                Created an interactive kayaking game by referring to past existing games and made it to work with Arduino and Unity.
                                    </Text>
                            </div>
                        </TextRow>

                        <HR/>

                        <TextRow className="row">
                            <div className="col-12 col-md-6">
                                <Subheading>Overview</Subheading>
                                <Text><i>[This project is currently being submitted to a conference, so more details about Leviopole itself will come after]</i></Text>
                            </div>
                            <div className="col-12 col-md-6">
                                <Text>
The content is called PaddleRun, an endless running game similar to existing iOS games. In this game, you are tasked to paddle and travel through a river for as far as you can. There will be obstacles and a time limit to add challenge factors. Also, there is a monster that will appear behind and chase after you for a few seconds. Therefore, you cannot travel slowly all the time.</Text>
                            </div>
                        </TextRow>

                        <TextRow className="row">
                            <div className="col-12 col-md-6">
                                <Subheading>Concept Background</Subheading>
                                <Text></Text>
                            </div>
                            <div className="col-12 col-md-6">
                                <Text>
                                The main purpose of this content is to create an immersive sports experience using Leviopole. Through interactions with virtual objects, Leviopole will return haptic feedbacks through propeller thrusts, giving a realistic sensation of either collision,  splash, or  force boosts.
Leviopole itself has the shape of a long pole with two larger ends, giving it a shape similar to dumbbells or paddles. Thus, it is more sensible to create a content involving these objects.</Text>
                            </div>
                        </TextRow>

                        <TextRow className="row">
                            <div className="col-12 col-md-6">
                                <Subheading>Creation Process</Subheading>
                            </div>
                        </TextRow>

                        <TextRow className="row">
                            <div className="col-12 col-md-6">
                                <Header4>Deciding the Gameplay and Algorithm</Header4>
                                <Text>The game starts with you sitting on a canoe on a river. You are allowed to move your paddle only after the countdown finishes. To advance, you simply have to paddle, just like how you would paddle in reality. When you paddle, a force will be applied on the canoe, increasing forward acceleration. Of course, the canoe would slow down and eventually stop if you do not paddle. Your paddle is your only way to interact with the virtual space, and to keep paddling, you must protect your paddle from colliding to obstacles.</Text>
                                <Text>Keep paddling while avoiding the obstacles, so you can advance faster to earn a high score!</Text>
                            </div>
                            <div className="col-12 col-md-6">
                            <Header4>Visual Design</Header4>
                                <Text>
                                LowPoly based graphics are chosen, mainly due to their simple but attractive looks, and they require lower processing compared to higher detailed graphics. </Text>
                            </div>
                            <div className="col-12">
                            <Header4>Hardware Communication</Header4>
                                <Text>
                                Haptic feedback would be accomplished by Leviopole, and inputs to Unity can be done using any devices deemed feasible. Ideally we need sensors that can detect the information below: 
    * Leviopole’s coordinate and orientation
    * User grasp on Leviopole </Text>
                            </div>
                        </TextRow>

                        <TextRow className="row">
                            <div className="col-12">
                                <Subheading>Used Assets</Subheading>
                            </div>
                        </TextRow>

                        <TextRow className="row">
                            <div className="col-6">
                            <a href="https://assetstore.unity.com/packages/templates/systems/steamvr-plugin-32647"><img src={Asset00} class="img-fluid"></img>
                                </a>    
                                <ImageCaption>SteamVR Plugin</ImageCaption>
                            </div>
                            <div className="col-6">
                            <a href="https://assetstore.unity.com/packages/vfx/shaders/free-skybox-cubemap-extended-107400"><img src={Asset01} class="img-fluid"></img>
                                </a>    
                                <ImageCaption>FREE Skybox- Cubemap Extended</ImageCaption>
                            </div>
                            <div className="col-6">
                            <a href="https://assetstore.unity.com/packages/3d/characters/creatures/level-1-monster-pack-77703"><img src={Asset02} class="img-fluid"></img>
                                </a>    
                                <ImageCaption>Level 1 Monster Pack</ImageCaption>
                            </div>
                            <div className="col-6">
                            <a href="https://assetstore.unity.com/packages/3d/environments/landscapes/nature-pack-extended-66146"><img src={Asset03} class="img-fluid"></img>
                                </a>    
                                <ImageCaption>Nature Pack (Extended)</ImageCaption>
                            </div>
                            <div className="col-6">
                            <a href="https://assetstore.unity.com/packages/tools/particles-effects/lowpoly-water-107563"><img src={Asset04} class="img-fluid"></img>
                                </a>    
                                <ImageCaption>LowPoly Water</ImageCaption>
                            </div>
                            <div className="col-6">
                            <a href="https://assetstore.unity.com/packages/3d/vehicles/sea/indian-kanoe-malecite-64668"><img src={Asset05} class="img-fluid"></img>
                                </a>    
                                <ImageCaption>Indian Canoe Malecite</ImageCaption>
                            </div>
                        </TextRow>

                        

                        <TextRow className="row">
                            <div className="col-12">
                                <Header3>Video</Header3>
                            </div>
                        </TextRow>

                        <div class="row">
                            <div class="col">
                            <IFrameWrapper>        
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/SJfZnC4kHrA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Qh3SDRaOR_4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </IFrameWrapper>
                            </div>
                            

                        </div>
                        
                    </div>
                    
                </SubContentWrapper>
            </ContentWrapper>
        );
    };
}