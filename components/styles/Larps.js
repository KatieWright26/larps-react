import styled from 'styled-components';

const LarpListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const LarpItem = styled.li`
  border: 1px solid #b030b0;
  flex: 1 1 auto;
  max-width: 48%;
  padding: 1.5em;
  text-transform: capitalize;
  h2 {
    margin: 0em;
  }
  ul {
    list-style: none;
  }
`;

export { LarpItem, LarpListStyle };
