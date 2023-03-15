import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiMapResponse } from './decorator/api.map.response';
import { success } from './utils/response';
import { CustomerService } from './customer/customer.service';
import { AdminService } from './admin/admin.service';
import * as bcrypt from 'bcrypt';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly adminService: AdminService,
  ) {}

  @ApiOperation({
    summary: '初始化数据',
    operationId: 'initApp',
  })
  @ApiMapResponse()
  @Get()
  async getHello() {
    await this.initAdmin();
    await this.initCustomer();
    return success();
  }
  async initAdmin() {
    const saltOrRounds = 10;
    for (let i = 0; i < 20; i++) {
      const password = '1355081829@qq.com';
      const hash = await bcrypt.hash(password, saltOrRounds);
      const admin = {
        username: `customer ${i}`,
        mobile: `157013088${i}`,
        email: `13550818${i}@qq.com`,
        password: hash,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.adminService.create(admin);
    }
  }
  async initCustomer() {
    for (let i = 0; i < 20; i++) {
      const customer = {
        username: `customer ${i}`,
        mobile: `157013088${i}`,
        email: `13550818${i}@qq.com`,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.customerService.create(customer);
    }
  }
}
