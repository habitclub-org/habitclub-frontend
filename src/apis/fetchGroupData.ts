import { GroupData } from "models/GroupData";
import http from "utils/http";

export async function fetchGroupData() {
  return await http.get<GroupData>('/groups?type=me');
}

export async function fetchTotalGroupData({ page, search }: { page: number; search?: string }) {
  return await http.get<GroupData>('/groups', { params: { page, search } });
}