import React from 'react'
import { db } from '../modules/firebase'
import { Link } from 'react-router-dom'
import Question from './Question'

class SingleQuiz extends React.Component {
	state = {
		id: '',
		title: '',
		questions: [],
		answers: [],
		correctAnswer: [],
		selectedAnswer: ''
	}

	componentDidMount() {
		this.getQuizList()
	}

	componentWillUnmount() {
	}

	getQuizList = () => {
		// get quizzes from firebase
		db.collection("quizzes").doc(this.props.match.params.id).get()
		.then((response) => {
			// update state
			this.setState({
				id: response.id,
				title: response.data().title,
				...response.data(),
			})
			console.log('response.data()', response.data())
		});
	}

	handleSubmit = (e) => {
		e.preventDefault()
		
	}

	handleChange = e => {
		this.setState({
			correctAnswer: []
		})
		// get an array of correct answers
		const correctAnswerArr = this.state.questions.map(question => {
			return question.correctAnswer
		})

		// get an array of correct guessed answers
		let guessedAnswer = ''
		if (!correctAnswerArr.includes(e.target.value)) {
			return
		} else if (this.state.answers.includes(e.target.value)) {
			return
		} else {
			guessedAnswer = e.target.value
		}

		this.setState(prevState => ({
			// copy over any other values from state
			...prevState,
			answers: [
				...prevState.answers,
				guessedAnswer,
			],
			correctAnswer: correctAnswerArr,
		}))

		console.log('this.state.answers', this.state.answers)
		console.log('this.state.correctAnswer', this.state.correctAnswer)
	}

	render() {
		console.log('this.state.questions', this.state.questions)
		
		// loop through questions array to render each question
		const questionList = this.state.questions.map(question => {
			console.log('question', question)
			return (
				<Question 
					data={question}
					singleQuizData={this.state}
					key={Math.random() * 10}
					onChange={this.handleChange}
				/>
			)
		})
		return (
			<div className="singleTodo text-center mt-3">
				<h1>{this.state.title}</h1>
				<div className="question">
					<form onSubmit={this.handleSubmit}>
						{questionList}
						<div className="question-btn">
							<Link to="/" className="btn btn-success mt-3">Back to list</Link>
							<button className="btn btn-primary mt-3">Sumbit</button>
						</div>
					</form>
					<div className="score">
						<h2>{this.state.answers.length} / {this.state.correctAnswer.length}</h2>
					</div>
				</div>
				
			</div>
		)
	}
}

export default SingleQuiz