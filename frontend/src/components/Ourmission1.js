import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ellipse from '../assets/img/Ellipse.svg';
import Misvis from '../assets/img/missvis.png';

const GlobalStyle = createGlobalStyle`
  body {
  }
`;

const BrodDiv = styled.div`
  display: flex;
  padding: 81px 20px;

  @media (min-width: 768px) {
    padding: 81px 70px;
  }
`;

const Outdivv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #151515;
    font-family: Sora;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 38.4px;
    letter-spacing: 0.5px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-size: 50px;
    }
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  p {
    display: flex;
    width: 100%;
    max-width: 565.443px;
    flex-direction: column;
    justify-content: center;
    color: #151515;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-top: 70px;

    p {
      font-size: 32px;
    }
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    color: #151515;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0.5px;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 70px;

    p {
      font-size: 18px;
    }
  }
`;

const Broddiv2 = styled.div`
  display: flex;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 120px 70px;
  }
`;

const Indiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: auto;
  }
`;


const Divder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 344px;
  height: 237px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #aeaeae;
  background: #fff;
  color: #fff;
  background: radial-gradient(circle at 0% 0%, #450079 50%, transparent 0%);
  background-position: 100% 50%;
  background-size: 400% 400%;
  transition: background 800ms ease-in-out;
.grid-child:hover {
  background-position: 0% 0%;
  color: #fff; /* You can keep this line if you want to change the text color on hover */
}


.grid-child span{
    font-family: DM Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 123%; /* 59.04px */
    letter-spacing: -1.44px;
    text-transform: capitalize; 
    color: #1B1B1B; 
}
.grid-child:hover span ,
.grid-child:hover p{
  color: #FFF;
}
.grid-child:hover svg circle{ 
  fill: #261549;
}
.grid-child:hover svg  path {
  stroke: #FFF; /* Change this to your desired hover color */
}
  div {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  }

  span {
    color: #1b1b1b;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 123%;
    letter-spacing: -0.2px;
    text-transform: capitalize;
  }

  p {
    color: #2f2f2f;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 123%;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    width: 344px;
    height: 237px;

    span {
      font-size: 40px;
    }

    p {
      font-size: 24px;
    }
  }
`;

const Ourmission1 = () => {
  return (
    <>
      <GlobalStyle />
      <BrodDiv className=" ">
        <Outdivv className='row'>
          <h1>Our Mission & Vision </h1>
          <Div1 className='col-md-6'>
            <p>
              We are committed to delivering high-quality products and innovative solutions to customers worldwide.
            </p>
          </Div1>
          <Div2 className='col-md-6'>
            <p>
              At Thara Group, our mission is to be a leading global trade expert, committed to delivering high-quality products to customers worldwide.
            </p>
            <p>
              Our vision is to be the preferred choice for consumers seeking quality products, utilizing innovation, ethical practices, and a customer-centric approach.
            </p>
          </Div2>
        </Outdivv>
      </BrodDiv>
      <Broddiv2>
        <Indiv>
        <div className=''>
    <img src={Misvis} alt='' className='img-fluid' />
  </div>
          <Divder>
            <div>
              <img className='Ellipse-img' src={Ellipse} alt='img' />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='42'
                height='42'
                viewBox='0 0 42 42'
                fill='none'
              >
                <path
                  d='M4.8829 29.0784L14.0669 20.2476L21.9389 27.8169L37.6829 12.6784M37.6829 12.6784H25.8749M37.6829 12.6784V24.0322'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>10+</span>
              <p>Companies in Thara</p>
            </div>
          </Divder>
          <Divder>
            <div>
              <img className='Ellipse-img' src={Ellipse} alt='img' />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='42'
                height='42'
                viewBox='0 0 42 42'
                fill='none'
              >
                <path
                  d='M4.8829 29.0784L14.0669 20.2476L21.9389 27.8169L37.6829 12.6784M37.6829 12.6784H25.8749M37.6829 12.6784V24.0322'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>40 Years</span>
              <p>of Successful Trading</p>
            </div>
          </Divder>
        </Indiv>
      </Broddiv2>
    </>
  );
}

export default Ourmission1;
