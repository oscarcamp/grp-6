import React from 'react'

const Answer = props => {
	return (
		<li id="answer">
			<label className="answer" htmlFor={props.answer} key={Math.random() * 10}>{props.answer}</label>
			<input type="radio" name={props.id} className="answer-radio ml-2" value={props.answer}/>
		</li>
	)
}

export default Answer