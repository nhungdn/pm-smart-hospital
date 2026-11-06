import { Injectable, ForbiddenException } from "@nestjs/common";
import { HrService } from "../hr/hr.service";

@Injectable()
export class EmrService {
  constructor(private readonly hrService: HrService) {}

  async startEncounter(encounterId: string, doctorEmpId: string) {
    // Gọi sang HR kiểm tra
    const doctor =
      await this.hrService.validateDoctorForClinicalAction(doctorEmpId);
    if (!doctor.hasValidLicense) {
      throw new ForbiddenException(
        "Bác sĩ có CCHN hết hạn, không được mở phiên khám",
      );
    }
    return { message: "Khởi tạo phiên khám thành công", doctor };
  }
}
