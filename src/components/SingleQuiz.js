import React from 'react'
import { db } from '../modules/firebase'
import { Link } from 'react-router-dom'
import Question from './Question'

class SingleQuiz extends React.Component {
	state = {
		id: '',
		title: '',
		questions: [],
	}

	componentDidMount() {
		this.getQuizList()
	}

	componentWillUnmount() {
	}

	getQuizList = () => {
		console.log()
		db.collection("quizzes").doc(this.props.match.params.id).get()
		.then((response) => {
			this.setState({
				id: response.id,
				title: response.data().title,
				...response.data(),
			})
			console.log('response.data()', response.data())
		});
	}
	render() {
		console.log('this.state.questions', this.state.questions)
		
		const questionList = this.state.questions.map(question => {
			console.log('question', question)
			
			return (
				<Question 
					data={question}
					key={Math.random() * 10}
				/>
			)
		})
		return (
			<div className="singleTodo text-center mt-3">
				<h1>{this.state.title}</h1>
				<div className="question">
					<form>
						{questionList}
					</form>
					
				</div>
					<div className="question-btn">
					<Link to="/" className="btn btn-success mt-3">Back to list</Link>
					<button className="btn btn-primary mt-3">Sumbit</button>
				</div>
			</div>
		)
	}
}

export default SingleQuiz