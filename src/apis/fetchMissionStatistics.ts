import { MissionStatistics } from "models/MyInfo";
import http from "utils/http";

export function fetchMissionStatistics() {
  return http.get<MissionStatistics>('/missions/statistics');
}
