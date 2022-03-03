import styled from "styled-components";
import { NavLink } from "react-router-dom";

// *******************************//
//*DIVS DIVS DIVS DIVS DIVS DIVS *//
// *******************************//
export const Container = styled.div`
  border-top: thin solid;
`;

export const BannerContainer = styled.div``;

export const DetailsContainer = styled.div`
  display: flex;
  border-top: solid thin;
  padding-top: 100px;
  justify-content: space-around;
  flex-wrap: wrap;
  background: rgb(1, 19, 105);
  background: linear-gradient(
    357deg,
    rgba(1, 19, 105, 0) 67%,
    rgba(154, 153, 154, 0.5816527294511555) 100%
  );
`;

export const DetailWrapper = styled.div`
  width: fit-content;
  max-height: 500px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const NameWrapper = styled.div`
  width: 500px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  width: 20em;
  height: 26em;
  padding: 8px;
  margin: 5px;
  border-radius: 50px;
  position: relative;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const TextWrapper = styled.div`
  position: relative;
  top: -280px;
  left: 120px;
`;

export const SoldoutBanner = styled.div`
  background: red;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: white;
  font-size: 1.2em;
  font-weight: bolder;
  line-height: 2em;
  width: 100%;
  height: 40px;
  position: absolute;
  top: 23px;
  z-index: 100;
  opacity: 70%;
`;

// *******************************//
// IMG IMG IMG IMG IMG IMG IMG IMG//
// *******************************//
export const ProductImg = styled.img`
  max-width: 200px;
  position: relative;
  border-radius: 10px;
`;

export const DetailImage = styled.img`
  width: 20em;
  margin-left: 20px;
  max-height: 400px;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 0px 26px -10px rgba(0, 0, 0, 0.25); ;
`;

export const WelcomeImg = styled.img`
  width: 100%;
`;

// *******************************//
// TXT TXT TXT TXT TXT TXT TXT TXT//
// *******************************//

export const WelcomeText = styled.h1`
  font-size: 3em;
  color: white;

  text-shadow: 2px 2px black;
`;

export const ProductName = styled.p`
  padding: 5px;
  color: black;
`;

export const DetailName = styled.h1`
  font-size: 2em;
`;

export const ProductPrice = styled.p`
  font-weight: bolder;
`;
export const DetailPrice = styled.h1`
  position: relative;
  font-size: 3em;
  left: 200px;
  padding: 10px;
  background-color: rgba(54, 61, 64, 0.6);
  width: fit-content;
  color: rgba(255, 255, 255, 0.9);
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      top: -150px;
    }
    100% {
      opacity: 1;
      top: -200px;
    }
  }
`;

// *******************************//
// LINKS LINKS LINKS LINKS LINKS *//
// *******************************//
export const ProductDetails = styled(NavLink)`
  text-decoration: none;
  padding: 30px;
  background-color: rgba(54, 61, 64, 0.4);
  position: relative;
  top: 25%;
  z-index: 100;
  color: white;
  opacity: 0;
  transition: all ease-out 0.5s;
  :hover {
    top: 23%;
    opacity: 100;
  }
`;

export const BrandLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  top: 25%;
  z-index: 100;
  color: gray;
  :hover {
    color: orange;
  }
`;
