import styled from 'styled-components';


//Reference: https://www.w3schools.com/css/css_rwd_images.asp

export const Wrapper = styled.div`
    width:calc(100%);
    margin-left:auto;
    margin-right:auto;

    @media (min-width: 768px) {
        width:calc(100% - 32px);
  }

    @media (min-width: 992px) {
    
        width: calc(992px - 64px);
  }
`
export const ContentWrapper = styled.div `
  padding-top: 32px;
  padding-bottom: 0px;
`

export const SubContentWrapper = styled.div`
  padding-right: 16px;
  padding-left: 16px;
`

export const HeaderImage = styled.img`
    object-fit:cover;
    height: 100%;
  display: block;  
  
`

export const HeaderImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content:center;
    overflow: hidden;
`
export const TextRow = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
`

export const IFrameWrapper = styled.div`
margin-left: auto;
margin-right:auto;
    position: relative;
    overflow:hidden;
    max-width:480px;
    height:auto;
`

export const BlockQuote = styled.blockquote`
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: 768px){
      padding-top: 256px;
      padding-bottom: 256px;
  }
`

export const HR = styled.hr`
  padding-top: 32px;
  padding-bottom: 32px;
`