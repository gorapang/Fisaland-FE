// src/components/MeetingCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F4F4F6;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const DetailsContainer = styled.div`
  flex: 2;
  padding: 0 16px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #1C1D22;
`;

const Details = styled.p`
  font-size: 14px;
  color: #3C3F4A;
`;

const JoinButton = styled.button`
  background-color: #607AFB;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const MeetingCard = ({ title, location, host, date, image }) => {
  return (
    <CardContainer>
      <Image src={image} alt="Event image" />
      <DetailsContainer>
        <Title>{title}</Title>
        <Details>
          위치: {location}<br />
          주최자: {host}<br />
          일시: {date}
        </Details>
      </DetailsContainer>
      <JoinButton>Join</JoinButton>
    </CardContainer>
  );
};

export default MeetingCard;
