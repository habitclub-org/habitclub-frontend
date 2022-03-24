export interface MissionList {
  groupMissions: GroupMission[];
}

export interface GroupMission {
  id: number;
  name: string;
  mission: Mission[];
}

interface Mission {
  id: number;
  name: string;
  content: string;
  checkAvailability: 'failed' | 'available';
  isCompleted: boolean;
  startTime: string;
  endTime: string;
}
