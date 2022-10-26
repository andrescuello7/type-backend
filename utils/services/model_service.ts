export class Models {
    async route(file: string) {
        return await
            `import { ${file}Controller } from './${file}_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new ${file}Controller();
        
        router.get('/', controller.get${file[0].toUpperCase() + file.slice(1)});
        router.post('/', controller.post${file[0].toUpperCase() + file.slice(1)});
        router.put('/:idPost', controller.put${file[0].toUpperCase() + file.slice(1)});
        router.delete('/:idPost', controller.delete${file[0].toUpperCase() + file.slice(1)});
        
        export default router;`
    }

    async controller(file: string) {
        return await
            `export class ${file}Controller {
            async get${file[0].toUpperCase() + file.slice(1)}() { }
        
            async post${file[0].toUpperCase() + file.slice(1)}() { }
        
            async put${file[0].toUpperCase() + file.slice(1)}() { }
        
            async delete${file[0].toUpperCase() + file.slice(1)}() { }
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
