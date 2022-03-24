import styled from "@emotion/styled";
import { ErrorBoundary } from "react-error-boundary";
import { colors } from "styles";
import { Header } from "components/ui";
import { ellipsisText } from "utils/http/ellipsisText";
import { MAX_TITLE } from "../../constants";
import { useGroupMissionList } from "hooks/useMissionList";
import { MissionListItem } from "components/MissionListItem";
import { Fragment } from "react";

export default function IndexPage() {
  const { data: groupMission } = useGroupMissionList();

  if (groupMission == null) {
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
        <GroupList>
          <Header marginTop={16}>{ellipsisText(groupMission.name, MAX_TITLE)}</Header>
          {groupMission.mission.map(missionItem => (
            <MissionListItem 
              key={missionItem.id} 
              top={ellipsisText(missionItem.name, MAX_TITLE)} 
              isAvailable={missionItem.checkAvailability === 'available'}
              content={`${missionItem.startTime} - ${missionItem.endTime}`}
              bottom={missionItem.content} />
          ))}
        </GroupList>
      </Container>
    </ErrorBoundary>
  )
}

const Container = styled.div`
    height: 100vh;
    overflow: auto;
    background-color: ${colors.grey200};
    padding-top: 72px;
`

const GroupList = styled.ul`
    padding: 0 12px;
    >li + li {
        margin-top: 8px;
    }
`
