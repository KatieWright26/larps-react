import styled from 'styled-components';

const NavBar = styled.div`
  background-color: #202040;
  padding: 0.15rem;
  width: 100%;
  -webkit-box-align: center;
  ul {
    list-style: none;
    display: flex;
    flex: 1 1 auto;
    align-items: baseline;
    margin: 0;
    li {
      text-decoration: none;
      padding: 0 1em;
      a {
        color: white;
      }
      strong a {
        font-size: 1.25em;
      }
    }
  }
`;

export default NavBar;
