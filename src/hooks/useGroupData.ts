import { GroupData } from "models/GroupData";
import { useMemo } from "react";
import { useQuery, useInfiniteQuery } from "react-query"
import { fetchGroupData, fetchTotalGroupData } from "../apis/fetchGroupData"

export const useGroupData = () => {
    return useQuery('useGroupData', () => fetchGroupData());
}

export const useTotalGroupData = () => {
    const groupDataState = useInfiniteQuery('useTotalGroupData', ({ pageParam = 1 }) => fetchTotalGroupData(pageParam), {
        getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      });
      const groupData = useMemo(() => {
        return groupDataState.data?.pages.flatMap(page => page.groups) ?? [];
      }, [groupDataState.data?.pages]);
      return {
          data: groupData,
      }
}
