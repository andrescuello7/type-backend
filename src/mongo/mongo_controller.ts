import mongoModel from "./mongo_model";
import { Request, Response } from 'express';

export class mongoController {
    async getMongo(req: Request, res: Response) {
        try {
            const response = await mongoModel.find();
            res.send(response);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method get");
        }
    }

    async postMongo(req: Request, res: Response) {
        try {
            const model = new mongoModel({
                ...req.body,
                CreateAdd: Date.now(),
            });
            const response = await model.save();
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method post");
        }
    }

    async putMongo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await mongoModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method put");
        }
    }

    async deleteMongo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await mongoModel.findByIdAndRemove(id);
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method delete");
        }
    }
}