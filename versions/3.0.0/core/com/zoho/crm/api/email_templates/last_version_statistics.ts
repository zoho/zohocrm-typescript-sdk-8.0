import {Model} from "../../../../../../utils/util/model";

class LastVersionStatistics implements Model{

	private tracked: number;
	private delivered: number;
	private opened: number;
	private bounced: number;
	private sent: number;
	private clicked: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the tracked
	 * @returns A number representing the tracked
	 */
	public getTracked(): number	{
		return this.tracked;

	}

	/**
	 * The method to set the value to tracked
	 * @param tracked A number representing the tracked
	 */
	public setTracked(tracked: number): void	{
		this.tracked = tracked;
		this.keyModified.set("tracked", 1);

	}

	/**
	 * The method to get the delivered
	 * @returns A number representing the delivered
	 */
	public getDelivered(): number	{
		return this.delivered;

	}

	/**
	 * The method to set the value to delivered
	 * @param delivered A number representing the delivered
	 */
	public setDelivered(delivered: number): void	{
		this.delivered = delivered;
		this.keyModified.set("delivered", 1);

	}

	/**
	 * The method to get the opened
	 * @returns A number representing the opened
	 */
	public getOpened(): number	{
		return this.opened;

	}

	/**
	 * The method to set the value to opened
	 * @param opened A number representing the opened
	 */
	public setOpened(opened: number): void	{
		this.opened = opened;
		this.keyModified.set("opened", 1);

	}

	/**
	 * The method to get the bounced
	 * @returns A number representing the bounced
	 */
	public getBounced(): number	{
		return this.bounced;

	}

	/**
	 * The method to set the value to bounced
	 * @param bounced A number representing the bounced
	 */
	public setBounced(bounced: number): void	{
		this.bounced = bounced;
		this.keyModified.set("bounced", 1);

	}

	/**
	 * The method to get the sent
	 * @returns A number representing the sent
	 */
	public getSent(): number	{
		return this.sent;

	}

	/**
	 * The method to set the value to sent
	 * @param sent A number representing the sent
	 */
	public setSent(sent: number): void	{
		this.sent = sent;
		this.keyModified.set("sent", 1);

	}

	/**
	 * The method to get the clicked
	 * @returns A number representing the clicked
	 */
	public getClicked(): number	{
		return this.clicked;

	}

	/**
	 * The method to set the value to clicked
	 * @param clicked A number representing the clicked
	 */
	public setClicked(clicked: number): void	{
		this.clicked = clicked;
		this.keyModified.set("clicked", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A String representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A String representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	LastVersionStatistics as MasterModel,
	LastVersionStatistics as LastVersionStatistics
}
