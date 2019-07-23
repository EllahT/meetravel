
const MongoClient = require('mongodb').MongoClient;

const config  =  require('../config')

// Database Name
const dbName = 'MEETRAVEL';

var dbConn = null;
var gClient = null;

async function connect() {
    if (dbConn) return Promise.resolve(dbConn);
    
    try {
        const client = await MongoClient.connect(
            config.dbURL,
            {useNewUrlParser: true}
        );
        
        gClient = client;

        const db = client.db(dbName);
        dbConn = db;
        
        process.on('SIGINT', closeDatabaseConnectionAndExit);
        process.on('SIGTERM', closeDatabaseConnectionAndExit);

        client.on('close', () => {
            console.log('MongoDB Diconnected!');
            client.close()
            dbConn = null;
        })
             
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection( collectionName);
}

function closeDatabaseConnectionAndExit() {
    gClient.close();
    process.exit();
}

module.exports = {
    connect,
    getCollection
}