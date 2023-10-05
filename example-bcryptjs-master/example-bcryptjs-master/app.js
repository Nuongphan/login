const express = require('express')
const Router = require('./src/router')
const app = express()
const sequelize = require('./src/config/dbConfig')
const User = require('./src/models/user.model')
app.use(express.json())
app.use(express.urlencoded())
const upload= require("./src/middlewares/uploadFile")
const cors = require("cors")
const session = require('express-session');
app.use(cors({ credentials: true, origin: "*", methods: "GET,POST,DELETE,PUT,PATCH,OPTIONS" }))
app.use(express.static(__dirname + '/src/public/uploads'));
Router(app)
// User.sync().then(()=>{
//     console.log('ok');
// })
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.listen(8000, async () => {
    try {
        console.log(__dirname + '/src/public/uploads');
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log('app listen on port');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})