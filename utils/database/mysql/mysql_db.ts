import { createPool } from "mysql2/promise";

export class MySqlConnection {
    constructor() {
        try {
            connectMysql();
            console.log("mysql connection")
        } catch (e) {
            console.log(e)
        }
    }
}

export const connectMysql = async () => {
    let response = await createPool({
        host: "localhost",
        user: "root",
        password: "241200",
        database: "typescript",
        connectionLimit: 10
    })
    return response;
}