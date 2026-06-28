export type Testimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Mansour",
    rating: 5,
    text: "EliteSync transformed my fitness journey. The expert trainers helped me reach my goal weight in just 3 months. Highly recommended!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
  },
  {
    id: 2,
    name: "Aya Mohamed",
    rating: 5,
    text: "The best platform I've used. I can easily fit my sessions into my busy work schedule. The progress tracking system keeps me motivated every single day.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aya",
  },
  {
    id: 3,
    name: "Mostafa Ahmed",
    rating: 5,
    text: "Highly professional and effective. The trainers pay attention to every detail in my form. I finally feel I'm training the right way with real results.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mostafa",
  },
];
