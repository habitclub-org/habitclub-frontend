import styled from "@emotion/styled";
import { colors } from "styles";

export const Text = styled.span<{ color?: string }>`
display: inline-flex;
align-items: center;
font-family: Noto Sans KR;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
color: ${({ color = colors.grey400 }) => color};
& + span {
    margin-left: 12px;
}
`
