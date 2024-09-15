// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State to hold email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleLogin = async () => {
    const requestBody = {
      email: email,
      pw: password,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/common/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // 로그인 성공 로직 (redirect) 추가

    } catch (error) {
      console.error('Error during login:', error);
      // 로그인 실패 로직 추가
    }
  };

  const goToSignup = () => {
    navigate('/signup'); 
  };

  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Form>
        <InputField 
          label="이메일" 
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField 
          label="비밀번호" 
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <ButtonGroup>
          <Button primary onClick={handleLogin}>로그인</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={goToSignup}>회원가입</Button> {/* Navigate to signup on click */}
        </ButtonGroup>
      </Form>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  max-width: 400px;
  width: 100%; 
  margin: 40px auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1C1D22;
  margin-bottom: 16px;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  outline: none;

  background-color: ${({ primary }) => primary ? '#607AFB' : '#EEEFF2'};
  color: ${({ primary }) => primary ? '#F9FAFA' : '#1C1D22'};
`;

const InputField = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <StyledInput 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </Field>
  );
};

const Field = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #1C1D22;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background-color: #EEEFF2;
  font-size: 1rem;
  color: #1C1D22;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: #3C3F4A;
  }
`;
