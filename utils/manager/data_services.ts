import { MongoDbConnection } from "../database/mongo/mongo_db";
import { MySqlConnection } from "../database/mysql/mysql_db";

export class DataService {
    public connection: any;
    
    constructor() {
        // this.connection = new MySqlConnection()
        this.connection = new MongoDbConnection()
    }
}