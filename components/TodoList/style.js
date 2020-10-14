import styled from 'styled-components';

export const ListWrapper = styled.div`
  opacity: ${props => props.isLoading ? '50%' : '100%' };
  width: 100%
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  min-width: fit-content;
  padding: 0;
  width: 75%;
`;
