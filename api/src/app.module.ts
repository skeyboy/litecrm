import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: '1355081829@qq.com',
      secretOrPrivateKey: '1355081829@qq.com',
      signOptions: { expiresIn: '24h' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configuration().db.host,
      port: configuration().db.port,
      username: configuration().db.username,
      password: configuration().db.password,
      database: configuration().db.dbname,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AdminModule,
    CustomerModule,
  ],
})
export class AppModule {}
