import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = (props) => {
	const { id, title } = props.quiz;
	return (
		<li className="quizitem">
		<Link
			to={ '/quiz/' + id }>
			{title}
		</Link>
		</li>
	)
}

export default Quiz