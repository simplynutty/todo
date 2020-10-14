import styled from 'styled-components';

export const Item = styled.li`
  background-color: ${props => props.isComplete ? '#D6FDD0' : (props.isOverdue ? '#F8CECD' : '#F3F3F3') };
  display: flex;
  margin: 10px;
  padding: 5px;
`;

export const Checkbox = styled.span`
  box-sizing: border-box;
  margin: 0;
`;

export const Description = styled.span`
  flex-grow: 1;
  margin: 0 10px;
`;

export const DueDate = styled.span`
  border: 1px solid #000000;
  margin: 0;
  text-align: center;
  width: 100px;
`;