import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Button = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
  cursor: pointer;
  filter: invert(95%) sepia(77%) saturate(2929%) hue-rotate(300deg)
    brightness(105%) contrast(94%);
  margin-left: 10px;

  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  border-color: #28d7fe;
  border-style: solid;
  border-width: 1px;
  overflow: auto;

  @media (max-width: 768px) {
    min-height: 300px;
    width: 90%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
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

export const Description = styled.div`
  color: #28d7fe;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
`;
