import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'
import Link from './../components/Link'
import Section from './../components/Section'
import Card from './../components/WorkCard'

//Import Image data
import HeaderImg from './../assets/images/work06_thumbnail.jpg'
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
                                <Title>Tri-axial Tactile Sensor Prototype for Robot Skin</Title>
                            </div>
                            <div className="col-12 col-md-3">
                                <Header4b className="text-right">Undergraduate Thesis</Header4b>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                            <div className="col-12 col-md-9">
                                <Text>The PDF for my thesis can be seen  <a href="https://drive.google.com/open?id=1a13NeUU_OzmPcZ0lEHcxp86Ht9HYWrj2">here</a>.</Text>
                            </div>
                            <div className="col-12 col-md-3">
                                <Text className="text-right">
                                    Eagle<br />
                                    Solidworks<br/>
                                    Arduino<br/>
                                    Matlab<br/>
                                    Machining Tools<br/>
                                    3D Printer

                                    </Text>
                            </div>
                        </TextRow>
                        <TextRow className="row">
                        <div className="col-12 col-md-3">
                                <Header4b>Team</Header4b>
                                <Text>
                                    Sophon Somlor<br />
                                    Richard Sahala Hartanto<br/>
                                    Alexander Schmitt
                                    </Text>
                            </div>
                            <div className="col-12 col-md-9">
                                <Header4b>Role - Circuit Prototyping</Header4b>
                                <Text>
                                I designed the circuit board for mounting the sensor modules, was in charge of outsourcing the fabrication, and worked together with a doctor student to fabricate the sensor. 
                                    </Text>
                            </div>
                        </TextRow>

                        <HR/>

                        <TextRow className="row">
                            <div className="col-12">
                                <Subheading>Related Papers</Subheading>
                                <Text>Somlor, S. et al. (no date) ‘A Novel Tri-axial Capacitive-Type Skin Sensor Sophon Somlor , Richard Sahala Hartanto , Alexander Schmitz , and Shigeki Sugano A Novel Tri-axial Capacitive-Type Skin Sensor’.
                                </Text>
                                <Text>
                                Somlor, S. et al. (2015) ‘First Results of Tilted Capacitive Sensors to Detect Shear Force’, in Procedia Computer Science, pp. 101–106. doi: 10.1016/j.procs.2015.12.289.
                                </Text>
                                <Text>
                                Somlor, S. et al. (2014) ‘A prototype force sensing unit for a capacitive-type force-torque sensor’, in 2014 IEEE/SICE International Symposium on System Integration, SII 2014, pp. 684–689. doi: 10.1109/SII.2014.7028121.
                                </Text>
                            </div>
                        </TextRow>

                        
                    </div>
                    
                </SubContentWrapper>
            </ContentWrapper>
        );
    };
}