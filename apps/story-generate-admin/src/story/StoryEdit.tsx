import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { AgeGroupTitle } from "../ageGroup/AgeGroupTitle";
import { GenreTitle } from "../genre/GenreTitle";

export const StoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <div />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="ageGroup.id"
          reference="AgeGroup"
          label="AgeGroup"
        >
          <SelectInput optionText={AgeGroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="genre.id" reference="Genre" label="Genre">
          <SelectInput optionText={GenreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
