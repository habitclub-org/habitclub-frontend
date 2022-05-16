import styled from "@emotion/styled";
import { colors } from "styles";

import { Text } from "components/ui"; 
import { Padding } from "components/ui/Padding";

export const VerifyInfo = ({ title, count, unit }: { title: string; count: number; unit: string; }) => {
  return (
    <VerifyInfoWrapper>
      <Text>{title}</Text>
      <Text color={colors.black} fontSize={14}>{count}
        <Padding size={2}/>
        <Text>{unit}</Text>
      </Text>
    </VerifyInfoWrapper>
  );
}

const VerifyInfoWrapper = styled.div`
position: relative;
padding: 14px 12px;
display: flex;
justify-content: space-between;
border-radius: 8px;
background: ${colors.white};
width: 100%;
`