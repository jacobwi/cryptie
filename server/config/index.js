/*
*   If you're using this application in real-world please use .env files to store sensetive information such as
*   database usernames and passwords, 3rd party api keys, jwt secret etc... This will prevent those infromation to be public or being accessed by the client.
*/

/*
    DATABASE
*/
let MongoUsername = "admin"
let MongoPassword = "abc123"
const MongoURI = `mongodb://${MongoUsername}:${MongoPassword}@ds161764.mlab.com:61764/crypto`



/*
    ENCRYPTION
*/
const jwtSecret = 'someSecret'
const saltRounds = 12
const tokenExpiration = 3600

/*
    !!!! EXPORT !!!!
*/
export {MongoUsername, MongoPassword, MongoURI, jwtSecret, saltRounds, tokenExpiration};