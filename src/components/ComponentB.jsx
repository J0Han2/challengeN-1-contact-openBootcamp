import PropTypes from 'prop-types'
import { ContactInfo } from '../models/contact.class'

const ComponentB = ({ contactInfo, toggleConnected }) => {
	const { connected, email, lastName, name } = contactInfo
	
	return (
		<div>
			<ul>
				<li>firstName: {name}</li>
				<li>lastName: {lastName}</li>
				<li>email: {email}</li>
				<li>
					connected: {connected ? 'online contact' : 'no contact available'}
				</li>
			</ul>
			<button onClick={toggleConnected}>
				{connected ? 'online' : 'offline'}
			</button>
		</div>
	)
}

ComponentB.propTypes = {
	contactInfo: PropTypes.instanceOf(ContactInfo),
	toggleConnected: PropTypes.func,
}

export default ComponentB
