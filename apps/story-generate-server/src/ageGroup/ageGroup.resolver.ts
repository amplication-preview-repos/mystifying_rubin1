import * as graphql from "@nestjs/graphql";
import { AgeGroupResolverBase } from "./base/ageGroup.resolver.base";
import { AgeGroup } from "./base/AgeGroup";
import { AgeGroupService } from "./ageGroup.service";

@graphql.Resolver(() => AgeGroup)
export class AgeGroupResolver extends AgeGroupResolverBase {
  constructor(protected readonly service: AgeGroupService) {
    super(service);
  }
}
