import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [JwtModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
