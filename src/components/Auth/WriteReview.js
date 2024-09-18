import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MarketReview = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(5.0);
  const [review, setReview] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/reviews", { score, review });
      navigate("/market/:id/review");
    } catch (error) {
      console.error("리뷰 저장 중 오류 발생:", error);
    }
  };

  return (
    <ReviewContainer>
      <FormContainer>
        <Title>맛집 리뷰 작성</Title>
        <Label>점수</Label>
        <StarRating rating={score} onRate={setScore} />
        <Label>리뷰</Label>
        <TextArea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="리뷰를 적어주세요"
        />
        <SubmitButton onClick={handleSubmit}>리뷰 쓰기</SubmitButton>
      </FormContainer>
    </ReviewContainer>
  );
};

const StarRating = ({ rating, onRate }) => {
  const [tempRating, setTempRating] = useState(rating);

  const handleClick = (index) => {
    // Update the rating based on click count
    if (tempRating === index) {
      onRate(index - 0.5); // Remove star
    } else if (tempRating < index + 0.5) {
      setTempRating(index + 0.5); // Set to half star
      onRate(index + 0.5);
    } else {
      setTempRating(index); // Set to full star
      onRate(index);
    }
  };

  return (
    <StarContainer>
      {[0, 1, 2, 3, 4].map((index) => (
        <React.Fragment key={index}>
          <Star
            onClick={() => handleClick(index + 1)}
            fill={rating >= index + 1 ? "#4A90E2" : "#D8D8D8"}
          >
            ★
          </Star>
          <HalfStar
            onClick={() => handleClick(index + 0.5)}
            fill={rating > index && rating < index + 1 ? "#4A90E2" : "#D8D8D8"}
          >
            ☆
          </HalfStar>
        </React.Fragment>
      ))}
    </StarContainer>
  );
};

// Styled Components
const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9fafb;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 600px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #1c1c21;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: medium;
  color: #1c1c21;
  margin-bottom: 8px;
  display: block;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #edf0f2;
  margin-bottom: 20px;
  font-size: 16px;
  color: #3d404a;
  resize: none;
  outline: none;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 20px;
  background-color: #617afa;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4e65d9;
  }
`;

const StarContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Star = styled.span`
  font-size: 24px;
  color: ${(props) => props.fill};
  cursor: pointer;
  margin-right: 0;
  position: relative;
`;

const HalfStar = styled.span`
  font-size: 24px;
  color: ${(props) => props.fill};
  cursor: pointer;
  position: absolute;
  left: 0;
`;

export default MarketReview;
