"use strict";

const app = require('../app');
const logger = require('../src/config/logger');
const port = process.env.port || 3000;

app.listen(port, () => {
    logger.info(`${port}포트 Login 이동중....`);
})