import React from 'react'

const Quiz = (props) => {
	const { id, title } = props.quiz;
	console.log('props.quiz', props.quiz)
	return (
		<li>
			{title}
		</li>
	)
}

export default Quiz