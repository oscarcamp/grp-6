import React from 'react'

const Question = (props) => {
	console.log('props', props)

	const answer = props.data.answers.map((answer) => {
		return (
			<label className="answer" htmlFor={answer}>
				<input className="answer-radio" type="radio" name="answer" value={answer}/>
				{answer}
			</label>
		)
	})
	return (
		<div>
			<h2 className="question">{props.data.question}</h2>
				{answer}
		</div>
		
	)
}

export default Question