import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Navbar = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  border-color: #28d7fe;
  border-style: solid;
  border-width: 1px;
  overflow: auto;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const Header = styled.h1`
  color: #28d7fe;
  font-size: 28px;
  margin: 0;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 14px;
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

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LogOutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
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

  &:hover {
    background-color: #28d7fe;
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const Email = styled.div`
  color: #28d7fe;
  font-size: 24px;
  margin: 0;
  font-weight: 700;
`;

export const Name = styled.div`
  color: #28d7fe;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    color: #fff;
  }
`;
