
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilitamos CORS
  app.enableCors();

  // Validación global de DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Backend API Nest')
    .setDescription('Backend API Nest')
    .setVersion('1.0')
    .addTag('Api Rest')
    .build();

  // Generar la documentación de la API
  const document = SwaggerModule.createDocument(app, config);

  // Publicar Swagger en /api
  SwaggerModule.setup('api', app, document);

  // Iniciar el servidor
  await app.listen(3000);
}

bootstrap();
