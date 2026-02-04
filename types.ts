
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Publication {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
}
