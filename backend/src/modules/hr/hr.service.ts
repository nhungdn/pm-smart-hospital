import { Injectable } from "@nestjs/common";
import { IDoctorValidationResult } from "./interfaces/doctor-validation.interface";

@Injectable()
export class HrService {
  // EMR gọi hàm này để kiểm tra điều kiện hành nghề của Bác sĩ
  async validateDoctorForClinicalAction(
    empId: string,
  ): Promise<IDoctorValidationResult> {
    // Mock dữ liệu để test, thực tế sẽ gọi API của HR để lấy thông tin Bác sĩ
    if (empId === "BS_EXPIRED") {
      return {
        empId,
        fullName: "BS. Nguyễn Văn Hết Hạn",
        departmentId: "KHOA-NOI",
        departmentName: "Khoa Nội Tim Mạch",
        isActive: true,
        hasValidLicense: false, // Hết hạn CCHN -> Để test chặn quyền
      };
    }

    return {
      empId,
      fullName: "BS. Trần Văn Hợp Lệ",
      departmentId: "KHOA-NOI",
      departmentName: "Khoa Nội Tim Mạch",
      isActive: true,
      hasValidLicense: true, // Đủ điều kiện
    };
  }
}
