const uri = process.env.MONGO_URI;
const MongoClient = require ( 'mongodb' ).MongoClient;
const DB_NAME = "ca1cbwa2020092";
const MONGO_OPTIONS = { useUnifiedTopology: true , useNewUrlParser: true };

module.exports = () => {
    const count = ( collectionName ) => {
        return new Promise (( resolve , reject ) => {
            MongoClient.connect ( uri , MONGO_OPTIONS , ( err, client ) => {
                if (err) {
                    console.log("  === count::collection.connect")
                    console.log(err)
                    return reject(err)
                  }
                const db = client.db( DB_NAME );
                const collection = db.collection ( collectionName );
                
                collection.countDocuments ({}, ( err , docs ) => {
                    if (err) {
                        console.log(err)
                        return reject("=== collection::MongoClient.countDocuments")
                      }
                    resolve ( docs );
                    client.close ();
                });
            });
        });
    };
    const get = ( collectionName, query = {} ) => {
        return new Promise (( resolve , reject ) => {
            MongoClient.connect ( uri ,MONGO_OPTIONS ,( err, client ) => {
                if (err) {
                    console.log(err)
                    return reject("=== get::MongoClient.Name")
                  }
                const db = client.db ( DB_NAME );
                const collection = db.collection ( collectionName );
                
                collection.find (query).toArray (( err ,docs ) => {
                    if (err) {
                        console.log("  === get::collection.find")
                        console.log(err)
                        return reject(err)
                      }
                    resolve ( docs );
                    client.close ();
                });
            });
        });
    };
    const add = ( collectionName , item ) => {
        return new Promise (( resolve , reject ) => {
            MongoClient.connect ( uri , MONGO_OPTIONS, ( err ,client ) => {
                if (err) {
                    console.log("  === add::collection.connect")
                    console.log(err)
                    return reject(err)
                  }
                
                const db = client.db ( DB_NAME );
                const collection = db.collection ( collectionName );
                
                collection.insertOne ( item , ( err , result ) => {
                    if (err) {
                        console.log("  === add::collection.connect")
                        console.log(err)
                        return reject(err)
                      }
                    resolve ( result );
                    client.close();
                });
            });
        });
    };
    const aggregate = ( collectionName , pipeline = []) => {
        return new Promise (( resolve , reject ) => {
            if (err) {
                console.log("  === aggregate::collection.collectionName")
                console.log(err)
                return reject(err)
              }
            MongoClient.connect ( uri ,MONGO_OPTIONS, ( err, client ) => {
                if (err) {
                    console.log("  === MongoClient::collection.connect")
                    console.log(err)
                    return reject(err)
                  }
                const db = client.db ( DB_NAME );
                const collection = db.collection ( collectionName );
                
                collection.aggregate ( pipeline ).toArray (( err , docs ) => {
                    if ( err ) {
                        console.log ( " --- aggregate ERROR ---" );
                        console.log ( err );
                    }
                    resolve ( docs );
                    client.close ();
                });
            });
        });
    };
    return {
        count,
        get,
        add,
        aggregate,
    };
};