import { Constants } from "../../../utils/util/constants";
import { DBStore } from "./db_store";

export class DBBuilder {
    private _userName: string = Constants.MYSQL_USER_NAME;
    private _portNumber: number = Constants.MYSQL_PORT_NUMBER;
    private _password: string = "";
    private _host: string = Constants.MYSQL_HOST;
    private _databaseName: string = Constants.MYSQL_DATABASE_NAME;
    private _tableName: string = Constants.MYSQL_TABLE_NAME;
    public userName(userName: string): DBBuilder {
        if (userName != null) {
            this._userName = userName;
        }
        return this;
    }

    public portNumber(portNumber: number): DBBuilder {
        if (portNumber != null) {
            this._portNumber = portNumber;
        }
        return this;
    }

    public password(password: string): DBBuilder {
        if (password != null) {
            this._password = password;
        }
        return this;
    }

    public host(host: string): DBBuilder {
        if (host != null) {
            this._host = host;
        }
        return this;
    }

    public databaseName(databaseName: string): DBBuilder {
        if (databaseName != null) {
            this._databaseName = databaseName;
        }
        return this;
    }

    public tableName(tableName: string): DBBuilder {
        if (tableName != null) {
            this._tableName = tableName;
        }
        return this;
    }

    public build(): DBStore {
        return new DBStore(this._host, this._databaseName, this._tableName, this._userName, this._password, this._portNumber);
    }
}