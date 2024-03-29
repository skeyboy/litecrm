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
    return this.adminRepository.insert(createAdminDto);
  }

  findByUsername(username) {
    return this.adminRepository.findOneBy({ username });
  }

  findAll(
    current = 1,
    pageSize = 1,
    username = '',
    email = '',
    mobile = '',
    qq = '',
    wechat = '',
    startDate = '',
    endDate = '',
  ) {
    return this.adminRepository
      .createQueryBuilder()
      .offset((current - 1) * pageSize)
      .limit(pageSize)
      .orderBy('id', 'DESC')
      .where(
        new Brackets((q) => {
          if (username) {
            console.log(username);
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
          if (mobile) {
            q.where('mobile like :mobile', { mobile: `%${mobile}%` });
          }
        }),
      )
      .andWhere(
        new Brackets((q) => {
          if (qq) {
            q.where('qq like :qq', { qq: `%${qq}%` });
          }
        }),
      )
      .andWhere(
        new Brackets((q) => {
          if (wechat) {
            q.where('wechat like :wechat', { wechat: `%${wechat}%` });
          }
        }),
      )
      .andWhere(
        new Brackets((q) => {
          if (startDate && endDate) {
            q.where('createdAt between :startDate and :endDate', {
              startDate,
              endDate,
            });
          }
        }),
      )
      .getManyAndCount();
  }

  findOne(id: number) {
    return this.adminRepository.findOne({ where: { id } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return this.adminRepository.softDelete(id);
  }
}
