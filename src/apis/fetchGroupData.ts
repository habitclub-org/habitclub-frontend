import { GroupData } from "models/GroupData";
import http from "utils/http";

export function fetchGroupData() {
    return http.get<GroupData>('/api/groupData');
}

export function fetchTotalGroupData(page: number) {
    return http.get<GroupData>('/api/totalGroupData', { params: { page } });
}