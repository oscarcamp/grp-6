import React from 'react'
import Answer from './Answer'

const Question = (props) => {

	const { data, singleQuizData, onChange } = props

	// loop through array of answers to render
	const answer = data.answers.map((answer, i) => {
		return (
			<Answer 
				question={data}
				value={singleQuizData.value}
				points={data.points}
				singleData={singleQuizData}
				answer={answer}
				id={data.id}
				key={i}
				change={onChange}
			/>
		)
	})
	return (
		<div className="content-wrapper">
			<h2 className="question">{props.data.question}</h2>
			<ul className="asw-ul">
				{/* render answers */}
				{answer}
			</ul>
		</div>
		
	)
}

export default Question