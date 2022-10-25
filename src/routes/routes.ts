import http, { get } from "http";
import { methods } from "./e_method";


export class Routes {
    constructor(private host: string, private port: number) { }

    method(path: string, enumMethod: methods, controller: any) {
        switch (enumMethod) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                console.log("Error on method, undefined!")
                break;
        }
    }
}