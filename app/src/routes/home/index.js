"use strict"; //이크마스크립트 문법을 준수하겠다고 선언

const express = require('express');
const router = express.Router();

const crtl = require('./home.ctrl');


router.get('/', crtl.output.home);
router.get('/login', crtl.output.login);
router.post('/login', crtl.process.login);

module.exports = router;