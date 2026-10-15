/**
 * This class represents the Logger level and the file path.
 */
export class Logger {
    private level: string;
    private filePath: string | null;

    private constructor(level: string, filePath: string | null) {
        this.level = level;
        this.filePath = filePath;
    }

    /**
     * Creates an Logger class instance with the specified log level and file path.
     * @param {Levels} level A Levels class member containing log level.
     * @param {String | null} filePath A string containing absolute file path to write logs.
     */
    public static getInstance(level: string, filePath: string | null): Logger {
        return new Logger(level, filePath);
    }

    /**
     * The method to get the logger level
     * @returns {String} A string representing the Log level.
     */
    public getLevel(): string {
        return this.level;
    }

    /**
     * The method to get the logger filepath
     * @returns {String | null} A string representing the Log filepath
     */
    public getFilePath(): string | null {
        return this.filePath;
    }
}

/**
 * This class represents the possible logger levels
 */
export class Levels {
    public static INFO = 'info';
    public static DEBUG = 'debug';
    public static WARN = 'warn';
    public static VERBOSE = 'verbose';
    public static ERROR = 'error';
    public static SILLY = 'silly';
    public static OFF = 'off';
}

