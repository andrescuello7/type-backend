import fs from "fs";
import readline from "readline";
import { Models } from "./model_service";

const fileService = () => {
    const models = new Models();
    console.log("> name file...")
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }).on("line", (file) => {
        fs.mkdir(`./src/${file}/`, async () => {
            fs.writeFile(`./src/${file}/${file}_router.ts`, await models.route(file), () => { })
            fs.writeFile(`./src/${file}/${file}_model.ts`, await models.model(file), () => { })
            fs.writeFile(`./src/${file}/${file}_controller.ts`, await models.controller(file), () => { process.exit(0) })
        })
    })
}

fileService();