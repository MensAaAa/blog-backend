module.exports = {
  type: "mysql",
  host: process.env.HOST,
  username: process.env.USERNAME,
  port: 3306,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: false,
  migrationsTableName: "migrations",
  entities: [
     "src/entity/**/*.ts"
  ],
  migrations: [
     "src/migrations/**/*.ts"
  ],
  subscribers: [
     "src/subscribers/**/*.ts"
  ],
  cli: {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migrations",
     "subscribersDir": "src/subscribers"
  }
}