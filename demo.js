const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://aur20001:uJk4EYMnvFInFvWX@cluster0.7dnafof.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        await client.connect();

        await createListing(client, {
            name: "lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1,
        });


    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingAndReviews").insertOne(newListing);
    console.log(`new listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });

};

