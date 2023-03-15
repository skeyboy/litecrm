import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseArrayto } from './decorator/api.array.response';
import { ResponseMapDto } from './decorator/api.map.response';
import { PaginatedDto } from './decorator/api.paginated.response';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/admin');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('litecrm api')
    .setDescription('litecrm开源crm')
    .setContact('最爱白菜吖', '', '1355081829@qq.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [PaginatedDto, ResponseMapDto, ResponseArrayto],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log('http://localhost:3000');
  });
}
bootstrap();
