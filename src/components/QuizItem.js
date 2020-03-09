import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = (props) => {
	const { id, title } = props.quiz;

	const handleOnToggleClick = () => {
		props.onToggle(props.quiz)
	}

	return (
		<li className="quizitem">
		<Link
			to={ '/quiz/' + id }>
			{title}
		</Link>
		<span className="ml-2">
		<button onClick={ handleOnToggleClick } className="btn btn-primary btn-sm"> + </button>

		</span>
		</li>

	)
}

export default Quiz