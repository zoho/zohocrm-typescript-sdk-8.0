import {AppointmentPreference} from "./appointment_preference";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private appointmentPreferences: AppointmentPreference;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the appointmentPreferences
	 * @returns An instance of AppointmentPreference
	 */
	public getAppointmentPreferences(): AppointmentPreference	{
		return this.appointmentPreferences;

	}

	/**
	 * The method to set the value to appointmentPreferences
	 * @param appointmentPreferences An instance of AppointmentPreference
	 */
	public setAppointmentPreferences(appointmentPreferences: AppointmentPreference): void	{
		this.appointmentPreferences = appointmentPreferences;
		this.keyModified.set("appointment_preferences", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
