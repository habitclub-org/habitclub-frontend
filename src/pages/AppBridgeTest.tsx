import { Header } from "components/ui";
import { useEffect } from "react";
import { getSearchKeywordList } from "utils/http/appBridge";

export default function AppBridgeTest() {
  return (
    <>
      <Header>앱브릿지 테스트 페이지</Header>
      <button onClick={async () => {
        const answer = await getSearchKeywordList('test');
        alert(answer);
      }}>test</button>
    </>
  );
}