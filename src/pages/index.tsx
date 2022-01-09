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

const defaultTags = ['생산성','태그','암거나'];

export default function IndexPage() {
    const { data: groupData } = useGroupData();
    const { data: totalGroupData, fetchNextPage } = useTotalGroupData();

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
              <Header marginTop={72}>내 그룹({groupData.count})</Header>
                <GroupList>
                    {groupData.data.map(group => (
                    <GroupListItem
                        key={group.id}
                        imageSrc={group.thumbnailImageUrl} 
                        top={group.name}
                        content={defaultTags.map(tag => (
                            <TagItem key={tag}>#{tag}</TagItem>
                        ))}
                        bottom={
                            <>
                            <Text><Icon iconName={'user'} />{group.currentMember}/{group.maximumMember}</Text>
                            <Text><Icon iconName={'calander'} />1주</Text>
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
                    {totalGroupData.map(group => (
                    <GroupListItem 
                        key={group.id} 
                        imageSrc={group.thumbnailImageUrl} 
                        top={group.name} 
                        content={defaultTags.map(tag => (
                            <TagItem key={tag}>#{tag}</TagItem>
                        ))}
                        bottom={(
                            <>
                                <Text><Icon iconName={'user'} />{group.currentMember}/{group.maximumMember}</Text>
                                <Text><Icon iconName={'calander'} />1주</Text>
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
    padding-top: 72px;
`

const GroupList = styled.ul`
    padding: 0 12px;
    >li + li {
        margin-top: 8px;
    }
`
