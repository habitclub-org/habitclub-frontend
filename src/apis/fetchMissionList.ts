import { format } from "date-fns";
import { GroupData } from "models/GroupData";
import { GroupMission, MissionList } from "models/Mission";
import http from "utils/http";

interface Props {
    page?: number;
    item?: number;
    date: string;
}

export function fetchGroupMissionList() {
  return http.get<GroupMission>('/groups?type=me');
}

export function fetchMissionList({ page, item, date } :Props) {
  return http.get<MissionList>('/missions', { params: { page, item, date } });
}