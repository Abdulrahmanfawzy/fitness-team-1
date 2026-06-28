export type TrainerResponse = {
  id: number;
  name: string;
  profile_image: string;
  bio: string;
  experience_years: number;
  location: string;
  rating: string;
  total_reviews: number;
  specializations: string[];
  price_per_session: number;
};

export type FilterTrainer = {
  id: number;
  user_id: number;
  bio: string;
  experience_years: number;
  location: string;
  rating: string;
  total_reviews: number;
  user: {
    id: number;
    name: string;
    email: string;
    profile_image: string;
  };
  specializations: {
    id: number;
    name: string;
  }[];
};

export type FilterValues = {
  id: number;
  name: string;
};
