import { createPool, Pool } from "mysql2/promise";

export class MySqlConnection {
    constructor() {
        this.auth();
    }
    private async auth() {
        const connection : Pool = await createPool({
            host: "localhost",
            user: "root",
            database: "typescript",
            connectionLimit: 10
        })
        console.log(connection)
    }
}