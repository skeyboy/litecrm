import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, Length } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    description: '用户名',
    example: 'litecrm',
  })
  @Length(2, 12, { message: '用户名必须在2-12个字符之间' })
  username: string;

  @ApiProperty({
    description: '密码',
    example: '123456',
    minLength: 6,
  })
  @Length(6, 32, { message: '密码必须在6-32个字符之间' })
  password: string;

  @ApiProperty({
    description: '邮箱',
    required: false,
  })
  @IsEmail({}, { message: '邮箱格式不合法' })
  email: string;

  @ApiProperty({
    description: '手机号',
    required: false,
  })
  @IsMobilePhone('zh-CN', null, { message: '手机号格式错误' })
  mobile: string;
}
