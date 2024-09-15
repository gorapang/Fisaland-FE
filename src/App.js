import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import SignupPage from './pages/Auth/SignupPage';
import LoginPage from './pages/Auth/LoginPage';
import MeetingListPage from './pages/Meetings/MeetingListPage';
import MeetingDetailPage from './pages/Meetings/MeetingDetailPage';
import CreateMeetingPage from './pages/Meetings/CreateMeetingPage';
import MyMeetingsPage from './pages/Meetings/MyMeetingsPage';
import MarketListPage from './pages/Market/MarketListPage';
import MarketReviewPage from './pages/Market/MarketDetailPage';
import WriteReviewPage from './pages/Reviews/WriteReviewPage';
import EditReviewPage from './pages/Reviews/EditReviewPage';
import MyReviewsPage from './pages/Reviews/MyReviewsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (root path) */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Signup and Login */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Meeting-related pages */}
        <Route path="/meetings" element={<MeetingListPage />} />
        <Route path="/meetings/:id" element={<MeetingDetailPage />} />  {/* Specific meeting detail page */}
        <Route path="/meetings/create" element={<CreateMeetingPage />} />  {/* Meeting creation/modification page */}
        <Route path="/my-meetings" element={<MyMeetingsPage />} />  {/* My meetings list */}

        {/* Market-related pages */}
        <Route path="/market" element={<MarketListPage />} />  {/* Market list page */}
        <Route path="/market/:id/review" element={<MarketReviewPage />} />  {/* Specific market review (detail) page */}

        {/* Review-related pages */}
        <Route path="/reviews/create" element={<WriteReviewPage />} />  {/* Review creation page */}
        <Route path="/reviews/edit/:id" element={<EditReviewPage />} />  {/* Review edit page */}
        <Route path="/my-reviews" element={<MyReviewsPage />} />  {/* My reviews list */}

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
