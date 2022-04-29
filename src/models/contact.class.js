export class ContactInfo {
	connected = false
	email = ''
	lastName = ''
	name = ''

	constructor(connected, email, lastName, name) {
		this.connected = connected
		this.email = email
		this.lastName = lastName
		this.name = name
	}
}
