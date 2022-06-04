import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTotalGroupData } from "hooks/useGroupData";
import { ErrorBoundary } from "react-error-boundary";
import { colors } from "styles";
import { GroupListItem } from "components/GroupListItem";
import { TagItem } from "components/TagItem";
import { Header, Text } from "components/ui";
import { Calandar } from "components/icons/Calandar";
import { Icon } from "components/icons/Icon";
import { ellipsisText } from "utils/http/ellipsisText";
import { MAX_TITLE } from "../constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Padding } from "components/ui/Padding";

export default function IndexPage() {
  const router = useRouter();
  const [search, setSearch] = useState<string>();

  const { data: searchData } = useTotalGroupData({ search });

  useEffect(() => {
    if (router.isReady) {
      setSearch(String(router.query.search ?? ''));
    }
  }, [router.isReady, router.query.search])

  if (searchData == null) {
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
        <Header>검색 결과({searchData.numGroups})</Header>
        {searchData.groupData.length > 0 ?  <GroupList>
          {searchData.groupData.map(group => (
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
        </GroupList> :
          <Empty>
            <Icon iconName="alert" width="16" hegiht="16"/>
            <Padding size={8} />
            <Text color={colors.grey300}>검색 결과가 없습니다.</Text>
            <Text color={colors.grey300}>다른 검색어를 입력해보세요.</Text>
          </Empty>}
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

const Empty = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 52px;
`
