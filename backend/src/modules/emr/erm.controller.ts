import { Controller, Get } from "@nestjs/common";

@Controller("erm")
export class EmrController {
  @Get()
  findAll(): string {
    return "This action returns ERM";
  }
}
