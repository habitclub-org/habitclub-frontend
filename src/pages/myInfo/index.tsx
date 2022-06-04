import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useGroupData, useTotalGroupData } from "hooks/useGroupData";
import { ErrorBoundary } from "react-error-boundary";
import { colors } from "styles";
import { GroupListItem } from "components/GroupListItem";
import { TagItem } from "components/TagItem";
import { Header, Text } from "components/ui";
import { Calandar } from "components/icons/Calandar";
import { Icon } from "components/icons/Icon";
import { ellipsisText } from "utils/http/ellipsisText";
import { useQuery } from "react-query";
import { getCalendarDate, getSearchKeywordList, pressCalendar } from "utils/http/appBridge";
import { fetchMissionStatistics } from "../../apis/fetchMissionStatistics";
import { fetchMissionHistory } from "../../apis/fetchMissionHistory";
import { VerifyInfo } from "./components/VerifyInfo";
import { Padding } from "components/ui/Padding";

export default function IndexPage() {
  const { data: missionStatistics } = useQuery('missionStatistics', fetchMissionStatistics);
  const { data: missionHistory } = useQuery('missionHistory', fetchMissionHistory);
  if (missionStatistics == null) {
    return null;
  }
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div>
                There was an error! {error}
        </div>
      )}
    >
      <Container>
        <Flex>
          <Text color={colors.black} fontSize={16}>
            {missionStatistics.user}
          </Text>
          <Padding size={8}/>
          <Text>
              인증 성공률 {Math.floor(missionStatistics.completeRate)}%
          </Text>
        </Flex>
        {missionStatistics.userTags.map(tag => (
          <TagItem key={tag.id}>#{tag.name}</TagItem>
        ))}
        <Padding size={20}/>
        <Flex>
          <VerifyInfo title="누적 인증 수" count={missionStatistics.completes} unit="회" />
          <Padding size={8}/>
          <VerifyInfo title="누적 인증일 수" count={missionStatistics.completedDays} unit="일" />
        </Flex>
        {/* 
        <button onClick={async () => {
          const selectedDate = await pressCalendar();
          if (selectedDate != null) {
            
          }
        }}>test</button> */}
      </Container>
    </ErrorBoundary>
  )
}

const Container = styled.div`
    background-color: ${colors.grey200};
    padding: 20px 16px;
`

const GroupList = styled.ul`
    padding: 0 12px;
    >li + li {
        margin-top: 8px;
    }
`

const Flex = styled.div`
display: flex;
width: 100%;
`
