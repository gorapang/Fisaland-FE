import React from "react";
import styled from "styled-components";

const MarketList = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>맛집 리스트</Title>
        <Subtitle>Delicious food, delivered with Uber</Subtitle>
      </TitleContainer>

      <RestaurantGrid>
        {[
          {
            name: "Chipotle",
            category: "Mexican",
            image:
              "https://cdn.usegalileo.ai/stability/637ab6c9-2b6a-4241-a2a7-62b0402518b1.png",
          },
          {
            name: "Panda Express",
            category: "Chinese",
            image:
              "https://cdn.usegalileo.ai/stability/7c0e27fa-b174-48a4-a84d-103c116d5d31.png",
          },
          {
            name: "Little Caesars",
            category: "Pizza",
            image:
              "https://cdn.usegalileo.ai/stability/20921014-ce44-4117-9382-6132593e434e.png",
          },
          {
            name: "Wendy's",
            category: "Fast Food",
            image:
              "https://cdn.usegalileo.ai/stability/8c666a56-aaff-419e-9f14-6e4940f74279.png",
          },
        ].map((restaurant, index) => (
          <RestaurantCard key={index}>
            <RestaurantImage
              style={{ backgroundImage: `url(${restaurant.image})` }}
            />
            <RestaurantInfo>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantCategory>{restaurant.category}</RestaurantCategory>
            </RestaurantInfo>
          </RestaurantCard>
        ))}
      </RestaurantGrid>
    </Container>
  );
};

export default MarketList;

const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1c1d22;
  margin-bottom: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #3c3f4a;
  text-align: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.div`
  background-color: #eeeff2;
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.p`
  font-size: 1rem;
  color: #1c1d22;
  font-weight: 500;
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
  gap: 16px;
`;

const RestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
`;

const RestaurantImage = styled.div`
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RestaurantName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #1c1d22;
`;

const RestaurantCategory = styled.p`
  font-size: 0.875rem;
  color: #3c3f4a;
`;

/* 백엔드에서 데이터 가져오기
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MarketList = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [restaurants, setRestaurants] = useState([]); // State to hold restaurant data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/markets`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <TitleContainer>
        <Title>맛집 리스트</Title>
        <Subtitle>Delicious food, delivered with Uber</Subtitle>
      </TitleContainer>

      <RestaurantGrid>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index}>
            <RestaurantImage
              style={{ backgroundImage: `url(${restaurant.image})` }}
            />
            <RestaurantInfo>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantCategory>{restaurant.category}</RestaurantCategory>
            </RestaurantInfo>
          </RestaurantCard>
        ))}
      </RestaurantGrid>
    </Container>
  );
};

export default MarketList;

// Styled components definitions (same as before)
const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1c1d22;
  margin-bottom: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #3c3f4a;
  text-align: center;
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
  gap: 16px;
`;

const RestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
`;

const RestaurantImage = styled.div`
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RestaurantName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #1c1d22;
`;

const RestaurantCategory = styled.p`
  font-size: 0.875rem;
  color: #3c3f4a;
`;

*/
