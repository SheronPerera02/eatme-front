import { RefObject } from "react";

export type Dish = {
  name: string;
  description: string;
  price: number;
  calories: number;
};

export type Category = {
  sectionRef?: RefObject<HTMLDivElement>;
  name: string;
  dishes: Dish[];
};
