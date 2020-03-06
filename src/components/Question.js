import React from 'react'
import Answer from './Answer'

const Question = (props) => {
	console.log('props', props)

	// id for group radio buttons
	const id = props.data.id

	//
	const singleQuizData = props.singleQuizData

	// save onChange props to send to Answer
	const change = props.onChange
	console.log('props.handlechange', props.onChange)
	// loop through array of answers to render
	const answer = props.data.answers.map((answer) => {
		return (
			<Answer 
				singleData={singleQuizData}
				answer={answer}
				id={id}
				change={change}
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