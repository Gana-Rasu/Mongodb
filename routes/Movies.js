// organizing the app using router to reduce the code side


import express from "express";
import { getAllMovies, getMoviebyId, deleteMoviebyId, updateMoviebyId, createMovies } from "./createMovies.js";
// import { auth } from "./middleware/auth.js";


// establishing a router connection
const router = express.Router();

// instead of app router is being used and followed
router.get("/",async function (req, res) {
    // db.movies.find({})
  
    if(req.query.rating){
      req.query.rating = +req.query.rating;
    }
  
  console.log(req.query)
  
    // find will only display the first 20
    // cursor - pagination
    const movies = await getAllMovies(req); //convert pagination to array
    res.send(movies);
  });
  
router.get("/:id", async function (req, res) {
    console.log(req.params);
    // db.movies.findOne({id:"101"})
    // const { id } = req.params;
    var myId = JSON.parse(req.params.id);
    // find always returns a element , that's why it's used instead of filter
    //  const movie = movies.find((mv)=>mv.id===id)
    const movie = await getMoviebyId(myId);
  
    {
      movie ? res.send(movie) : res.status(404).send({ msg: "movie not found" });
    }
  });
  
  // api for deleting
router.delete("/:id", async function (req, res) {
    console.log(req.params);
    // db.movies.deleteOne({id:"101"})
    const { id } = req.params;
    // find always returns a element , that's why it's used instead of filter
    //  const movie = movies.find((mv)=>mv.id===id)
    const result = await deleteMoviebyId(id);
  
      // using the deletecount of postman
    {
      result.deletedCount > 0  ? res.send(result) : res.status(404).send({ msg: "movie not found" });
    }
  });
  
  // api for updating rating of a movie
router.put("/:id", async function (req, res) {
    console.log(req.params);
   
    const { id } = req.params;
    const data = req.body;
  
   // db.movies.updateOne({id:"101"},{$set:data})
   const result = await updateMoviebyId(id, data);
  res.send(result);
  
  });
  
  // creating api for sending/creating data
  
  // this data is not coming as json so middleware is used to convert the data to json , body-> json(inbuilt middleware)
router.post("/", express.json(), async function (req, res) {
    const data = req.body;
    console.log(data);
    // db.movies.insertMany(data)
    const result = await createMovies(data);
    res.send(result);
  });

  export const moviesRouter = router;


