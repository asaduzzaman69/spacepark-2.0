const app = require('./app')
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully db connected"))
  .catch((err) => console.log(err));


app.listen(process.env.PORT_NUMBER, () => {
  console.log(`App is running on port ${process.env.PORT_NUMBER}`);
});
