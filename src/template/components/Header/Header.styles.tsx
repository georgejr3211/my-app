import { Avatar } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';

export const Wrapper = styled(Header)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const AvatarWrapper = styled(Avatar)`
  cursor: pointer;
  background-color: white;
`;
