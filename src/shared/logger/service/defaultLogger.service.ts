import { Injectable } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';

@Injectable()
export class DefaultLoggerService {
    logger: any = WinstonModule.createLogger({
        transports: [
            new transports.File({
                filename: `${'logs'}/default.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp(),
                    format.printf((payload) => {
                        const { context, timestamp } = payload;
                        let message = payload.message;
                        if (message && typeof message !== 'string') message = JSON.stringify(message);
                        return `${timestamp} --- ${message} --- ${context || ''}`;
                    }),
                ),
                zippedArchive: false,
                tailable: true,
                maxsize: 100000000,
                maxFiles: 1,
            }),
        ],
    });

    errorLogger: any = WinstonModule.createLogger({
        transports: [
            new transports.File({
                filename: `${'logs'}/default-error.log`,
                level: 'error',
                format: format.combine(
                    format.timestamp(),
                    format.printf((payload) => {
                        const { context, timestamp } = payload;
                        let message = payload.message;
                        let stack = payload.stack;
                        if (message && typeof message !== 'string') message = JSON.stringify(message);
                        if (stack && typeof stack !== 'string') stack = JSON.stringify(stack);
                        return `ERROR: ${timestamp} --- ${message} --- ${stack} --- ${context || ''}`;
                    }),
                ),
                zippedArchive: false,
                tailable: true,
                maxsize: 100000000,
                maxFiles: 1,
            }),
        ],
    });

    log(message: any, service?: string) {
        this.logger.log(message, service);
    }

    error(message: any, trace?: any, service?: string) {
        if (trace) console.log(trace);
        this.errorLogger.error(message, trace, service);
    }
}
