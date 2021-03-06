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
import { MAX_TITLE } from "../constants";

export default function IndexPage() {
  const { data: groupData } = useGroupData();
  const { data: totalGroupData } = useTotalGroupData();

  if (groupData == null || totalGroupData == null) {
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
        <Header marginTop={24}>내 그룹({groupData.numGroups})</Header>
        <GroupList>
          {groupData.groups.map(group => (
            <GroupListItem
              isAvailable={group.isAvailable}
              key={group.id}
              imageSrc={group.thumbnailImageUrl} 
              isPrivate={group.isPrivate}
              top={ellipsisText(group.name, MAX_TITLE)}
              content={group.tags.map(tag => (
                <TagItem key={tag.id}>#{tag.name}</TagItem>
              ))}
              bottom={
                <>
                  <Text><Icon iconName={'user'} />{group.currentMember}/{group.maximumMember}</Text>
                  <Text><Icon iconName={'calander'} />{group.runningWeeks}</Text>
                  {group.daysLeft === 0 
                    ? <Text>진행중</Text>
                    : <Text color={colors.grey300}>{`시작까지 ${group.daysLeft}일 남음`}</Text>  
                  }
                </>
              } />
          ))}
        </GroupList>
        <Header>추천 그룹</Header>
        <GroupList>
          {totalGroupData.groupData.map(group => (
            <GroupListItem 
              key={group.id} 
              imageSrc={group.thumbnailImageUrl} 
              top={ellipsisText(group.name, MAX_TITLE)} 
              isPrivate={group.isPrivate}
              isAvailable={group.isAvailable}
              content={group.tags.map(tag => (
                <TagItem key={tag.id}>#{tag.name}</TagItem>
              ))}
              bottom={(
                <>
                  <Text><Icon iconName={'user'} />{group.currentMember}/{group.maximumMember}</Text>
                  <Text><Icon iconName={'calander'} />{group.runningWeeks}주</Text>
                  {group.daysLeft === 0 
                    ? <Text>진행중</Text>
                    : <Text color={colors.grey300}>{`시작까지 ${group.daysLeft}일 남음`}</Text>  
                  }
                </>
              )} />
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
`

const GroupList = styled.ul`
    padding: 0 12px;
    >li + li {
        margin-top: 8px;
    }
`
