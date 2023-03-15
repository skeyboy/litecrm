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
export class Customer {
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
    required: false,
    default: '1355081829@qq.com',
  })
  @Column({ nullable: true })
  email: string;

  @ApiProperty({
    description: '手机号',
    required: false,
  })
  @Column({ nullable: true })
  mobile: string;

  @ApiProperty({
    description: '微信',
    required: false,
  })
  @Column({ nullable: true })
  wechat: string;

  @ApiProperty({
    description: 'QQ',
    default: '1355081829',
    required: false,
  })
  @Column({ nullable: true })
  qq: string;

  @ApiProperty({
    description: '头像',
    required: false,
  })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({
    description: '创建时间',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: '更新时间',
  })
  @UpdateDateColumn()
  updateAt: Date;

  @ApiProperty({
    description: '删除时间',
    required: false,
  })
  @DeleteDateColumn()
  deletedAt: Date;
}
