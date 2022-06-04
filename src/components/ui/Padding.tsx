import styled from "@emotion/styled";

export const Padding = styled.div<{ size: number; }>`
padding: ${({size}) => `${size/2}px`};
`;
