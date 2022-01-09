import styled from "@emotion/styled"
import Image from "next/image"
import { ReactNode } from "react";
import { colors } from "styles";

interface Props {
    imageSrc: string;
    top: ReactNode;
    content: ReactNode;
    bottom: ReactNode;
}

export const GroupListItem = ({
    imageSrc,
    top,
    content,
    bottom,
    ...rest
}: Props) => {
    return (
        <ListItem {...rest}>
            <LeftAvator>
                <Image alt="" src={imageSrc} layout="fill" objectFit="cover" />
            </LeftAvator>
            <RightContainer>
                <Top>{top}</Top>
                <Content>{content}</Content>
                <Bottom>{bottom}</Bottom>
            </RightContainer>
        </ListItem>
    )
}


const ListItem = styled.li`
display: flex;
padding: 12px;
border-radius: 8px;
background: ${colors.white};
`

const LeftAvator = styled.figure`
position: relative;
border-radius: 50%;
max-height: 70px;
width: 70px;
overflow: hidden;
margin: 0;
`

const RightContainer = styled.div`
padding-left: 12px
`

const Top = styled.div`
display: flex;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: -0.10000000149011612px;
text-align: left;
margin-bottom: 10px;
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