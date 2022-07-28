// all the db query are organized here
// all the api's are organized in the moies js 

import { client } from "../index.js";
import { ObjectId } from "mongodb";
// used to convert the id to _id of the mongodb id


export async function createMovies(data) {
    return await client
        .db("movies")
        .collection("movies")
        .insertMany(data);
}

export async function createUsers(data){
    return await client
        .db("movies")
        .collection("users")
        .insertOne(data);
}

export async function updateMoviebyId(id, data) {
    return await client
        .db("movies")
        .collection("movies")
        .updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function deleteMoviebyId(id) {
    return await client
        .db("movies")
        .collection("movies")
        .deleteOne({ _id: ObjectId(id) });
}
export async function getMoviebyId(id) {
    return await client
        .db("movies")
        .collection("movies")
        .findOne({ _id: ObjectId(id) });
}

export async function getUserbyName(username){
    // db.users.findOne({username:username})
    return await client
        .db("movies")
        .collection("users")
        .findOne({username:username});
}

export async function getAllMovies(req) {
    return await client
        .db("movies")
        .collection("movies")
        .find(req.query)
        .toArray();
}
