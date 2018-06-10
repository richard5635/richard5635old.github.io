// About.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'
import { ContentWrapper, SubContentWrapper, HeaderImage, HeaderImageWrapper,TextRow, IFrameWrapper, BlockQuote  } from './../components/Layout'

import Resume from './../assets/data/Resume.pdf'

const SocialMediaList = styled.ul`
  padding: 16px 0;
  text-align: center;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }


  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`

export default class About extends React.Component {
    render() {
        return (
            <Section centered>
                    <SubContentWrapper>
                    <div class="text-left">
                        <Heading>Richard Sahala Hartanto</Heading>
                        <Text>リチャード　サハラ　ハルタント</Text>

                        <Text><a href="https://drive.google.com/file/d/1Y7JRCeU_Qk4KNU1rYdkEpkx4VjvkYXrs/view?usp=sharing">Resume</a></Text>

                        <Text>A multidisciplinary engineer with an eye for design. Currently based in Tokyo, pursuing a Master's degree focusing on HCI and Computer Vision. He is able to work in a multicultural environment and practice
          </Text>

                        <Text>Contact via <a href="mailto:richard.sh093@gmail.com">richard.sh093@gmail.com</a> for projects, collaborations, or for just a cup of tea!</Text>
                    </div>


                    <SocialMediaList>

                        <li>
                            <Link href="https://www.linkedin.com/in/richardsh/">
                                <AwesomeIcon icon="linkedin" />
                            </Link>
                        </li>

                        <li>
                            <Link href="https://github.com/richard5635">
                                <AwesomeIcon icon="github" />
                            </Link>
                        </li>

                        <li>
                            <Link href="https://codepen.io/richard5635/">
                                <AwesomeIcon icon="codepen" />
                            </Link>
                        </li>
                    </SocialMediaList>
                </SubContentWrapper>

            </Section>
        )
    }
}