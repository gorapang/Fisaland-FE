import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    const requestBody = {
      email: email,
      pw: password
    };

    try {
      const response = await fetch('http://localhost:8080/common/user/login', {
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

      // 로그인 성공 로직 추가(redirect)

    } catch (error) {
      console.error('Error during login:', error);
      // 로그인 에러 핸들링 추가
    }
  };

  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Form>
        <InputField 
          label="email" 
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <InputField 
          label="password" 
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          type="password" // Mask the password input
        />
        <ButtonGroup>
          <Button primary onClick={handleLogin}>로그인</Button> {/* Trigger handleLogin */}
        </ButtonGroup>
        <ButtonGroup>
          <Button>회원가입</Button>
        </ButtonGroup>
      </Form>
    </LoginContainer>
  );
}

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
}

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
