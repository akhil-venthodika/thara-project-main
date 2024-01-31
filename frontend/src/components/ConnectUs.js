import React from 'react';
import styled from 'styled-components';

  const BorderDiv = styled.div`
  padding: 140.214px 70px;
 

  @media (max-width: 768px) {
    padding: 70px 20px; 
  }
`;

const AlignmentDiv = styled.div`
  display: flex;
  padding: 56px 184px;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(90deg, #CD8BFF -54.61%, rgba(255, 255, 255, 0.00) 169.53%);

  @media (max-width: 1200px) {
    padding: 56px 20px; 
  }
`;

const InnerDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const Paragraph = styled.p`
  color: #151515;
  font-family: Sora;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px; /* 96% */
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 24px; 
    line-height: 1.2;
  }
`;

export default function ConnectUs() {
  return (
    <BorderDiv>
      <AlignmentDiv>
        <InnerDiv>
          <Paragraph>Connect with Us</Paragraph>
          <svg xmlns="http://www.w3.org/2000/svg" width="257" height="33" viewBox="0 0 257 33" fill="none">
            <path d="M0.194518 7.23916C90.214 0.793396 223.33 3.59807 255.93 1.71499C260.399 1.45683 80.2141 12.2117 70.0499 32.2298" stroke="#450079" strokeWidth="3"/>
          </svg>
        </InnerDiv>
    
        <div className="arrow-container">
          <button className="btn-purple">Let’s Talk
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" className='arrow'>
              <path d="M17.4016 8L24.6932 15.5M24.6932 15.5L17.4016 23M24.6932 15.5L7.19324 15.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </AlignmentDiv>
    </BorderDiv>
  );
}
