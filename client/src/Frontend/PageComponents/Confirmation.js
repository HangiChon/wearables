import React from "react";
import styled from "styled-components";

const Confirmation = () => {
  let search = "order";
  let values = Object.keys(localStorage)
    .filter((key) => key.startsWith(search))
    .map((key) => localStorage[key]);

  const { fName, lName, orderNum, phoneNumber, email } = JSON.parse(values[0]);

  return (
    <Wrapper>
      <ReservationContainer>
        <Title>Your order is confirmed!</Title>
        <SeperateLine></SeperateLine>

        <Information>
          <b>Order Number</b> #: {orderNum}
        </Information>
        <Information>
          <b>first name #:</b> {fName}
        </Information>
        <Information>
          <b>Last Name#:</b> {lName}
        </Information>
        <Information>
          <b>phoneNumber: </b> {phoneNumber}
        </Information>
        <Information>
          <b>Email:</b> {email}
        </Information>
      </ReservationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;
const ReservationContainer = styled.div`
  border: 3px solid orange;
`;
const SeperateLine = styled.hr`
  width: 450px;
  border: 1px solid orange;
`;

const ImgWrapper = styled.div`
  padding-top: 30px;
`;
const Title = styled.div`
  font-family: var(--font-body);
  padding: 12px;
  font-weight: bold;
  color: orange;
`;
const Img = styled.img`
  width: 200px;
`;
const Information = styled.div`
  font-family: var(--font-body);
  font-size: 18px;
  padding: 12px;
`;

export default Confirmation;
