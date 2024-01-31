import React from 'react';
import styled from 'styled-components';
import Group from './Allsvgcomp.js';


const ResponsiveHeading = styled.h1`
  color: #151515;
  font-family: Sora;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px; /* 76.8% */
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divoutter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 90px 70px;
  gap: 70px;
  background: var(--BG-g1, linear-gradient(283deg, #B048FF -174.56%, rgba(145, 0, 255, 0.00) 109.23%));

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

const AboutSection = styled.section`
  color: #151515;
  font-family: 'Manrope', sans-serif;
  font-size: 1.2rem; /* Adjust the font size for smaller screens */
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
`;

const Sdiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  gap: 27px;
  & > *:not(span) {
    background-color: #fff;
    border-radius: 9.756px;

   
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Conbrod = styled.div`
  position: relative;
  width: 182.439px;
  height: 60px;
  border-radius: 9.756px;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  overflow: hidden;

  background: radial-gradient(circle at 0% 0%, #450079 50%, transparent 50%);
  background-position: 100% 50%;
  background-size: 400% 400%;
  transition: background 600ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    background-position: 0;

    svg path {
      fill: #fff;
      transition: fill 0.5s;
    }
    .fillcolr{
    background-position: 0;
    fill: #450079; 
    transition: fill 0.5s;
  

  }
  }


  @media (min-width: 768px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      grid-row: 1;
    }

    &:nth-child(4),
    &:nth-child(5) {
      grid-row: 2;
      justify-self: center; 
      justify-content: center;
  align-items: center;

    }

    &:nth-child(6) {
      grid-row: 3;
      justify-self: center; 
    }
  }
`;
const GroupStyle = styled.div`
  width: auto;
  height: 20.143px;
  flex-shrink: 0;
  background-color:white;
  &Conbrod:hover svg path{
   fill:white;
  }

`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 47px;
`;

function Homecomp() {
  return (
    <Divoutter>
      <ResponsiveHeading>Our Companies</ResponsiveHeading>

      <AboutSection>
        <Div>
          <InnerDiv>
            A trusted conglomerate with 10+ companies under its umbrella, offering a wide range of high-quality products and services across industries, from wholesale distribution to fashion to real estate, making your life easier and more enjoyable.
            <div className="arrow-container">
              <button className="btn-white">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  className="arrow"
                >
                  <path
                    d="M16.4583 8.14621L23.75 15.6462M23.75 15.6462L16.4583 23.1462M23.75 15.6462L6.25 15.6462"
                    stroke="#450079"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </InnerDiv>

          <ImageContainer>
            <Sdiv>
              <div><Conbrod>
                <Group style={GroupStyle} caseValue="case1" />
              </Conbrod></div>
              <div><Conbrod>
                <Group style={GroupStyle} caseValue="case2" />
              </Conbrod></div>
              <div><Conbrod>
                <Group style={GroupStyle} caseValue="case1" />
              </Conbrod></div>
              <div><Conbrod>
                <Group style={GroupStyle} caseValue="case1" />
              </Conbrod></div>
              <div><Conbrod>
                <Group style={GroupStyle} caseValue="case2" />
              </Conbrod></div>
              
              <span >
                       & more
              </span>          
            </Sdiv>
          </ImageContainer>
        </Div>
      </AboutSection>
    </Divoutter>
  );
}

export default Homecomp;