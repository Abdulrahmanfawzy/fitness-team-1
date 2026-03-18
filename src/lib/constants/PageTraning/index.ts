import img1 from "../../../assets/TrainingPage/cursour1.png";
import img2 from "../../../assets/TrainingPage/cursour2.png";
import img3 from "../../../assets/TrainingPage/cursour3.png";
import img5 from "../../../assets/TrainingPage/cursor5.png";
import img4 from "../../../assets/TrainingPage/cursour4.png";
import img6 from "../../../assets/TrainingPage/6t.jpg";
import img7 from "../../../assets/TrainingPage/4t.jpg";
import img8 from "../../../assets/TrainingPage/2t.jpg";

export const items = [
  { label: "Select a fruit", value: "all" },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

// filter
export const filteritems = [
  { id: 1, title: "Crossfit" },
  { id: 2, title: "Muscle Gain " },
];
export const durations = [
  { id: 1, value: "Any", label: "Any" },
  { id: 2, value: "10-20", label: "10-20 min" },
  { id: 3, value: "20-30", label: "20-30 min" },
  { id: 4, value: "30-45", label: "30-45 min" },
  { id: 5, value: "45+", label: "45+ min" },
];

export const types = [
  { id: 1, type: "HIIT" },
  { id: 2, type: "Strength" },
  { id: 3, type: "Cardio" },
  { id: 4, type: "Nutrition" },
];

// Searching
export const recentSearches = ["Strength workout"];
export const popularSearches = ["HIIT", "Stretching", "Full body workout"];
// Sort
export const sortOptions = [
  { id: 1, value: "most-popular", label: "Most Popular" },
  { id: 2, value: "newest", label: "Newest" },
  { id: 3, value: "difficulty", label: "Difficulty" },
  { id: 4, value: "duration", label: "Duration" },
];
export const images = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
];

export const Trainers = [
  {
    id: 1,
    img: img1,
    name: "Ahmed Mohamed",
    price: "300",
    rating: 4,
    specialtie: ["Weight Loss", "Muscle Gain", "Fitness"],
    place: "Masr Elgdeda",
  },
  {
    id: 2,
    img: img2,
    name: "Farah Nabil",
    price: "170",
    rating: 5,
    specialtie: ["Yoga", "Fitness"],
    place: "Zayed",
  },
  {
    id: 3,
    img: img3,
    name: "Yousef Tarek",
    price: "200",
    rating: 4.8,
    specialtie: ["Streangth", "Weight Loss", "Functional Training"],
    place: "Maadi",
  },
  {
    id: 4,
    img: img4,
    name: "Omar Khaled",
    price: "500",
    rating: 5,
    specialtie: ["Bodybuilding", "Muscle Gain"],
    place: "Dokki",
  },
  {
    id: 5,
    img: img5,
    name: "Farah Khaled",
    price: "180",
    rating: 4,
    specialtie: ["Fitness", "Kardio"],
    place: "Nasr City",
  },
  {
    id: 6,
    img: img6,
    name: "Mariam Soliman",
    price: "450",
    rating: 5,
    specialtie: ["Pilates", "Fitness"],
    place: "New Cairo",
  },
  {
    id: 7,
    img: img7,
    name: "Ziad Mahmoud",
    price: "320",
    rating: 4,
    specialtie: ["Boxing", "Fitness"],
    place: "Sheraton",
  },
  {
    id: 8,
    img: img8,
    name: "Nourhan Ezzat",
    price: "380",
    rating: 5,
    specialtie: ["Zumba", "Weight Loss"],
    place: "Heliopolis",
  },
  {
    id: 9,
    img: img6,
    name: "Mostafa Gad",
    price: "600",
    rating: 5,
    specialtie: ["Powerlifting", "Muscle Gain"],
    place: "Obour",
  },
  {
    id: 10,
    img: img2,
    name: "Laila Hassan",
    price: "280",
    rating: 4,
    specialtie: ["Aerobics", "Fitness"],
    place: "Shorouk",
  },
  {
    id: 11,
    img: img3,
    name: "Kareem Adel",
    price: "420",
    rating: 4,
    specialtie: ["MMA", "Self Defense"],
    place: "Zamalek",
  },
  {
    id: 12,
    img: img5,
    name: "Dina Fouad",
    price: "340",
    rating: 5,
    specialtie: ["Nutrition", "Weight Loss"],
    place: "Mohandessin",
  },
];
