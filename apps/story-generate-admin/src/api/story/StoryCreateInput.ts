import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { AgeGroupWhereUniqueInput } from "../ageGroup/AgeGroupWhereUniqueInput";
import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";

export type StoryCreateInput = {
  title?: string | null;
  content?: string | null;
  image?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  ageGroup?: AgeGroupWhereUniqueInput | null;
  genre?: GenreWhereUniqueInput | null;
};
