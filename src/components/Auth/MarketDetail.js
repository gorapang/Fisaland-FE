import React from "react";
import styled from "styled-components";

const StarRating = ({ rating, size = "20px" }) => {
  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#4A90E2" : "#D8D8D8"}
          width={size}
          height={size}
          className="mr-1"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </StarContainer>
  );
};

const MarketDetail = ({ market }) => {
  if (!market) {
    return <NoMarketInfo>맛집의 상세정보가 없습니다.</NoMarketInfo>;
  }

  return (
    <Container>
      <main>
        <h1>{market.name}</h1>
        <p>상암동 어쩌구 주소</p>

        <DetailCard>
          <div className="rating">
            <div className="rating-value">{market.rating}</div>
            <div>
              <StarRating rating={market.rating} size="24px" />
              <p>{market.reviewsCount} reviews</p>
            </div>
          </div>

          <div className="distribution">
            {market.ratingsDistribution.map((percentage, index) => (
              <div key={5 - index} className="distribution-item">
                <span>{5 - index}</span>
                <div className="bar">
                  <div
                    className="bar-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span>{percentage}%</span>
              </div>
            ))}
          </div>
        </DetailCard>

        <h2>Reviews</h2>
        <div className="reviews">
          {market.reviews.map((review, index) => (
            <ReviewCard key={index}>
              <div className="review-header">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
              <StarRating rating={review.rating} />
              <p>{review.text}</p>
            </ReviewCard>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default MarketDetail;

// Styled components
const Container = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 2rem;
`;

const StarContainer = styled.div`
  display: flex;
`;

const NoMarketInfo = styled.p`
  color: #6b7280;
  text-align: center;
  margin-top: 2rem;
`;

const DetailCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  .rating {
    display: flex;
    align-items: baseline;
    margin-bottom: 1rem;

    .rating-value {
      font-size: 2.5rem;
      font-weight: bold;
      margin-right: 1rem;
    }

    p {
      color: #6b7280;
      margin-top: 0.5rem;
    }
  }

  .distribution {
    .distribution-item {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;

      span {
        margin-right: 0.5rem;
      }

      .bar {
        flex-grow: 1;
        height: 0.5rem;
        background: #e5e7eb;
        border-radius: 0.25rem;
        margin: 0 0.5rem;
        position: relative;

        .bar-fill {
          height: 100%;
          background: #3b82f6;
          border-radius: 0.25rem;
        }
      }

      span:last-of-type {
        margin-left: 0.5rem;
        color: #6b7280;
      }
    }
  }
`;

const ReviewCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .review-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
    }

    span:last-of-type {
      color: #6b7280;
      font-size: 0.875rem;
    }
  }
`;
