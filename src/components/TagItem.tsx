import styled from "@emotion/styled";
import { colors } from "styles";

export const TagItem = styled.span`
height: 18px;
align-items: center;
padding: 1px 8px 2px;
border-radius: 25%;
background-color: ${colors.grey100};
color: ${colors.grey400};
& + & {
    margin-left: 8px;
}
`
