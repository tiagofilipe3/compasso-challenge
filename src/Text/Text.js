import styled from '@emotion/styled';

const Text = styled.div`
  font-size: ${({ scale }) => (scale ? `${scale * 8}px` : '12px')};
  color: ${({ color }) => color && color};
`;

export default Text;
