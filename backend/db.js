const MongoClient = require('mongodb').MongoClient

const {
	MONGO_USERNAME,
	MONGO_PASSWORD,
	MONGO_CLUSTER,
	MONGO_PORT,
	MONGO_DB
  } = process.env;
const collections = ['emails']
const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}-shard-00-00.9oybr.mongodb.net:${MONGO_PORT},${MONGO_CLUSTER}-shard-00-01.9oybr.mongodb.net:${MONGO_PORT},${MONGO_CLUSTER}-shard-00-02.9oybr.mongodb.net:${MONGO_PORT}/${MONGO_DB}?ssl=true&replicaSet=atlas-9m47na-shard-0&authSource=admin&retryWrites=true&w=majority`

let db;

// connect to database
function connect (callback) {
	MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then(client => {
	  	db = client.db(`${MONGO_DB}`);
	  	initCollections();
	  	console.log('DATABASE: connected to DB');
	  	callback();
	})
	.catch(err => console.log(err));
}

// get database
function get() {
	return db;
}

// close db connection
function close() {
	db.close();
}

// init collections in the database
function initCollections() {
	collections.forEach(collection => {
		if (!db.collection(collection)) {
			db.createCollection(collection);
		}
	})
}

function getCollection (collection) {
	return db.collection(collection)
}

module.exports = {
	connect, get, close, getCollection
}