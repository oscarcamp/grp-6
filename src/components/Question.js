import React from 'react'

const Question = (props) => {
	console.log('props.data', props.data)

	const id = props.data.id

	const answer = props.data.answers.map((answer) => {
		console.log('props.id', props.id)
		return (
			<li id="answer">
				<label className="answer" htmlFor={answer} key={Math.random() * 10}>{answer}</label>
				<input type="radio" name={id} className="answer-radio ml-2" value={answer}/>
			</li>
		)
	})
	return (
		<div>
			<h2 className="question">{props.data.question}</h2>
			<ul className="d-flex justify-content-around">
				{answer}
			</ul>
		</div>
		
	)
}

export default Question