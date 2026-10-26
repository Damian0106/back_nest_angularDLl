
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación global de DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Backend NestJS')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  // Generar la documentación de la API
  const document = SwaggerModule.createDocument(app, config);

  // Publicar Swagger en /api
  SwaggerModule.setup('api', app, document);

  // Iniciar el servidor
  await app.listen(3000);
}

bootstrap();
