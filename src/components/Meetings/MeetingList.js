// src/components/MeetingList.js
import React from 'react';
import styled from 'styled-components';
import MeetingCard from './MeetingCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const MeetingList = () => {
  // Sample data for meetings, you can replace this with dynamic data later
  const meetings = [
    {
      id: 1,
      title: 'McDonald Lunch Party',
      location: '맥도날드 상암점',
      host: '박정주',
      date: '2024-09-02 13:00',
      image: 'https://via.placeholder.com/120'
    },
    {
      id: 2,
      title: 'Pizza Night',
      location: '피자헛 강남점',
      host: '김성호',
      date: '2024-09-05 18:30',
      image: 'https://via.placeholder.com/120'
    },
    {
      id: 3,
      title: 'Sushi Feast',
      location: '스시야 홍대점',
      host: '오재웅',
      date: '2024-09-10 19:00',
      image: 'https://via.placeholder.com/120'
    }
  ];

  return (
    <ListContainer>
      {meetings.map(meeting => (
        <MeetingCard key={meeting.id} {...meeting} />
      ))}
    </ListContainer>
  );
};

export default MeetingList;
