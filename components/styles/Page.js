import styled from 'styled-components';
// $base-dark: #202040;
// $base-dark-contrast: #602080;
// $base-mid: #202060;
// $base-mid-contrast: #b030b0;
// $dark-theme-link: #77FFAE;
// $dark-theme-warning-link: #FF471B;

const Page = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const PageInner = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 2em;
  margin: 0 auto;
  flex: 1 1 auto;
`;

export { Page, PageInner };
