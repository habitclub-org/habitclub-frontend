import { GroupData } from "models/GroupData";
import http from "utils/http";

export function fetchGroupData() {
    return http.get<GroupData>('/groups?type=me');
}

export function fetchTotalGroupData(page: number) {
    return http.get<GroupData>('/groups', { params: { page } });
}