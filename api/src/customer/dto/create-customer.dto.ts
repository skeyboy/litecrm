import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    description: '用户名',
    example: 'litecrm',
  })
  username: string;

  @ApiProperty({
    description: '邮箱',
    example: '1355081829@qq.com',
    required: false,
  })
  email: string;

  @ApiProperty({
    description: '手机号',
    required: false,
  })
  mobile: string;

  @ApiProperty({
    description: 'qq',
    required: false,
  })
  qq: string;

  @ApiProperty({
    description: '微信',
    required: false,
  })
  wechat: string;
}
