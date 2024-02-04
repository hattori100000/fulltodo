const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://clownlaugh100:thapa@cluster0.lfq1qxs.mongodb.net/login-form?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("You are connected to db"))
.catch((err) => console.log("Sorry, no connection to db:", err));

