import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/database/dataSource';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
    ],
    controllers: [

    ],
    providers: [

    ],
})
export class AppModule { }
