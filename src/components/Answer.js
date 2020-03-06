import React from 'react'

const Answer = props => {
	console.log('props in answer', props)
	return (
		<li id="answer">
			<label className="answer" htmlFor={props.answer} key={Math.random() * 10}>{props.answer}</label>
			<input 
				type="radio" 
				name={props.id} 
				id={props.answer} 
				className="answer-radio ml-2" 
				value={props.answer} 
				onChange={props.change}
				/>
		</li>
	)
}

export default Answer