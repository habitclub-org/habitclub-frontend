import styled from "@emotion/styled";

export const Header = styled.header<{marginTop?: number}>`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 0 12px;
    margin-top: ${({ marginTop = 24 }) => `${marginTop}px`};
`;