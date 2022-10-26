import mongoose from "mongoose";

export class MongoDbConnection {
    constructor() {
        this.auth();
    }
    private async auth() {
        const db = await mongoose.connect(`mongodb+srv://${process.env.USER_KEY}:${process.env.PASSWORD_KEY}@cluster0.qa9gg.mongodb.net/typescript?retryWrites=true&w=majority`);
        console.log("Connected db", db.connection.db.databaseName)
    }
}