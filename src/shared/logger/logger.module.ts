import { Module } from '@nestjs/common';
import { DefaultLoggerService } from './service/defaultLogger.service';

@Module({
    providers: [DefaultLoggerService],
    exports: [DefaultLoggerService],
})
export class LoggerModule { }
