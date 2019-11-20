import styled from 'styled-components';

const CharacterSection = styled.section``;
const CharacterArticle = styled.article`
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  margin: 1.5em 0;

  > * {
    margin: 0;
  }
`;

export { CharacterArticle, CharacterSection };
