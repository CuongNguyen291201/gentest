import { ClassSerializerInterceptor, ValidationPipe, VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { createDocument } from './docs/swagger';
import { swaggerOptions } from './docs/swagger.config';
import { GlobalLogger } from './shared/logger/service/globalLogger.service';
import { useContainer } from 'class-validator';
import * as dotenv from 'dotenv';

// Load environment variables early
dotenv.config();

// Disable SSL certificate verification for Supabase in development
if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: new GlobalLogger() });

    app.useStaticAssets('src/public', {
        prefix: `/${process.env.API_ENDPOINT_PREFIX || 'api'}/public`,
        etag: true,
        setHeaders: (res) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
        },
    });
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: VERSION_NEUTRAL,
    });

    app.setGlobalPrefix(process.env.API_ENDPOINT_PREFIX || 'api');
    app.use(json({ limit: '120mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));

    SwaggerModule.setup(`${process.env.API_ENDPOINT_PREFIX || 'api'}/docs`, app, createDocument(app), swaggerOptions);

    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
        credentials: true,
    });
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    await app.listen(process.env.PORT || 8000);
    console.log(`API listen at port: ${process.env.PORT || 8000}`);
}

bootstrap();
