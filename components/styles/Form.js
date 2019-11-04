import styled from 'styled-components';
// $base-dark: #202040;
// $base-dark-contrast: #602080;
// $base-mid: #202060;
// $base-mid-contrast: #b030b0;
// $dark-theme-link: #77FFAE;
// $dark-theme-warning-link: #FF471B;

const Form = styled.form`
  border-color: #b030b0;
  display: flex;
  h2,
  p,
  label {
    color: white;
  }

  label {
    letter-spacing: 1px;
    font-style: normal;
  }

  a {
    color: #b030b0;
    &:hover {
      color: lighten(#b030b0, 10%);
    }
  }
  input,
  textarea,
  select {
    background-color: #202060;
    border: 1px solid #b030b0;
    color: #b030b0;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 1em;
    margin: 0 5px;
    flex: 2 1 auto;
    &:focus,
    &:hover {
      box-shadow: 0 0 5px #b030b0;
      outline: #b030b0;
    }
  }

  input[type='submit'] {
    flex: 0 1 auto;
  }
  input[type='submit']:hover {
    background-color: #602080;
    cursor: pointer;
    color: white;
  }
`;

export default Form;
