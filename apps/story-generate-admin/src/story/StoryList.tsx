import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { AGEGROUP_TITLE_FIELD } from "../ageGroup/AgeGroupTitle";
import { GENRE_TITLE_FIELD } from "../genre/GenreTitle";

export const StoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Content" source="content" />
        <TextField label="Image" source="image" />
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="AgeGroup"
          source="agegroup.id"
          reference="AgeGroup"
        >
          <TextField source={AGEGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Genre" source="genre.id" reference="Genre">
          <TextField source={GENRE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
