import React from 'react'

const Question = (props) => {
	console.log('props', props)

	const answer = props.data.answers.map((answer) => {
		return (
			<label htmlFor={answer}>
				<input type="radio" name="answer" value={answer}/>
				{answer}
			</label>
		)
	})
	return (
		<div>
			<h2>{props.data.question}</h2>
				{answer}
		</div>
		
	)
}

export default Question