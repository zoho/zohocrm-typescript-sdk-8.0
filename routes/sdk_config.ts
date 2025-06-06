/**
 * The class to configure the SDK.
 */
export class SDKConfig {
    private autoRefreshFields: boolean;
    private pickListValidation: boolean;
    private _timeout: number = 0;
    private _updateAPIDomain : boolean;

    /**
     * Creates an instance of SDKConfig with the given parameters
     * @param {Boolean} autoRefreshFields A boolean representing autoRefreshFields
     * @param {Boolean} pickListValidation A boolean representing pickListValidation
     * @param {number} timeout A Integer representing timeout
     * @param {Boolean} updateAPIDomain A boolean representing updateAPIDomain
     */
    constructor(autoRefreshFields: boolean, pickListValidation: boolean, timeout: number, updateAPIDomain: boolean) {
        this.autoRefreshFields = autoRefreshFields;
        this.pickListValidation = pickListValidation;
        this._timeout = timeout;
        this._updateAPIDomain = updateAPIDomain;
    }

    /**
     * This is a getter method to get autoRefreshFields.
     * @returns {Boolean} A boolean representing autoRefreshFields
     */
    public getAutoRefreshFields(): boolean {
        return this.autoRefreshFields;
    }

    /**
     *  This is a getter method to get pickListValidation.
     * @returns {Boolean} A boolean representing pickListValidation
     */
    public getPickListValidation(): boolean {
        return this.pickListValidation;
    }

    /**
     *  This is a getter method to get timeout.
     * @returns {number} A Integer representing API timeout
     */
    public getTimeout(): number {
        return this._timeout;
    }

    applyAPIDomainUpdate()
    {
        return this._updateAPIDomain;
    }
}