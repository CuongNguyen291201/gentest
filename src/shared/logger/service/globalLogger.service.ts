import { ConsoleLogger } from '@nestjs/common';

export class GlobalLogger extends ConsoleLogger {
    error(message: unknown, ...rest: unknown[]): void {
        super.error(message, ...rest);
    }

    log(message: unknown, ...rest: unknown[]): void {
        super.log(message, ...rest);
    }
}
