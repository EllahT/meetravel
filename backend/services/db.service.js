
const MongoClient = require('mongodb').MongoClient;

const config  =  require('../config')

// Database Name
const dbName = 'MEETRAVEL';

var dbConn = null;
var gClient = null;

// function connect() {
//     // Reuse existing connection if exist
//     if (dbConn) return Promise.resolve(dbConn);
//     const MongoClient = require('mongodb').MongoClient;
                
//     const url = 'mongodb+srv://ellah:lily2016@cluster0-zot7w.mongodb.net/ellah?retryWrites=true';
 
//     return MongoClient.connect(url , { useNewUrlParser: true })
//         .then(client => {
//             console.log('Connected to MongoDB');
//             // If we get disconnected (e.g. db is down)
//             client.on('close', () => {
//                 console.log('MongoDB Diconnected!');
//                 client.close()
//                 dbConn = null;
//             })
//             dbConn = client.db()
//             return dbConn;
//         })
//  }

async function connect() {
    if (dbConn) return dbConn;
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

        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

function closeDatabaseConnectionAndExit() {
    gClient.close();
    process.exit();
}

module.exports = {
    connect,
    getCollection
}