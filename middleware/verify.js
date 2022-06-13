import register from "../models/schema.js";
import Jwt from "jsonwebtoken";

export default async (req, res, next) => {
  try {
    const token = await register.findOne({ email: req.header('email') });
    if (token.accessToken == " ") return res.status(401).send("access denied token is not provide");

    const veriyfied = await Jwt.verify(
      token.accessToken,
      process.env.accessToken
    );
    if(veriyfied) next();
    
  } 
  catch (err) {
    res.send(err);
  }
};
