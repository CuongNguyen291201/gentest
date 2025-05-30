import { SwaggerCustomOptions } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

interface ISwaggerConfig {
    title: string;
    description: string;
    version: string;
    apiKey: SecuritySchemeObject;
    apiKeyName: string;
}

export const SWAGGER_CONFIG: ISwaggerConfig = {
    title: 'Gentest API',
    description: 'Gentest API Documentation',
    version: 'neutral',
    apiKey: {
        type: 'apiKey',
        name: 'authorization-url-params',
        description: 'enter token',
    },
    apiKeyName: 'token',
};

export const swaggerOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Gentest API Document',
};
