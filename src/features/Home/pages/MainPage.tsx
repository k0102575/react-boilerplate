import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';

const bodyStyle = () => css`
  height: 500px;
  border: 1px solid black;
`;

const MainPage = () => {
  // useState
  const [isError, setIsError] = useState<boolean>(false);

  // handler
  const onClickButton = useCallback(() => {
    setIsError(true);
  }, []);

  // useEffect
  useEffect(() => {
    if (isError) {
      throw new Error('test');
    }
  }, [isError]);

  return (
    <div css={bodyStyle}>
      <button type="button" onClick={onClickButton}>
        에러 발생
      </button>
    </div>
  );
};

export default MainPage;
