/**
 * This class represents the HTTP header.
 */
class Header<T = any> {
    private name: string;
    private className?: string | null;

    /**
	 * Creates a Header class instance with the specified header name.
	 * @param {string} name - A String containing the header name.
	 * @param {string | null} className - A String containing the class name.
	 */
    constructor(name: string, className?: string | null) {
        this.name = name;
        this.className = className;
    }

    /**
	 * This is a getter method to get the header name.
	 * @returns A String representing the header name.
	 */
    public getName() : string {
        return this.name;
    }

    /**
	 * This is a getter method to get the class name.
	 * @returns {string | undefined | null} A String representing the class name.
	 */
    public getClassName() : string | undefined | null {
        return this.className;
    }
}

export {
    Header as MasterModel,
    Header as Header
}