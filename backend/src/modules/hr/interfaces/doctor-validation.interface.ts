export interface IDoctorValidationResult {
  empId: string;
  fullName: string;
  departmentId: string;
  departmentName: string;
  isActive: boolean; // Employee.status === 'ACTIVE' (BR-016)
  hasValidLicense: boolean; // CCHN còn hiệu lực tại ngày khám (BR-018)
  licenseNumber?: string;
}
