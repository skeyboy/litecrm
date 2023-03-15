import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Admin {
  @ApiProperty({
    description: '用户id',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: '用户名',
  })
  @Column()
  username: string;

  @ApiProperty({
    description: '邮箱',
    default: '',
  })
  @Column()
  eamil: string;

  @ApiProperty({
    description: '手机号',
    default: '',
  })
  @Column()
  mobile: string;

  @ApiProperty({
    description: '微信',
    default: '',
  })
  @Column()
  wechat: string;

  @ApiProperty({
    description: 'QQ',
    default: '',
  })
  @Column()
  qq: string;

  @ApiProperty({
    description: '头像',
    default: '',
  })
  @Column()
  avatar: string;

  @ApiProperty({
    description: '密码',
  })
  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
