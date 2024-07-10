import { StoryCreateNestedManyWithoutCategoriesInput } from "./StoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  stories?: StoryCreateNestedManyWithoutCategoriesInput;
};
