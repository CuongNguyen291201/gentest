import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './swagger.config';

export const createDocument = (app) => {
    const swaggerConfig = new DocumentBuilder()
        .setTitle(SWAGGER_CONFIG.title)
        .setDescription(SWAGGER_CONFIG.description)
        .setVersion(SWAGGER_CONFIG.version);

    if (SWAGGER_CONFIG.apiKey) swaggerConfig.addApiKey(SWAGGER_CONFIG.apiKey, SWAGGER_CONFIG.apiKeyName);
    const config = swaggerConfig.build();

    return SwaggerModule.createDocument(app, config);
};
