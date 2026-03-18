import user1 from "@/assets/user1.jpg";

export type TrainerItem = {
  image: string;
  name: string;
  rating: number;
  price: number;
  specialties: string[];
  location: string;
};

export const HOME_TRAINERS: TrainerItem[] = [
  {
    image: user1,
    name: "Ahmed Hassan",
    rating: 4.9,
    price: 300,
    specialties: ["Weight Loss", "Muscle Gain", "General Fitness"],
    location: "Nasr City, Cairo",
  },
  {
    image: user1,
    name: "Yara Mahmoud",
    rating: 4.8,
    price: 200,
    specialties: ["Women Fitness", "Weight Loss", "HIIT Training"],
    location: "Alexandria",
  },
  {
    image: user1,
    name: "Karim Mostafa",
    rating: 4.7,
    price: 180,
    specialties: [
      "Body Transformation",
      "General Fitness",
      "Functional Training",
    ],
    location: "New Cairo, Cairo",
  },
  {
    image: user1,
    name: "Sara Ali",
    rating: 4.9,
    price: 250,
    specialties: ["Yoga", "Pilates", "Mindfulness"],
    location: "Garden City, Cairo",
  },
  {
    image: user1,
    name: "Omar Khaled",
    rating: 4.6,
    price: 220,
    specialties: ["Sports Performance", "Strength Training", "HIIT"],
    location: "Maadi, Cairo",
  },
];
