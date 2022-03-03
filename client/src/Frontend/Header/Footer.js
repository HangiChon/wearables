import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyles";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  //Scroll the page to the up when logo is clicked
  const handleClickScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MainContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Terms of Service</FooterLink>
              <FooterLink to="/">SLA</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Customer Care</FooterLinkTitle>
              <FooterLink to="/">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Account</FooterLinkTitle>
              <FooterLink to="/">Profile</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <Media>
          <MediaWrap>
            <Logo onClick={handleClickScroll} to="/">
              Wearable S
            </Logo>
            <CopyRight>
              Copyright © {new Date().getFullYear()} Logo. All Rights Reserved{" "}
            </CopyRight>
            <Icons>
              <IconLink href="/" target="_blank">
                <FaFacebook />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaInstagram />
              </IconLink>
            </Icons>
          </MediaWrap>
        </Media>
      </FooterWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: #454e51;
  color: #fff;
`;

const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterLinksWrapper = styled.div`
  display: flex;
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #fff;
  transition: 0.3s ease-out;
  &:hover {
    color: ${theme.accentColor};
  }
`;

const Media = styled.section`
  max-width: 1100px;
  width: 100%;
`;

const MediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`;

const Logo = styled(Link)`
  color: black;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: -3px;
`;

const CopyRight = styled.small`
  color: black;
  margin-bottom: 16px;
  line-height: 2;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const IconLink = styled.a`
  color: black;
  font-size: 24px;
  transition: 0.3s ease-out;
  &:hover {
    color: ${theme.accentColor};
  }
`;

export default Footer;
