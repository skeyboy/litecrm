import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    JwtModule.register({
      secret: '1355081829@qq.com',
      secretOrPrivateKey: '1355081829@qq.com',
      signOptions: { expiresIn: '24h' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1355081829@qq.com',
      database: 'litecrm',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AdminModule,
    CustomerModule,
  ],
})
export class AppModule {}
