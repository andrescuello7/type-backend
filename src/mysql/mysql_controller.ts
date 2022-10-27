import { Request, Response } from "express";
import { connectMysql } from "../../utils/database/mysql/mysql_db";

export class mysqlController {
    async getMysql(req: Request, res: Response) {
        let connect = await connectMysql();
        const response = await connect.query('SELECT * FROM users');
        res.send(response[0]);
    }

    async postMysql(req: Request, res: Response) {
        let connect = await connectMysql();
        const response = await connect.query('INSERT INTO users set ?', req.body);
        res.send(response[0]);
    }

    async putMysql(req: Request, res: Response) {
        const { id } = req.params;
        let connect = await connectMysql();
        const response = await connect.query('UPDATE users set ? where id = ?', [req.body, id]);
        res.send(response[0]);
    }

    async deleteMysql(req: Request, res: Response) {
        const { id } = req.params;
        let connect = await connectMysql();
        const response = await connect.query('DELETE FROM users WHERE id = ?', [id]);
        res.send(response[0]);
    }
}