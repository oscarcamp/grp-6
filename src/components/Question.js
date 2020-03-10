import React from 'react'
import Answer from './Answer'

const Question = (props) => {
	// id for group radio buttons to send to Answer
	const id = props.data.id
	// get points to send to answer
	const points = props.data.points

	// get singleQuizData to send to Answer
	const singleQuizData = props.singleQuizData

	// get singleQuizDataValue to send to Answer
	const value = props.singleQuizData.value

	// save onChange props to send to Answer
	const change = props.onChange

	// loop through array of answers to render
	const answer = props.data.answers.map((answer, i) => {
		return (
			<Answer 
				question={props.data}
				value={value}
				points={points}
				singleData={singleQuizData}
				answer={answer}
				id={id}
				key={i}
				change={change}
			/>
		)
	})
	return (
		<div>
			<h2 className="question">{props.data.question}</h2>
			<ul>
				{/* render answers */}
				{answer}
			</ul>
		</div>
		
	)
}

export default Question