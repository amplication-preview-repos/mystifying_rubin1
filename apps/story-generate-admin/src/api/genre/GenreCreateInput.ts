import { StoryCreateNestedManyWithoutGenresInput } from "./StoryCreateNestedManyWithoutGenresInput";

export type GenreCreateInput = {
  name?: string | null;
  stories?: StoryCreateNestedManyWithoutGenresInput;
};
