// src/pages/Meetings/MeetingListPage.jsx
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Common/Header'; // Import Header
import MeetingList from '../../components/Meetings/MeetingList'; // Import MeetingList

const PageContainer = styled.div`

`;

const LayoutContainer = styled.div`

`;

const MeetingListPage = () => {
  return (
    <PageContainer>
      <Header /> 
      <LayoutContainer>
        <MeetingList /> 
      </LayoutContainer>
    </PageContainer>
  );
};

export default MeetingListPage;
