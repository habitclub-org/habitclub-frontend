import { GroupData } from "models/GroupData";
import http from "utils/http";

export async function fetchGroupData() {
  return await http.get<GroupData>('/groups?type=me');
}

export async function fetchTotalGroupData(page: number) {
  return await http.get<GroupData>('/groups', { params: { page } });
}