import {DealRecordConfiguration} from "./deal_record_configuration";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class AppointmentPreference implements Model{

	private showJobSheet: boolean;
	private whenDurationExceeds: string;
	private whenAppointmentCompleted: Choice<string>;
	private allowBookingOutsideServiceAvailability: boolean;
	private allowBookingOutsideBusinesshours: boolean;
	private dealRecordConfiguration: DealRecordConfiguration;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the showJobSheet
	 * @returns A Boolean representing the showJobSheet
	 */
	public getShowJobSheet(): boolean	{
		return this.showJobSheet;

	}

	/**
	 * The method to set the value to showJobSheet
	 * @param showJobSheet A Boolean representing the showJobSheet
	 */
	public setShowJobSheet(showJobSheet: boolean): void	{
		this.showJobSheet = showJobSheet;
		this.keyModified.set("show_job_sheet", 1);

	}

	/**
	 * The method to get the whenDurationExceeds
	 * @returns A String representing the whenDurationExceeds
	 */
	public getWhenDurationExceeds(): string	{
		return this.whenDurationExceeds;

	}

	/**
	 * The method to set the value to whenDurationExceeds
	 * @param whenDurationExceeds A String representing the whenDurationExceeds
	 */
	public setWhenDurationExceeds(whenDurationExceeds: string): void	{
		this.whenDurationExceeds = whenDurationExceeds;
		this.keyModified.set("when_duration_exceeds", 1);

	}

	/**
	 * The method to get the whenAppointmentCompleted
	 * @returns An instance of Choice<string>
	 */
	public getWhenAppointmentCompleted(): Choice<string>	{
		return this.whenAppointmentCompleted;

	}

	/**
	 * The method to set the value to whenAppointmentCompleted
	 * @param whenAppointmentCompleted An instance of Choice<string>
	 */
	public setWhenAppointmentCompleted(whenAppointmentCompleted: Choice<string>): void	{
		this.whenAppointmentCompleted = whenAppointmentCompleted;
		this.keyModified.set("when_appointment_completed", 1);

	}

	/**
	 * The method to get the allowBookingOutsideServiceAvailability
	 * @returns A Boolean representing the allowBookingOutsideServiceAvailability
	 */
	public getAllowBookingOutsideServiceAvailability(): boolean	{
		return this.allowBookingOutsideServiceAvailability;

	}

	/**
	 * The method to set the value to allowBookingOutsideServiceAvailability
	 * @param allowBookingOutsideServiceAvailability A Boolean representing the allowBookingOutsideServiceAvailability
	 */
	public setAllowBookingOutsideServiceAvailability(allowBookingOutsideServiceAvailability: boolean): void	{
		this.allowBookingOutsideServiceAvailability = allowBookingOutsideServiceAvailability;
		this.keyModified.set("allow_booking_outside_service_availability", 1);

	}

	/**
	 * The method to get the allowBookingOutsideBusinesshours
	 * @returns A Boolean representing the allowBookingOutsideBusinesshours
	 */
	public getAllowBookingOutsideBusinesshours(): boolean	{
		return this.allowBookingOutsideBusinesshours;

	}

	/**
	 * The method to set the value to allowBookingOutsideBusinesshours
	 * @param allowBookingOutsideBusinesshours A Boolean representing the allowBookingOutsideBusinesshours
	 */
	public setAllowBookingOutsideBusinesshours(allowBookingOutsideBusinesshours: boolean): void	{
		this.allowBookingOutsideBusinesshours = allowBookingOutsideBusinesshours;
		this.keyModified.set("allow_booking_outside_businesshours", 1);

	}

	/**
	 * The method to get the dealRecordConfiguration
	 * @returns An instance of DealRecordConfiguration
	 */
	public getDealRecordConfiguration(): DealRecordConfiguration	{
		return this.dealRecordConfiguration;

	}

	/**
	 * The method to set the value to dealRecordConfiguration
	 * @param dealRecordConfiguration An instance of DealRecordConfiguration
	 */
	public setDealRecordConfiguration(dealRecordConfiguration: DealRecordConfiguration): void	{
		this.dealRecordConfiguration = dealRecordConfiguration;
		this.keyModified.set("deal_record_configuration", 1);

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
	AppointmentPreference as MasterModel,
	AppointmentPreference as AppointmentPreference
}
