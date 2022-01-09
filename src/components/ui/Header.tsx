import styled from "@emotion/styled";

export const Header = styled.header<{marginTop?: number}>`
    padding: 0 12px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: ${({ marginTop = 24 }) => `${marginTop}px`};
`;