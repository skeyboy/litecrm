import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiPaginatedResponse } from '../decorator/api.paginated.response';
import { Customer } from './entities/customer.entity';
import { pagination } from '../utils/response';

@ApiTags('customer')
@ApiBearerAuth()
@ApiExtraModels(Customer)
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }
  @ApiOperation({
    summary: '客户列表',
    operationId: 'customerList',
  })
  @ApiPaginatedResponse(Customer)
  @ApiQuery({
    required: false,
    name: 'current',
    description: '当前页码',
    example: 1,
  })
  @ApiQuery({
    required: false,
    name: 'pageSize',
    description: '每页数量',
    example: 15,
  })
  @ApiQuery({
    name: 'username',
    description: '用户名',
    example: 'litecrm',
    required: false,
  })
  @ApiQuery({
    name: 'email',
    description: '邮箱',
    example: '1355081829@qq.com',
    required: false,
  })
  @ApiQuery({
    name: 'mobile',
    description: '手机号',
    example: '15701308875',
    required: false,
  })
  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(15), ParseIntPipe) pageSize: number,
    @Query('username') username: string,
    @Query('email') email: string,
    @Query('mobile') mobile: string,
  ) {
    const [dataList, total] = await this.customerService.findAll(
      current,
      pageSize,
      username,
      email,
      mobile,
    );
    return pagination(dataList, total, current, pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
