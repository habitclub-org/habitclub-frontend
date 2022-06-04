import { TagItem } from "./GroupData";

export interface MissionStatistics {
    user: string;
    userTags: TagItem[];
    completeRate: number;
    completes: number;
    completedDays: number;
}