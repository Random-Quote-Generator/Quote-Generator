const express = require("express");
const userRoute = require('./routes/usersRouter')
const postsRoute = require('./routes/postsRouter')
const sequelize =require("./models/config");
const { Sequelize } = require("sequelize");
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../my-react-app/public"));
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/posts", postsRoute);


sequelize.sync()
.then(()=>console.log('database connected') )
sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully");
}).catch((err) => {
  console.error("Unable to connect to the database:", err);
});

app.listen(PORT, function () {
  console.log("listening on port "+PORT);
});
