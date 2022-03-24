export interface GroupData {
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
      tags: TagItem[];
    }[];
    numGroups: number;
    nextPage: number;
  };

  interface TagBase {
    id: number;
    name: string;
  }

  interface tagCategory extends TagBase {};
  
export interface TagItem extends TagBase {
    tagCategory: tagCategory;
  }

