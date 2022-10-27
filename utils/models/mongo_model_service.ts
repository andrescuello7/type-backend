export class MongoModels {
    async route(file: string) {
        return await
            `import { ${file}Controller } from './${file}_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new ${file}Controller();
        
        router.get('/', controller.get${file[0].toUpperCase() + file.slice(1)});
        router.post('/', controller.post${file[0].toUpperCase() + file.slice(1)});
        router.put('/:id', controller.put${file[0].toUpperCase() + file.slice(1)});
        router.delete('/:id', controller.delete${file[0].toUpperCase() + file.slice(1)});
        
        export default router;`
    }

    async controller(file: string) {
        return await
            `import ${file}Model from "./${file}_model";
            import { Request, Response } from 'express';
            
            export class ${file}Controller {
                async get${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    const response = await ${file}Model.find();
                    res.send(response);
                }
            
                async post${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    const model = new ${file}Model({
                        ...req.body,
                        CreateAdd: Date.now(),
                    });
                    const response = await model.save();
                    res.status(200).send(response);
                }
            
                async put${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    const { id } = req.params;
                    const response = await ${file}Model.findOneAndUpdate({ _id: id }, req.body, { new: true });
                    res.status(200).send(response);
                }
            
                async delete${file[0].toUpperCase() + file.slice(1)}(req: Request, res: Response) {
                    const { id } = req.params;
                    const response = await ${file}Model.findById(id);
                    res.status(200).send(response);
                }
            }`
    }

    async model(file: string) {
        return await
            `import { Schema, model } from 'mongoose';

        const ${file}Model = new Schema({
            title: {
                type: String,
                required: true,
                tim: true
            },
            CreateAdd: {
                type: Date,
                default: Date.now()
            }
        })

        export default model('${file}Model', ${file}Model);`
    }
}
