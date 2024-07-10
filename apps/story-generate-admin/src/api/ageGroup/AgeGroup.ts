import { Story } from "../story/Story";

export type AgeGroup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  stories?: Array<Story>;
};
