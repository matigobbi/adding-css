import React from 'react'

export default function Details(props) {
	console.log(props.name)
	return (
		<div>
			<h3>Name: {props.name}</h3>
			<h3>Email: {props.email}</h3>
		</div>
	)
}
