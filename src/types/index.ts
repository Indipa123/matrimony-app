export interface Profile {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  religion: string;
  ethnicity: string;
  profession: string;
  education: string;
  location: string;
  height: string;
  photo: string;
  bio: string;
  verified: boolean;
  premium: boolean;
}

export interface FilterState {
  gender: string;
  ageMin: number;
  ageMax: number;
  religion: string;
  ethnicity: string;
  location: string;
}

export interface SuccessStory {
  id: number;
  couple: string;
  photo: string;
  story: string;
  year: number;
}
