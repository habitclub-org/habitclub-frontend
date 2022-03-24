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
import { useQuery } from "react-query";
import { fetchMyTags } from "../apis/fetchMyTags";

export default function IndexPage() {
  const { data: myTags } = useQuery('myTags', fetchMyTags);
  if (myTags == null) {
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
        {myTags.map(tag => (
          <TagItem key={tag.tagId}>#{tag.tag}</TagItem>
        ))}
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
