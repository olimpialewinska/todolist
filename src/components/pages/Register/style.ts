import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 60px;
  border-radius: 10px;
  border-color: #28d7fe;
  border-style: solid;
  border-width: 1px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Header = styled.h1`
  color: #28d7fe;
  font-size: 60px;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  border-color: #28d7fe;
  border-style: solid;
  border-width: 1px;
  outline: none;
  font-size: 16px;
  color: #28d7fe;
  background-color: #000000;

  &::placeholder {
    color: #28d7fe;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  border-color: #28d7fe;
  border-style: solid;
  border-width: 1px;
  outline: none;
  font-size: 16px;
  color: #28d7fe;
  background-color: #000000;
  cursor: pointer;
  transition: 0.5s all;
  margin-top: 40px;

  &:hover {
    background-color: #28d7fe;
    color: #000000;
  }
`;

export const Link = styled.h1`
  color: #28d7fe;
  font-weight: bold;
  font-size: 24px;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    color: #fff;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const Text = styled.div`
  color: #28d7fe;
  font-size: 16px;
  margin-top: 8px;
`;
