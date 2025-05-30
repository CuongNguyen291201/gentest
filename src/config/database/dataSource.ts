import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import * as env from 'dotenv';
env.config();

export const dataSourceOptions: DataSourceOptions = {
    // Use DATABASE_URL if available, otherwise use individual env vars
    url: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 5432),
    logging: process.env.TYPEORM_LOGGING === 'true',
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    type: 'postgres',
    database: process.env.DB_NAME || '',
    entityPrefix: process.env.DB_ENTITY_PREFIX || '',
    entities: ['dist/**/*.entity.js'],
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    // charset: 'utf8mb4',
    migrations: ['src/migrations/*.js'],
    namingStrategy: new SnakeNamingStrategy(),
    // SSL configuration for Supabase and other cloud databases
    ssl: process.env.DB_HOST?.includes('supabase.com') || process.env.DB_HOST?.includes('pooler.supabase.com') 
        ? { rejectUnauthorized: false } 
        : process.env.NODE_ENV === 'production' 
            ? { rejectUnauthorized: false } 
            : false,
    // Additional options for Supabase connection
    extra: {
        ssl: process.env.DB_HOST?.includes('supabase.com') || process.env.DB_HOST?.includes('pooler.supabase.com')
            ? { rejectUnauthorized: false }
            : undefined,
        // Connection pool settings for Supabase
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    },
    // cache: {
    //     type: 'redis',
    //     options: {
    //         host: process.env.REDIS_HOST,
    //         port: process.env.REDIS_PORT,
    //     },
    //     ignoreErrors: true,
    // },
};

const myDataSource = new DataSource(dataSourceOptions);

export default myDataSource;
