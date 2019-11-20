import styled from 'styled-components';

const CharacterForm = styled.form`
  border-color: #b030b0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  input {
    background-color: #202060;
    border: 2px solid #b030b0;
    color: #77ffae;
    display: block;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 1em;
    flex: 1 1 auto;
    &:focus,
    &:hover {
      box-shadow: 0 0 10px #b030b0;
      outline: #b030b0;
    }
  }

  input[type='submit']:hover {
    background-color: #602080;
    cursor: pointer;
    color: white;
  }

  input::placeholder,
  textarea::placeholder {
    color: white;
    opacity: 0.6;
    letter-spacing: 2px;
  }
`;

export default CharacterForm;
