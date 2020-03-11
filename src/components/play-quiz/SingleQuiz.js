import React from 'react'
import { db } from '../../modules/firebase'
import { Link } from 'react-router-dom'
import Question from './Question'

class SingleQuiz extends React.Component {
	state = {
		id: '',
		title: '',
		questions: [],
		answers: [],
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

		// get total score
		const countScore = (points) => {
			return pointsArr.reduce((sum, points) => sum + points, 0)
		}

		let totalScore = countScore(pointsArr)

		// get an array of correct answers
		const correctAnswerArr = this.state.questions.map((question, i) => {
			return question.correctAnswer
		})

		// get an array of all the object values in state
		const stateValueArr = Object.values(this.state)
		
		// filter stateValueArr to get all the correct guessed answers
		const correctGuessedAnswers = stateValueArr.filter(answer => {
			if (correctAnswerArr.includes(answer)) {
				return [answer]
			}
		})


		this.setState({
			correctGuessedAnswers: correctGuessedAnswers,
			totalScore: totalScore,
			quizSubmitted: true,
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
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
					handleOnClick={this.handleOnClick}
					
				/>
			)
		})
		return (
			<div className="container text-left mt-3">
				<h1>{this.state.title}</h1>
				<div className="question">
					<form onSubmit={this.handleSubmit}>
						{questionList}
						<div className="question-btn">
						<Link to="/QuizList" className="btn back mt-3"> Back to list</Link>
						<button type="submit" className="btn btn-primary mt-3">Confirm </button>
						</div>
					</form>
					{this.state.quizSubmitted ? (
						<div className="score text-center mt-3">
							<h2>Score: </h2>
							<h2>{this.state.correctGuessedAnswers.length} / {this.state.totalScore}</h2>
						</div>
					) : ''}
					
				</div>
			</div>
		)
	}
}

export default SingleQuiz