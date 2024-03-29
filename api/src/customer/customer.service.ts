import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.insert(createCustomerDto);
  }

  findAll(
    current = 1,
    pageSize = 1,
    username = '',
    email = '',
    mobile = '',
    startDate = '',
    endDate = '',
  ) {
    return this.customerRepository
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
          if (mobile) {
            q.where('mobile like :mobile', { mobile: `%${mobile}%` });
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
    return this.customerRepository.findOne({ where: { id } });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return this.customerRepository.softDelete(id);
  }
}
