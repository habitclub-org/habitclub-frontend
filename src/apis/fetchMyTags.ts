import { format } from "date-fns";
import { GroupData, TagItem } from "models/GroupData";
import { GroupMission, MissionList } from "models/Mission";
import http from "utils/http";

export async function fetchMyTags() {
  const { userInterestTags } = await http.get<{ userInterestTags: TagItem[] }>('/tags');
  return userInterestTags;
}
