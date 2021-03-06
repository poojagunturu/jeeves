const ROOT_DIR = process.env.NODE_ENV != "production" ? "src/" : "build/"
const EXT = process.env.NODE_ENV != "production" ? ".ts" : ".js"

module.exports = {
   "type": "postgres",
   "host": process.env.DB_HOST,
   "username": process.env.DB_USERNAME || "jeeves",
   "password": process.env.DB_PASSWORD || "",
   "database": process.env.DB_TABLE || "jeeves",
   "port": process.env.DB_PORT || 5432,
   "synchronize": true,
   "logging": true,
   "entities": [
      ROOT_DIR + "entity/**/*" + EXT
   ],
   "migrations": [
      ROOT_DIR + "migration/**/*" + EXT
   ],
   "subscribers": [
      ROOT_DIR + "subscriber/**/*" + EXT
   ],
   "cli": {
      "entitiesDir": ROOT_DIR + "entity",
      "migrationsDir": ROOT_DIR + "migration",
      "subscribersDir": ROOT_DIR + "subscriber"
   }
}
