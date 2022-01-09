export type GroupData = {
    data: {
      id: number;
      name: string;
      status: string;
      maximumMember: number;
      currentMember: number;
      userId: number;
      thumbnailImageUrl: string;
      createdAt: string;
      updatedAt: string;
      daysLeft: number;
    }[],
    count: number;
    nextPage: number;
  };
  