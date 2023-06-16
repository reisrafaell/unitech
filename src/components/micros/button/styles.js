import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
color: #fff;
   
`;
export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 7px;

`;
export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.marginT || "0"};
  background-color: ${props=> props.backgroundColor || 'red'};
  border-radius: 3px;
  flex-direction: row;
  height: 40px;  
  width: 80%;
`;
