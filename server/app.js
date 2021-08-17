const express = require("express");
const dotenv = require("dotenv");
const commentsRoute = require("./router/commentsRoute");
const postsRouter = require("./router/postRouter");
const errorHandler = require("./middleware/errorMiddleware");
const userRouter = require("./router/userRouter");
var cors = require('cors');
const { friendsRouter } = require("./router/friendsRouter");



dotenv.config();

const app = express();

app.use(express.json());

app.use(cors())


app.use('/comments', commentsRoute)
app.use('/posts', postsRouter)
app.use('/users', userRouter)
app.use('/friends', friendsRouter)


app.use(errorHandler)



module.exports = app