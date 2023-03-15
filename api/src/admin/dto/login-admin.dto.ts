import { ApiProperty } from '@nestjs/swagger';

export class LoginAdminDto {
  @ApiProperty({
    description: '用户名',
  })
  username: string;
  @ApiProperty({
    description: '密码',
  })
  password: string;
  @ApiProperty({
    description: '用户类型:account|mobile',
    default: 'account',
  })
  type: 'account' | 'mobile';
}
