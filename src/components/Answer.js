import React from 'react'

const Answer = props => {
	return (
		<li className="answer">
			<label className="answer" htmlFor={props.answer}>{props.answer}</label>
			<input 
				type="radio" 
				name={props.id} 
				id='answers' 
				className="answer-radio ml-2" 
				value={props.answer}
				onChange={props.change}
				// checked={props.value === props.answer}
				/>
		</li>
	)
}

export default Answer