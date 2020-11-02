import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: column;
  padding: 10%;

  height: 100%;
  justify-content: space-between;
`;

export const DayContainer = styled.View`
  width: 55%;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddToDoWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: #77056d;

  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;
