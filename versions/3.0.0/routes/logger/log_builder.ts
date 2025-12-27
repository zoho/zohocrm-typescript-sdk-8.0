import { Logger } from './logger';

export class LogBuilder {
    private _level: string;
    private _filePath: string | null;

    public level(level: string) {
        this._level = level;
        return this;
    }

    public filePath(filePath: string | null) {
        this._filePath = filePath;
        return this;
    }

    public build(): Logger {
        return Logger.getInstance(this._level, this._filePath);
    }
}