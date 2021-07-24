const express = require("express");
const dotenv = require("dotenv");
const commentsRoute = require("./router/commentsRoute");
const postsRouter = require("./router/postRouter");
const errorHandler = require("./middleware/errorMiddleware");
const userRouter = require("./router/userRouter");
var cors = require('cors')



dotenv.config();

const app = express();


app.use(cors())

app.use(express.json());

/* Should I create this two endpoint and also should i have distingguish data of this two */
app.use('/comments', commentsRoute)
app.use('/posts', postsRouter)
app.use('/users', userRouter)


app.use(errorHandler)



module.exports = app