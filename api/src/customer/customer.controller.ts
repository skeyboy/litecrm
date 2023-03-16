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
import { error, pagination, success } from '../utils/response';
import { ApiMapResponse } from '../decorator/api.map.response';
import {ApiPaginate} from "../decorator/api.paginate.descorator";

@ApiTags('customer')
@ApiBearerAuth()
@ApiExtraModels(Customer)
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({
    summary: '新增客户',
    operationId: 'addCustomer',
  })
  @ApiMapResponse()
  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const res = await this.customerService.create(createCustomerDto);
    if (res.identifiers.length) {
      return success();
    }
    return error();
  }
  @ApiOperation({
    summary: '客户列表',
    operationId: 'customerList',
  })
  @ApiPaginatedResponse(Customer)
  @ApiPaginate()
  @ApiQuery({
    name: 'username',
    description: '用户名',
    example: 'litecrm',
    required: false,
  })
  @ApiQuery({
    name: 'email',
    description: '邮箱',
    required: false,
  })
  @ApiQuery({
    name: 'mobile',
    description: '手机号',
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

  @ApiOperation({
    summary: '删除客户',
    operationId: 'deleteCustomer',
  })
  @ApiMapResponse()
  @Delete(':id')
  async remove(@Param('id',ParseIntPipe) id: number) {
    const customer=await this.customerService.findOne(id)
    if (!customer) {
      return error('用户不存在')
    }
    const {affected}=await  this.customerService.remove(+id);
    if (affected > 0) {
      return success('删除成功')
    }
    return error('删除失败')
  }
}
