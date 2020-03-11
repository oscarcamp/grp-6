import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = (props) => {
	const { id, title } = props.quiz;

	const handleOnDeleteClick = () => {
		props.onDelete(id)
	}

	return (
		<li className="quizitem mb-2">
			<Link
				className="quiz"
				to={ '/quiz/' + id }>
				{title}
			</Link>
			<span>
				<Link className="btn btn-primary btn-sm w-100 m-1" to={ '/AddQuestion/' + id }>
					Edit
				</Link>

				<button onClick={ handleOnDeleteClick } className="btn btn-danger btn-sm w-100 m-1"> Delete </button>
			</span>
		</li>

	)
}

export default Quiz