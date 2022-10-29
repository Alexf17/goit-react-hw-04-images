import { FallingLines } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrap>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Wrap>
  );
};
