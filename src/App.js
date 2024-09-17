import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import SignupPage from './pages/Auth/SignupPage';
import LoginPage from './pages/Auth/LoginPage';
import MeetingListPage from './pages/Meetings/MeetingListPage';
import MeetingDetailPage from './pages/Meetings/MeetingDetailPage';
import CreateMeetingPage from './pages/Meetings/CreateMeetingPage';
import MyMeetingsPage from './pages/Meetings/MyMeetingsPage';
import MarketListPage from './pages/Market/MarketListPage';
import MarketDetailPage from './pages/Market/MarketDetailPage';
import WriteReviewPage from './pages/Reviews/WriteReviewPage';
import EditReviewPage from './pages/Reviews/EditReviewPage';
import MyReviewsPage from './pages/Reviews/MyReviewsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* root path */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 회원가입 및 로그인 */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* 모임 관련 페이지 */}
        <Route path="/meetings" element={<MeetingListPage />} />
        <Route path="/meetings/:id" element={<MeetingDetailPage />} />  {/* 특정 모임 상세 페이지 */}
        <Route path="/meetings/create" element={<CreateMeetingPage />} />  {/* 모임 생성/수정 페이지 */}
        <Route path="/my-meetings" element={<MyMeetingsPage />} />  {/* 내가 참가/생성한 모임 리스트 */}

        {/* 마켓 관련 페이지 */}
        <Route path="/market" element={<MarketListPage />} />  {/* 마켓 리스트 페이지 */}
        <Route path="/market/:id/review" element={<MarketDetailPage />} />  {/* 특정 마켓 리뷰(디테일) 페이지 */}

        {/* 리뷰 관련 페이지 */}
        <Route path="/reviews/create" element={<WriteReviewPage />} />  {/* 리뷰 작성 페이지 */}
        <Route path="/reviews/edit/:id" element={<EditReviewPage />} />  {/* 리뷰 수정 페이지 */}
        <Route path="/my-reviews" element={<MyReviewsPage />} />  {/* 내가 쓴 리뷰 리스트 */}

        {/* 404 페이지 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
