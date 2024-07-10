import { StoryUpdateManyWithoutCategoriesInput } from "./StoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  stories?: StoryUpdateManyWithoutCategoriesInput;
};
