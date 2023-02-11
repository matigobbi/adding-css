import React from 'react'
import Details from './Details'
import Picture from './Picture'

export default function Profile(props) {
	console.log(props.children)
	return (
		<div id="profile">
			<Details name={props.data.name} email={props.data.email} />
			<Picture url={props.data.picture} />
		</div>
	)
}
