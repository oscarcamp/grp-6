import React from 'react'
import Answer from './Answer'

const Question = (props) => {
	console.log('props.data', props.data)

	// id for group radio buttons
	const id = props.data.id

	// loop through array of answers to render
	const answer = props.data.answers.map((answer) => {
		return (
			<Answer 
				answer={answer}
				id={id}
			/>
		)
	})
	return (
		<div>
			<h2 className="question">{props.data.question}</h2>
			<ul className="d-flex justify-content-around">
				{/* render answers */}
				{answer}
			</ul>
		</div>
		
	)
}

export default Question