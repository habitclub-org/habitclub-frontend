import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Calandar } from './Calandar';
import { User } from './User';

interface Props {
    iconName: 'calander' | 'user';
}

export const Icon = ({ iconName }: Props) => {
    return (
        <Paragraph>
        {  iconName === 'calander' ? <Calandar />
        : iconName === 'user' ? <User />
        : null}
        </Paragraph>
      
    );
}

const Paragraph = styled.p`
margin: 0 4px;
width: 12px;
overflow: hidden;
padding-top: 2px;
`