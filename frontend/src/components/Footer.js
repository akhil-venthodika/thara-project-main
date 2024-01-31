import React from 'react';
import styled from 'styled-components';
import tharalogo from '../assets/img/tharalogo.png';
import phoneIcon from '../assets/img/phone-vibrate-fill.png';
import emailIcon from '../assets/img/entypo_email.png';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png';
import youtube from '../assets/img/youtube.png';

import { Link } from 'react-router-dom';


const FooterWrapper = styled.footer`
  padding: 100px 0 0;
  background-color: #450079;
  color: #fff;
  position: relative;
  z-index:-2 ;
`;

const FooterBody = styled.div`
  width: 100%;
  padding: 30px 0 0px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const FrameWork = styled.div`
  padding-bottom: 70px;
`;

const LogoImage = styled.img`
  width: 150px; 
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const QuickLinks = styled.div`
  h5 {
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  h5 {
    margin-bottom: 10px;
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 10px;
      font-size: 16px;
    }
  }
`;

const ContactIcon = styled.img`
  margin-right: 10px;
`;

const ContentCol = styled.div`
  p {
    font-size: 16px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Attribution = styled.div`
  span {
    display: flex;
    align-items: flex-start;
    gap: 882px;

    p {
      color: #B57BE1;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 38.4px; /* 213.333% */
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 768px) {
    span {
      gap: 16px;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterBody>
        <FrameWork>
          <Row>
            <Col>
              <LogoImage src={tharalogo} alt="Thara Logo" />
              <p>11/321, Thara Appartments, Hospital road, Perinthalmanna, Malappuram, Kerala, 679322</p>
            </Col>
            <Col>
              <QuickLinks>
                <h5>Quick Links</h5>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Career">Career</Link>
                <Link to="/Contact">Contact Us</Link>
              </QuickLinks>
            </Col>
            <Col>
              <ContactInfo>
                <h5>Contact Us</h5>
                <span>
                  <ContactIcon src={emailIcon} alt="Email" />
                  <Link to="mailto:support@thara.co.in">support@thara.co.in</Link>
                </span>
                <span>
                  <ContactIcon src={phoneIcon} alt="Phone" />
                  <Link to="tel:+919447025701">+91 9447025701</Link>
                </span>
              </ContactInfo>
            </Col>
            <Col>
              <ContentCol>
                <SocialIcons>
                  <Link to=""><ContactIcon src={facebook} alt="Facebook" /></Link>
                  <Link to=""><ContactIcon src={insta} alt="Instagram" /></Link>
                  <Link to=""><ContactIcon src={youtube} alt="YouTube" /></Link>
                </SocialIcons>
              </ContentCol>
            </Col>
          </Row>
        </FrameWork>
        <Attribution>
          <span><p>C© 2023 Thara & Co</p>
          <p>Designed by Akhil Venthodika</p></span>
        </Attribution>
      </FooterBody>
    </FooterWrapper>
  );
}

export default Footer;