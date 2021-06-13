"use strict"; //이크마스크립트 문법을 준수하겠다고 선언

const express = require('express');
const router = express.Router();

const crtl = require('./home.ctrl');


router.get('/', crtl.home);
router.get('/login', crtl.login);


module.exports = router;