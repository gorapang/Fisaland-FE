// src/pages/MarketDetailPage.js
import React from "react";
import Header from "../../components/Common/Header";
import MarketDetail from "../../components/Auth/MarketDetail";

const MarketDetailPage = () => {
  // 예시 데이터를 추가했습니다. 실제로는 이 데이터를 props로 전달받아야 합니다.
  const market = {
    name: "맥도널드 상암점",
    rating: 4.5,
    reviewsCount: 2000,
    ratingsDistribution: [60, 20, 10, 5, 5],
    reviews: [
      {
        author: "John Doe",
        date: "2024-09-01",
        rating: 5,
        text: "Great place! The food was amazing, and the service was excellent.",
      },
      {
        author: "Jane Smith",
        date: "2024-09-02",
        rating: 4,
        text: "Very good experience overall, but the wait time was a bit long.",
      },
      // 추가 리뷰를 여기에 추가할 수 있습니다.
    ],
  };

  return (
    <>
      <Header />
      <div className="bg-[#F9FAFA] min-h-screen">
        <MarketDetail market={market} />
      </div>
    </>
  );
};

export default MarketDetailPage;

/*
import React from "react";
import Header from "../../components/Common/Header";
import MarketDetail from "../../components/Auth/MarketDetail";

const MarketDetailPage = () => {
  return (
    <>
      <Header />
      <MarketDetail />
    </>
  );
};

export default MarketDetailPage;
*/
