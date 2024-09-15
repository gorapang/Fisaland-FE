import React, { useState } from 'react';
import styled from 'styled-components';

const Signup = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '', // Renamed to match the API requirement
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    userClass: 'admin', // Default value for userClass
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const requestBody = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      userClass: formData.userClass,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/common/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      // Handle successful signup (e.g., redirect to login page)
      // Add your logic here

    } catch (error) {
      console.error('Error during signup:', error);
      // Handle signup error (e.g., show error message)
    }
  };

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <Form>
        <InputField 
          label="이름" 
          placeholder="이름을 입력해주세요."
          name="username" // Use "username" to match the API requirement
          value={formData.username}
          onChange={handleChange}
        />
        <InputField 
          label="이메일" 
          placeholder="이메일을 입력해주세요."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField 
          label="비밀번호" 
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField 
          label="비밀번호 확인" 
          placeholder="비밀번호를 다시 입력해주세요."
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <InputField 
          label="전화번호" 
          placeholder="전화번호를 입력해주세요."
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <ButtonGroup>
          <Button primary onClick={handleSignup}>회원가입</Button>
        </ButtonGroup>
      </Form>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  max-width: 512px;
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

const InputField = ({ label, placeholder, name, value, onChange, type = "text" }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <StyledInput 
        type={type} 
        name={name}
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
