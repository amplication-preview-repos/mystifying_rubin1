import { Module } from "@nestjs/common";
import { AgeGroupModuleBase } from "./base/ageGroup.module.base";
import { AgeGroupService } from "./ageGroup.service";
import { AgeGroupController } from "./ageGroup.controller";
import { AgeGroupResolver } from "./ageGroup.resolver";

@Module({
  imports: [AgeGroupModuleBase],
  controllers: [AgeGroupController],
  providers: [AgeGroupService, AgeGroupResolver],
  exports: [AgeGroupService],
})
export class AgeGroupModule {}
