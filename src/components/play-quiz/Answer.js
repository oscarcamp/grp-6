import React from 'react'

const Answer = props => {
	return (
		<li className="asw-li">
			<label className="radio answer" htmlFor={props.answer}>
			<input 
				type="radio" 
				name={props.question.question} 
				id={props.id} 
				className="answer-1" 
				value={props.answer}
				onChange={props.change}
				// checked={props.value === props.answer}
				/>
				{props.answer} </label>
		</li>
	)
}

export default Answer