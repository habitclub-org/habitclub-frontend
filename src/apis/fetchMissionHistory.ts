import http from "utils/http";

export function fetchMissionHistory() {
  return http.get('/missions/histories?date=2022-02-12');
}