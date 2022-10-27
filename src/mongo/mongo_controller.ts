import mongoModel from "./mongo_model";
import { Request, Response } from 'express';

export class mongoController {
    async getMongo(req: Request, res: Response) {
        const response = await mongoModel.find();
        res.send(response);
    }

    async postMongo(req: Request, res: Response) {
        const model = new mongoModel({
            ...req.body,
            CreateAdd: Date.now(),
        });
        const response = await model.save();
        res.status(200).send(response);
    }

    async putMongo(req: Request, res: Response) {
        const { id } = req.params;
        const response = await mongoModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).send(response);
    }

    async deleteMongo(req: Request, res: Response) {
        const { id } = req.params;
        const response = await mongoModel.findById(id);
        res.status(200).send(response);
    }
}