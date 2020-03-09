import React from 'react'
import { db } from '../modules/firebase'
import { Link } from 'react-router-dom'
import Question from './Question'

class SingleQuiz extends React.Component {
	state = {
		id: '',
		title: '',
		points: null,
		questions: [],
		answers: [],
		correctAnswer: [],
		totalScore: null,
		quizSubmitted: false,
		value: '',
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
		// get an array of points
		const pointsArr = this.state.questions.map(question => question.points)

		// get total points
		const countScore = (points) => {
			return pointsArr.reduce((sum, points) => sum + points, 0)
		}

		let totalScore = countScore(pointsArr)

		const correctAnswer = this.state.questions.map(question => question.correctAnswer)
		let answersArr = this.state.answers

		// compare two arrays

		let matchingValue = (answers, correctAnswer) => {
		return correctAnswer.filter(b => answers.some(a=> new RegExp(b,'i').test(a)))
		}

		console.log('matchingValue', matchingValue(answersArr,correctAnswer))
	
		this.setState({
			totalScore: totalScore,
			quizSubmitted: true,
		})


		console.log('answers inside submit', this.state.answers)
		
		
	}

	handleChange = (e) => {
		console.log('this.state.questions', this.state.questions)

		// get an array of correct answers
		const correctAnswerArr = this.state.questions.map((question, i) => {
			return question.correctAnswer
		})

		// get the correct guessed answer
		let guessedAnswer

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
			// points: this.state.points + points,
			value: guessedAnswer
		}))
		console.log('answers', this.state.answers)

		console.log('this.state.answers', this.state.answers)


		console.log('state in change', this.state)
		
	}

	render() {
		// loop through questions array to render each question
		const questionList = this.state.questions.map((question, i) => {
			return (
				<Question 
					data={question}
					singleQuizData={this.state}
					key={i}
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
							<button className="btn btn-primary mt-3">Submit</button>
						</div>
					</form>
					{this.state.quizSubmitted ? (
						<div className="score">
							<h2>{this.state.answers.length} / {this.state.totalScore}</h2>
						</div>
					) : ''}
					
				</div>
				
			</div>
		)
	}
}

export default SingleQuiz