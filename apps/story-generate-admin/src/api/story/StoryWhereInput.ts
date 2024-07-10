import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { AgeGroupWhereUniqueInput } from "../ageGroup/AgeGroupWhereUniqueInput";
import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";

export type StoryWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  image?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  ageGroup?: AgeGroupWhereUniqueInput;
  genre?: GenreWhereUniqueInput;
};
