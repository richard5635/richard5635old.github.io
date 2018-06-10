// Typography.js
import styled from 'styled-components'

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 36px;
  font-weight: bold;
  vertical-align: text-bottom;
  padding: 0.5em 0;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const Subheading = styled.h2`
  font-size: 28px;
  vertical-align: text-bottom;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const Title = styled.h2`
  color: #888;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  vertical-align: text-bottom;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const Text = styled.p`
  margin-top: 0;
  font-size: 16px;

  text-align: left;

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  & + & {
    margin-top: 32px;
  }
`

export const Header3 = styled.h3 `
  font-size: 22px;
  vertical-align: text-bottom;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`
export const Header4 = styled.h4 `
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const Header4b = styled.h4 `
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const ImageCaption = styled.p `
  font-size: 14px;
  text-align: center;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const MidLimiter = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 24px;

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  & + & {
    margin-top: 40px;
  }
`