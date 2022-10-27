import mongoModel from "./mongo_model";
import { Request, Response } from 'express'

export class mongoController {
    public async getMongo(req: Request, res: Response) {
        const response = await mongoModel.find();
        res.send(response);
    }

    public async postMongo(req: Request, res: Response) {
        try {
            console.log(req.body)
            // const response = new mongoModel({
            //     ...req.body,
            //     CreateAdd: Date.now(),
            // });
            // res.send(response);
            // const create = await response.save();
            // res.status(200).send(create);
        } catch (e) {
            console.log(e)
        }
    }

    public async putMongo(req: Request, res: Response) {

    }

    public async deleteMongo(req: Request, res: Response) {

    }
}

// curl -X POST https://localhost:3000 -H 'Content-Type: application/json' -d '{"title":"Andres","description":"Cuello Villafane", "image": "https://twitter.com/"}'
   