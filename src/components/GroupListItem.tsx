import styled from "@emotion/styled"
import Image from "next/image"
import { ReactNode } from "react";
import { colors } from "styles";
import { Lock } from './icons/Lock';

interface Props {
    imageSrc: string;
    top: ReactNode;
    content: ReactNode;
    bottom: ReactNode;
    isPrivate?: boolean;
    isAvailable?: boolean;
}

export const GroupListItem = ({
  imageSrc,
  top,
  content,
  bottom,
  isPrivate,
  isAvailable,
  ...rest
}: Props) => {
  return (
    <ListItem {...rest}>
      <LeftAvator disabled={!isAvailable}>
        <Image alt="" src={imageSrc ?? 'https://www.residentialsystems.com/wp-content/uploads/2020/06/2020.06.13-How-Writing-Improves-Our-Thinking.jpg'} layout="fill" objectFit="cover" loading="eager"/>
      </LeftAvator>
      <RightContainer>
        {
          isPrivate ?  <PrivateIcon>
            <Lock />
          </PrivateIcon> : null
        }
               
        <Top color={isAvailable ? colors.black : colors.grey400}>{top}</Top>
        <Content>{content}</Content>
        <Bottom>{bottom}</Bottom>
      </RightContainer>
    </ListItem>
  )
}


const ListItem = styled.li`
position: relative;
display: flex;
padding: 12px;
border-radius: 8px;
background: ${colors.white};
`

const LeftAvator = styled.figure<{disabled: boolean}>`
position: relative;
border-radius: 50%;
max-height: 70px;
width: 70px;
overflow: hidden;
margin: 0;
${props => props.disabled ? `
filter: gray; /* IE6-9 */
-webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
` : ''}
`

const RightContainer = styled.div`
padding-left: 12px
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
margin-bottom: 10px;
color: ${props => props.color};
`

const Content = styled.div`
display: flex;
margin-bottom: 12px;
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