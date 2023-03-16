import {ApiProperty} from "@nestjs/swagger";

export class CreateAdminDto {
    @ApiProperty({
        description: '用户名',
        example:'litecrm'
    })
    username: string;

    @ApiProperty({
        description: '密码',
        example:'123456',
        minLength:6
    })
    password: string;

    @ApiProperty({
        description: '邮箱',
        required:false
    })
    email: string;

    @ApiProperty({
        description: '手机号',
        required:false
    })
    mobile: string;

}
