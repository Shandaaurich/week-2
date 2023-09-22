//connect to MongoDB
import { getDb } from '../db/connect';


const getData = async (req, res) => {
    //wait for connection find()everything inside
    const result = await getDb().db.collection('user').find();
    //return as an array and loop through
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);//first item in array
    });
};

//export the data from the db
export default {getData};