import fs from "fs";
import readline from "readline";
import { MongoModels } from "./mongo_model_service";
import { MySqlModels } from "./mysql_model_service";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileService = () => {
    const mongoModels = new MongoModels();
    const mysqlModels = new MySqlModels();

    console.log("Created new Model \n")
    console.log("[1] MongoDb name_file \n[2] MySql name_file \n")

    input.on("line", (line) => {
        let file = line.slice(2)
        let num = line[0]
        switch (num) {
            case "1":
                createModel(file, mongoModels)
                break;
            case "2":
                createModel(file, mysqlModels)
                break;
            default:
                process.exit(0)
        }
    })
}

const createModel = (file, model) => {
    fs.mkdir(`./src/${file}/`, async () => {
        fs.writeFile(`./src/${file}/${file}_router.ts`, await model.route(file), () => { })
        fs.writeFile(`./src/${file}/${file}_model.ts`, await model.model(file), () => { })
        fs.writeFile(`./src/${file}/${file}_controller.ts`, await model.controller(file), () => { process.exit(0) })
    })
}

fileService();