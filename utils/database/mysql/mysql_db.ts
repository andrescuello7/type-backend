import { createPool } from "mysql2/promise";

export class MySqlConnection {
    constructor() {
        try {
            connectMysql();
            console.log("Connected mysql", `${process.env.NAME_DB}`)
        } catch (e) {
            console.log(e)
        }
    }
}

export const connectMysql = async () => {
    let response = await createPool({
        host: `${process.env.HOST_DB}`,
        user: `${process.env.USER_MS}`,
        password: `${process.env.PASSWORD_MS}`,
        database: `${process.env.NAME_DB}`,
        connectionLimit: 10
    })
    return response;
}