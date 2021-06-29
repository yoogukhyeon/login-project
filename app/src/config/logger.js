const {createLogger , transports , format} = require('winston');


const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'access.log',
            dirname: './logs',
            level: 'info',
            format: format.combine(
          
                // format.colorize(),
                format.timestamp({
                    format: "YYYY-MM-DD HH:MM:DD"
                }),
                format.printf( ({timestamp ,level, message}) => {
                    return `${timestamp} ${level} : ${message}`
                }),
            )
        }),
    ]
});

if(process.env.NODE_ENV === "production"){
    logger.add(      new transports.Console({
        filename: 'access.log',
        dirname: './logs',
        level: 'info',
        format: format.combine(
      
            // format.colorize(),
            format.timestamp({
                format: "YYYY-MM-DD HH:MM:DD"
            }),
            format.printf( ({timestamp ,level, message}) => {
                return `${timestamp} ${level} : ${message}`
            }),
        )
    }))
}

module.exports = logger;