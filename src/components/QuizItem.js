import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = (props) => {
	const { id, title } = props.quiz;

	const handleOnDeleteClick = () => {
		props.onDelete(id)
	}

	return (
		<li className="quizitem d-flex justify-content-between">
			<Link
				className="quiz"
				to={ '/quiz/' + id }>
				{title}
			</Link>
			<span className="ml-2">
			<Link to={ '/AddQuestion/' + id }>
				<button className="btn btn-primary btn-sm m-1"> ✎ </button>
			</Link>
			<button onClick={ handleOnDeleteClick } className="btn btn-danger btn-sm m-1"> - </button>

			</span>
		</li>

	)
}

export default Quiz