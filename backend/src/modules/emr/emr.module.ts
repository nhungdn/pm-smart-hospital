import { Module } from "@nestjs/common";
import { HrModule } from "../hr/hr.module";
import { EmrService } from "./emr.service";
import { EmrController } from "./emr.controller";

@Module({
  imports: [HrModule],
  controllers: [EmrController],
  providers: [EmrService],
})
export class EmrModule {}
