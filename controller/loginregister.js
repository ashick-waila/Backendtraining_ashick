import { registerdlogic } from "../service/loginservice.js";
import {
  checkEmailExists,
  fetchuserdetails,
  
} from "../model/loginregistermode.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config(); 
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;
  console.log(secretKey, "secretKey");



export async function hashPassword(password) {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  console.log(hashed, "hashedhashed");
  return  hashed;
}

export const registersignin = async (req, res) => {
  try {
    console.log(req, "req321");

    const { Email, Password, username } = req.body;
    console.log(Email, Password, username, "req321");

    const exists = await checkEmailExists(Email);
    if (exists) return res.status(400).json({ error: "Email already exists" });

    const hashedpassword = await hashPassword(Password, 10);
    console.log(hashedpassword, "hashedpassword");

    const insertregisteredval = await registerdlogic(
      Email,
      hashedpassword,
      username
    );
    console.log(insertregisteredval, "insertregisteredval");

    res.status(200).json({
      message: "user added successfully",
      time: new Date().toISOString(),
      data: insertregisteredval,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getlogineduserdetails = async (req, res) => {
  try {
    console.log(req, "req321");
    const { Email, Password } = req.body;
    console.log(Email, Password, "PasswordEmail");
    const fetchuserid =  await fetchuserdetails(Email);
    console.log(fetchuserid, "fetchuserid");
    const user = fetchuserid.recordset[0];
    
    if (!user.Email || !user.password ){
          if (fetchuserid.Email) return res.status(400).json({ error: "no records found , create your account" });
  }

const hashedpassword = await bcrypt.compare(req.body.Password, user.password )
    console.log(hashedpassword, "hashedpassword");

if (!hashPassword){
      return res.status(400).json({ message: "Incorrect password" });
}
    const payload = { id: user.ID, username: user.username, email: user.email };

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
    console.log(token, "tokentoken");


    res.status(200).json({
      message: "login added successfully",
      time: new Date().toISOString(),
      data: payload,
      token
    });




  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
