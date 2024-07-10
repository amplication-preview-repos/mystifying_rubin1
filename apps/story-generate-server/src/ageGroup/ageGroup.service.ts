import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgeGroupServiceBase } from "./base/ageGroup.service.base";

@Injectable()
export class AgeGroupService extends AgeGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
