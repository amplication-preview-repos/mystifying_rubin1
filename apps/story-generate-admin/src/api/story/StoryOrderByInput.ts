import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  image?: SortOrder;
  categoryId?: SortOrder;
  ageGroupId?: SortOrder;
  genreId?: SortOrder;
};
