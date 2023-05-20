import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: #28d7fe;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 20px;
`;

export const Button = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
  cursor: pointer;
  filter: invert(1);

  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  color: #28d7fe;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: 0.5s all;

  &:hover {
    color: #fff;
  }
`;
