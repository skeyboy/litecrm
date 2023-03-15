import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiExtraModels,
  ApiQuery,
} from '@nestjs/swagger';
import { ApiMapResponse } from 'src/decorator/api.map.response';
import { ApiPaginatedResponse } from 'src/decorator/api.paginated.response';
import { pagination } from 'src/utils/response';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { OutAdminDto } from './dto/out-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@ApiTags('admin')
@ApiBearerAuth()
@ApiExtraModels(LoginResponseDto, OutAdminDto, Admin)
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}
  @ApiOperation({
    summary: '登录',
    operationId: 'login',
  })
  @ApiMapResponse(LoginResponseDto)
  @Post('login')
  login(@Body() loginAdminDto: LoginAdminDto) {
    const token = this.jwtService.sign(
      {
        id: 1,
        username: loginAdminDto.username,
      },
      { secret: '1355081829@qq.com', expiresIn: '24h' },
    );
    return { status: 'ok', type: 'account', currentAuthority: 'admin', token };
  }

  @ApiOperation({
    summary: '当前登录用户',
    operationId: 'currentUser',
  })
  @Get('currentUser')
  currentUser() {
    return {
      success: true,
      data: {
        name: 'Serati Ma',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          { key: '0', label: '很有想法的' },
          { key: '1', label: '专注设计' },
          { key: '2', label: '辣~' },
          { key: '3', label: '大长腿' },
          { key: '4', label: '川妹子' },
          { key: '5', label: '海纳百川' },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        access: 'admin',
        geographic: {
          province: { label: '浙江省', key: '330000' },
          city: { label: '杭州市', key: '330100' },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      },
    };
  }

  @ApiOperation({
    summary: '退出',
    operationId: 'outLogin',
  })
  @Post('outLogin')
  @ApiMapResponse(OutAdminDto)
  outLogin() {
    return { data: {}, success: true };
  }
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({
    summary: '管理员列表',
    operationId: 'adminList',
  })
  @ApiPaginatedResponse(Admin)
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
  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(15), ParseIntPipe) pageSize: number,
    @Query('username') username: string,
  ) {
    const [adminList, total] = await this.adminService.findAll(
      current,
      pageSize,
    );
    return pagination(adminList, total, current, pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
