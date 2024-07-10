import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryListRelationFilter } from "../story/StoryListRelationFilter";

export type AgeGroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  stories?: StoryListRelationFilter;
};
