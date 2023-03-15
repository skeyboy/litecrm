import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiMapResponse } from './decorator/api.map.response';
import { success } from './utils/response';
import { CustomerService } from './customer/customer.service';
import { AdminService } from './admin/admin.service';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

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
    for (let i = 0; i < 50; i++) {
      const password = '1355081829@qq.com';
      const hash = await bcrypt.hash(password, saltOrRounds);
      const admin = {
        username: faker.internet.userName(),
        mobile: faker.phone.number(),
        email: faker.internet.email(),
        password: hash,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.adminService.create(admin);
    }
  }
  async initCustomer() {
    for (let i = 0; i < 50; i++) {
      const customer = {
        username: faker.internet.userName(),
        mobile: faker.phone.number(),
        email: faker.internet.email(),
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.customerService.create(customer);
    }
  }
}
