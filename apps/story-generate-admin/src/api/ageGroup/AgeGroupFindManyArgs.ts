import { AgeGroupWhereInput } from "./AgeGroupWhereInput";
import { AgeGroupOrderByInput } from "./AgeGroupOrderByInput";

export type AgeGroupFindManyArgs = {
  where?: AgeGroupWhereInput;
  orderBy?: Array<AgeGroupOrderByInput>;
  skip?: number;
  take?: number;
};
