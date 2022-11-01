import { css } from '@emotion/react';

const bodyStyle = () => css`
  height: 500px;
  border: 1px solid black;
`;

const MainPage = () => {
  return <div css={bodyStyle}>MainPage</div>;
};

export default MainPage;
