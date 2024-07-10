import { StoryCreateNestedManyWithoutAgeGroupsInput } from "./StoryCreateNestedManyWithoutAgeGroupsInput";

export type AgeGroupCreateInput = {
  name?: string | null;
  stories?: StoryCreateNestedManyWithoutAgeGroupsInput;
};
