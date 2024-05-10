const express = require("express");
const Server = express();
const Chats = require("./Data/Data");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("../backend/routes/User");
dotenv.config();
const url = "mongodb://localhost/chatapp";

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected");
});
//----------------------------------------------------------
/*const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}*/
Server.use(cors());
Server.use(express.json());
Server.use("/user", userRouter);

//======================================================

Server.get("/", (req, resp) => {
  resp.send("api running");
});
Server.get("/api/chat", (req, resp) => {
  resp.send(Chats);
});
Server.get("/api/chat/:id", (req, resp) => {
  const Data = Chats.find((c) => c._id === req.params.id);
  resp.send(Data);
});

const PORT = process.env.PORT || 5000;
Server.listen(PORT, () => {
  console.log(`server started on port ${PORT} `);
});
