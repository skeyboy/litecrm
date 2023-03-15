import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll(current = 1, pageSize = 1, username = '', email = '', mobile = '') {
    return this.adminRepository
      .createQueryBuilder()
      .offset((current - 1) * pageSize)
      .limit(pageSize)
      .where(
        new Brackets((q) => {
          if (username) {
            q.where('username like :username', { username: `%${username}%` });
          }
        }),
      )
      .andWhere(
        new Brackets((q) => {
          if (email) {
            q.where('email like :email', { email: `%${email}%` });
          }
        }),
      )
      .andWhere(
        new Brackets((q) => {
          if (email) {
            q.where('mobile like :mobile', { mobile: `%${mobile}%` });
          }
        }),
      )
      .getManyAndCount();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
