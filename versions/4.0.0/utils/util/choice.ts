/**
 * Common Class to provide or obtain a value, when there are multiple supported values.
 */
class Choice<T = any> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    /**
     * getValue
     */
    public getValue(): T {
        return this.value;
    }
}

export {
    Choice as MasterModel,
    Choice as Choice
}