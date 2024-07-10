import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryListRelationFilter } from "../story/StoryListRelationFilter";

export type GenreWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  stories?: StoryListRelationFilter;
};
