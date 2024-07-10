import { StoryUpdateManyWithoutGenresInput } from "./StoryUpdateManyWithoutGenresInput";

export type GenreUpdateInput = {
  name?: string | null;
  stories?: StoryUpdateManyWithoutGenresInput;
};
