import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { AgeGroup } from "../ageGroup/AgeGroup";
import { Genre } from "../genre/Genre";

export type Story = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  image: JsonValue;
  category?: Category | null;
  ageGroup?: AgeGroup | null;
  genre?: Genre | null;
};
