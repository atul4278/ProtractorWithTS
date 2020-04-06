import { createLogger,transports, format, info } from "winston";

export const logger = createLogger({
    level: 'info',
    transports: [new transports.File({
        filename: './logs/myLogger.log',
        format: format.combine(
            format.timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A'
            }), 
            format.printf((info) => {
                return `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`
            }))
    })],
});

