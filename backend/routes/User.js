const express = require("express");
const User = require("../model/userSchema");
const Router = express.Router();
Router.get("/", async (req, resp) => {
  try {
    const userdetail = await User.find();
    resp.json(userdetail);
  } catch (err) {
    resp.send("Error" + err);
  }
});
Router.get("/:id", async (req, resp) => {
  try {
    const userdetail = await User.find({ email: req.params.id });
    resp.json(userdetail);
  } catch (err) {
    resp.send("Error" + err);
  }
});
Router.post("/", async (req, resp) => {
  const Adduser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const u1 = await Adduser.save();
    resp.status(200).send("OK");
  } catch (err) {
   
    resp.status(500).send("Internal Server Error"+err);
  }
});



module.exports = Router;
