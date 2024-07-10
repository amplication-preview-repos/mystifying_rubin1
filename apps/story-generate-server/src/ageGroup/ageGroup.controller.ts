import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgeGroupService } from "./ageGroup.service";
import { AgeGroupControllerBase } from "./base/ageGroup.controller.base";

@swagger.ApiTags("ageGroups")
@common.Controller("ageGroups")
export class AgeGroupController extends AgeGroupControllerBase {
  constructor(protected readonly service: AgeGroupService) {
    super(service);
  }
}
