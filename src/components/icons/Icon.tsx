import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Alert } from './Alert';
import { Calandar } from './Calandar';
import { User } from './User';

interface Props {
    iconName: 'calander' | 'user' | 'alert';
    width?: string;
    hegiht?: string;
}

export const Icon = ({ iconName, width, hegiht }: Props) => {
  return (
    <Paragraph width={width} >
      {  iconName === 'calander' ? <Calandar />
        : iconName === 'user' ? <User />
          : iconName === 'alert' ? <Alert width={width} height={hegiht} />
            : null}
    </Paragraph>
      
  );
}

const Paragraph = styled.p<{ width?: string }>`
margin: 0 4px;
width: ${({ width }) => width ? `${width}px` : '12px' };
overflow: hidden;
padding-top: 2px;
`