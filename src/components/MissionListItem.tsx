import styled from "@emotion/styled"
import Image from "next/image"
import { ReactNode } from "react";
import { colors } from "styles";
import { Lock } from './icons/Lock';

interface Props {
    top: ReactNode;
    content: ReactNode;
    bottom: ReactNode;
    isAvailable?: boolean;
}

export const MissionListItem = ({
  top,
  content,
  bottom,
  isAvailable,
  ...rest
}: Props) => {
  return (
    <ListItem {...rest}>
      <Top color={isAvailable ? colors.black : colors.grey400}>{top}</Top>
      <Content>{content}</Content>
      <Bottom>{bottom}</Bottom>
    </ListItem>
  )
}


const ListItem = styled.li`
position: relative;
padding: 12px;
border-radius: 8px;
background: ${colors.white};
`

const Top = styled.div<{color: string;}>`
display: flex;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: -0.10000000149011612px;
text-align: left;
color: ${props => props.color};
`

const Content = styled.div`
display: flex;
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.10000000149011612px;
text-align: left;
`

const Bottom = styled.div`
display: flex;
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px;
letter-spacing: -0.10000000149011612px;
text-align: left;
`
const PrivateIcon = styled.div`
position: absolute;
right: 12px;
top: 12px;
background-color: ${colors.grey150};
width: 24px;
height: 24px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
`