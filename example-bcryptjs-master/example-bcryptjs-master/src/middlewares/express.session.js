const express = require('express');
const session = require('express-session');
require("dotenv").config()
const app = express();

app.use(session({
    secret: process.env.SESION_KEY_SECRET, // Key bí mật để mã hóa session
    resave: false,
    saveUninitialized: true
}));