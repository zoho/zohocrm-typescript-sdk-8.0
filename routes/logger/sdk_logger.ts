import {Levels, Logger} from './logger';
import * as winston from 'winston';

/**
 * The class to initialize the SDK logger.
 */
export class SDKLogger {
    private constructor(loggerInstance: Logger) {
        let filePath = loggerInstance.getFilePath();
        if (loggerInstance.getLevel() === Levels.OFF || filePath == null || filePath!.length <= 0){
            winston.configure({
                silent : true,
                transports: [
                    new winston.transports.Console({
                        silent: true
                    })
                ]
            });
        }
        else if (filePath != null){
            winston.configure({
                level: loggerInstance.getLevel(),
                format: winston.format.combine(
                    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                    winston.format.prettyPrint()
                ),
                transports: [
                    new winston.transports.File({
                        filename: filePath
                    })
                ]
            });
        }
    }

    /**
     * The method to initialize SDKLogger
     * @param {Logger} loggerInstance A Logger class instance
     */
    public static initialize(loggerInstance: Logger): SDKLogger {
        return new SDKLogger(loggerInstance);
    }
}