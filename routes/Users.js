import express from "express";
import {  createUsers, getUserbyName } from "./createMovies.js";
import bcrypt from "bcrypt";

// import jwt to produce token and get access
import jwt from 'jsonwebtoken';




async function generateHashedpassword(password){
    const no_of_rounds = 10;
    const salt = await bcrypt.genSalt(no_of_rounds);
    const hashedpassword = await bcrypt.hash(password,salt);
    return hashedpassword;
}



const router = express.Router();
router.post("/signup", express.json(), async function (req, res) {
    const {username,password} = req.body;

   const userfromdb = await getUserbyName(username);
    console.log(userfromdb)

    if(userfromdb){
        res.status(400).send({message:"username already exist"})
    }else if(password.length <8){
        res.send({message:"password must be atleast 8 characters"})
    }
    else{
        const hashedpassword = await generateHashedpassword(password);
        // db.users.insertOne(data);
    
    
        const result = await createUsers({
            username:username,
            password:hashedpassword,
        });
        res.send(result);
    }
  });

  router.post("/login", express.json(), async function (req, res) {
    const {username,password} = req.body;

   const userfromdb = await getUserbyName(username);
    console.log(userfromdb)

    if(!userfromdb){
        res.status(400).send({message:"invalid credentials"})
    }
    else
    {
        const storedpassword = userfromdb.password;
       const ispasswordmatch =  await bcrypt.compare(password,storedpassword);
       console.log(ispasswordmatch);

       if(ispasswordmatch){
        const token = jwt.sign({ id: userfromdb._id }, process.env.SECRET_KEY,{expiresIn:"1d"});
        res.send({message:"successful login",token:token}) //
    }
    else{
        res.status(400).send({message:"invalid credentials"})
    }
    }
    
  });

  export const usersRouter = router;


