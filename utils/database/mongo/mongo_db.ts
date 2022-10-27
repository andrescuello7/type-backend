import mongoose from "mongoose";

export class MongoDbConnection {
    constructor() {
        this.auth();
    }
    private async auth() {
        const db = await mongoose.connect(`mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@cluster0.qa9gg.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`);
        console.log("Connected mongo", db.connection.db.databaseName)
    }
}