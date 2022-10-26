import { createPool, Pool } from "mysql2/promise";

export class MySqlConnection {
    public db: Pool;

    constructor() {
        this.auth();
    }

    async auth() {
        let response = await createPool({
            host: "localhost",
            user: "root",
            database: "typescript",
            connectionLimit: 10
        })
        this.db = await response;
        console.log("mysql connection")
    }
}