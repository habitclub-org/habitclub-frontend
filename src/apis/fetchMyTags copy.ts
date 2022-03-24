import { format } from "date-fns";
import { GroupData, TagItem } from "models/GroupData";
import { GroupMission, MissionList } from "models/Mission";
import http from "utils/http";

export function fetchMyTags() {
  return http.get<TagItem[]>('/tags');
}
