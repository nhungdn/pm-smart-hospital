import { Controller, Get } from "@nestjs/common";

@Controller("hr")
export class HrController {
  @Get()
  findAll(): string {
    return "This action returns HR";
  }
}
