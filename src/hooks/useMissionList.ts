import { format } from "date-fns";
import { GroupData } from "models/GroupData";
import { useMemo } from "react";
import { useQuery, useInfiniteQuery } from "react-query"
import { fetchGroupMissionList, fetchMissionList } from "../apis/fetchMissionList";

export const useGroupMissionList = () => {
  return useQuery('useGroupMissionList', () => fetchGroupMissionList());
}

export const useMissionList = () => {
  const missionListState = useInfiniteQuery('useMissionList', ({ pageParam = 1 }) => fetchMissionList({ page: 1, date: format(new Date(), 'yyyy-MM-dd') }), {
    getNextPageParam: (lastPage, _) => lastPage.groupMissions,
  });
  const missionList = useMemo(() => {
    return missionListState.data?.pages.flatMap(page => page.groupMissions) ?? [];
  }, [missionListState]);
  return {
    data: missionList,
  }
}
