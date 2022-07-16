import { client } from "../index.js";

// all the db query are organized here
// all the api's are organized in the moies js 

export async function createMovies(data) {
    return await client
        .db("movies")
        .collection("movies")
        .insertMany(data);
}
export async function updateMoviebyId(id, data) {
    return await client
        .db("movies")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function deleteMoviebyId(id) {
    return await client
        .db("movies")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function getMoviebyId(id) {
    return await client
        .db("movies")
        .collection("movies")
        .findOne({ id: id });
}
export async function getAllMovies(req) {
    return await client
        .db("movies")
        .collection("movies")
        .find(req.query)
        .toArray();
}
