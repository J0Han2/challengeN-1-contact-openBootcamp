import { useState } from 'react'
import ContactInfoView from './ComponentB'
import { ContactInfo } from '../models/contact.class'

const ComponentA = () => {
	const [connected, setConnected] = useState(false)

	const newContactInfo = new ContactInfo(
		connected,
		'Divid23@hotmail.com',
		'Duran',
		'David'
	)

	const handleToggleConnected = () => setConnected(!connected)

	return (
		<div>
			<ContactInfoView
				contactInfo={newContactInfo}
				toggleConnected={handleToggleConnected}
			/>
		</div>
	)
}

export default ComponentA
