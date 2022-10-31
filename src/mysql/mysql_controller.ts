import { Request, Response } from "express";
import { connectMysql } from "../../utils/database/mysql/mysql_db";

export class mysqlController {
    async getMysql(req: Request, res: Response) {
        try {
            let connect = await connectMysql();
            const response = await connect.query('SELECT * FROM users');
            res.send(response[0]);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method get");
        }
    }

    async postMysql(req: Request, res: Response) {
        try {
            let connect = await connectMysql();
            const response = await connect.query('INSERT INTO users set ?', req.body);
            res.send(response[0]);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method post");
        }
    }

    async putMysql(req: Request, res: Response) {
        const { id } = req.params;
        try {
            let connect = await connectMysql();
            const response = await connect.query('UPDATE users set ? where id = ?', [req.body, id]);
            res.send(response[0]);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method put");
        }
    }

    async deleteMysql(req: Request, res: Response) {
        const { id } = req.params;
        try {
            let connect = await connectMysql();
            const response = await connect.query('DELETE FROM users WHERE id = ?', [id]);
            res.send(response[0]);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method delete");
        }
    }
}