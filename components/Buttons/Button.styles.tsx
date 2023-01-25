import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.8;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  color: white;

  display: flex;
  justify-content: center;
  align-content: center;
  gap: 15px;
  
`;

export const ButtonFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`
