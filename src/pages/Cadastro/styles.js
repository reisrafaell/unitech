import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  gap: 7px;
`;

export const ImageFooter = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
