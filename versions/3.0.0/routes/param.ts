/**
 * This class represents the HTTP parameter.
 */
class Param<T = any> {
    private name: string;
    private className?: string | null;

    /**
     * Creates an Param class instance with the specified parameter name.
     * @param {string} name - A String containing the parameter name.
     * @param {string | null} className - A String containing the class name.
     */
    constructor(name: string, className?: string | null) {
        this.name = name;
        this.className = className;
    }

    /**
     * This is a getter method to get parameter name.
     * @returns {string} A String representing the parameter name.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * This is a getter method to get class name.
     * @returns {string | undefined | null} A String representing the class name.
     */
    public getClassName(): string | undefined | null {
        return this.className;
    }
}

export {
    Param as MasterModel,
    Param as Param
}