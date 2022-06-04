import { GroupData } from "models/GroupData";
import { useMemo } from "react";
import { useQuery, useInfiniteQuery } from "react-query"
import { fetchGroupData, fetchTotalGroupData } from "../apis/fetchGroupData"

export const useGroupData = () => {
  return useQuery('useGroupData', () => fetchGroupData());
}

export const useTotalGroupData = ({ search }: { search?: string } = {}) => {
  const groupDataState = useInfiniteQuery(['useTotalGroupData', search], ({ pageParam = 1 }) => fetchTotalGroupData({ page: pageParam, search }), {
    getNextPageParam: (lastPage, allPages) => lastPage.numGroups,
  });
  const groupData = useMemo(() => {
    return groupDataState.data?.pages.flatMap(page => page.groups) ?? [];
  }, [groupDataState.data?.pages]);
  const numGroups = useMemo(() => {
    return groupDataState.data?.pages.reduce((curr, prev) => curr + prev.numGroups, 0);
  }, [groupDataState.data?.pages]);
  return {
    data: {
      groupData,
      numGroups,
    },
  }
}
