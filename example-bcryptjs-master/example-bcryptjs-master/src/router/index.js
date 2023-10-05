const userRouter = require("./userRouter")

function Router(app){
app.use('/user',userRouter)
}

module.exports = Router