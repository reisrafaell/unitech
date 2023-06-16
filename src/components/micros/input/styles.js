import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Container = styled.View`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 38px;
  left: 140px;
`;
export const Label = styled.Text`
  color: #0F6FC1;
  text-align: left;
  font-size: 12px;
  width: 100%;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  color: #000;
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 0;
  border-bottom-color:  #0F6FC1;
  border-bottom-width: 2px;
  letter-spacing: 1px;
  border: ${(props) =>
    props.showError ? "1px solid #c60d00" : "1px solid #fff"};
`;
export const Button = styled.TouchableOpacity``;
