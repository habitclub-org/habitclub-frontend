export type GroupData = {
    groups: {
      id: number;
      name: string;
      maximumMember: number;
      currentMember: number;
      thumbnailImageUrl: string;
      createdAt: string;
      isPrivate: boolean;
      isAvailable: boolean;
      isEnrolled: boolean;
      updatedAt: string;
      daysLeft: number;
      runningWeeks: number;
      tags: string[];
    }[],
    numGroups: number;
    nextPage: number;
  };
  