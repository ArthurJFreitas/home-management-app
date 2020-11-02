import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: column;
  padding: 10%;

  height: 100%;
  justify-content: space-between;
`;
export const DaysOfTheWeekWrapper = styled.View`
  width: 100%;
`;
export const DayWrapper = styled.View`
  width: 55%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ToDo = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
`;

export const Remove = styled.View``;

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
