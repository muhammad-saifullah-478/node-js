// const express = require("express")

// const users = require("./MOCK_DATA.json")

// const app = express()

// const port = 8000;

// app.get("/api/users", (req, res) => {

//     return res.json(users)

// });

// app.route("/api/users/id").get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// }).put((req,res )=>{
//     // edite user with id
//     return res.json({status:"panding"})
// }).delete((req,res)=>{
//     // Delete user with id
//     return res.json({status:"panding"})
// })

// app.post("/api/post",(req,res)=>{
//     return res.json({status:"panding"})
// })

// app.get("/users",(req,res)=>{
//     const html=`
//     <ul>
//     ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html)
// });

// app.listen(port, () => console.log("serwer is run"))

const express = require("express");

const { connectMogoDB } = require("./connection");

const { logReqRes } = require("./MiddleWear/index");

const userRouter = require("./routes/user");

const app = express();

const port = 8000;

connectMogoDB(
  "mongodb+srv://saifkasana:bxdP6WP5q409Cmq2@cluster1.egvutnb.mongodb.net/web")
  .then(() => console.lo("Mongo Db connected"));

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(port, () => console.log("server is running on port " + port));
