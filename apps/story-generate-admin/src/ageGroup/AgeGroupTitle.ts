import { AgeGroup as TAgeGroup } from "../api/ageGroup/AgeGroup";

export const AGEGROUP_TITLE_FIELD = "name";

export const AgeGroupTitle = (record: TAgeGroup): string => {
  return record.name?.toString() || String(record.id);
};
