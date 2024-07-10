import { Story } from "../story/Story";

export type Genre = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  stories?: Array<Story>;
};
