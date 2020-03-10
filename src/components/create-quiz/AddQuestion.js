import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../modules/firebase'
import AddAnswer from './AddAnswer'

class AddQuestion extends React.Component {
	state = {
	
		answers: [],
		correctAnswer: '',
		question: '',
		id: '',
		points: Number(0),
		title: '',
	
		questions: [],
		
	}

	componentDidMount = () => {
		db.collection('quizzes').doc(this.props.match.params.id).get()
		.then(doc => {
			this.setState({
				id: doc.id,
				title: doc.data().title,
			})
		})
		this.getQuizList()
		console.log(this.state)
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
		e.preventDefault();
		this.addQuestion()
		console.log(this.state)
		
	}

	addQuestion = () => {
		// empty input fields
		this.setState({
			question: '',
			answers: [""],
			correctAnswer: '',
			points: '',
		})
		const question = {
			question: this.state.question,
			answers: this.state.answers,
			correctAnswer: this.state.correctAnswer,
			points: Number(this.state.points),
		}

		const questions = [...this.state.questions, question]

		this.setState({
			title: this.state.title,
			questions: questions,
		})

		
	}

	deleteQuestion = (e, i) => {
		const questions = this.state.questions;
		questions.splice(i, 1);
		this.setState({
			questions
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmitQuiz = (e) => {
		e.preventDefault()

		db.collection("quizzes").doc(this.props.match.params.id).update({
			title: this.state.title,
			questions: this.state.questions,
		})
		.then(() => {
			console.log('Success!')
		})
		.catch(err => {
			console.error(err)
		})
	}
	

	render() {

		const displayQuiz = this.state.questions.map((question, i) => {
			return (
				<div key={i}>
					<h2>{question.question} <span className="delete-question" onClick={(e) => {this.deleteQuestion(e, i)}}> 🗑</span></h2>
					<ul>
						{	
							question.answers.map((answer, i) => {
								return (
									<li key={i}>
										{ answer }
									</li>
								)
							})
						}
					</ul>
				</div>
			)	
		})

		return (
			<div className="create-quiz">
				<h1>Create quiz</h1>
				<div className="quiz-form">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Add a question</label>
							<input 
								type="text" 
								name="question"
								className="form-control" 
								placeholder="Enter a question" 
								aria-label="Question input"
								value={this.state.question}
								onChange={this.handleChange} 
							/>
						</div>

						<div className="form-group">
							<label>Add answers</label>
							<AddAnswer 
								handleChange={this.handleChange}
								answers={this.state.answers}
							/>
						</div>

						<div className="form-group">
							<label>Add correct answer</label>
							<input 
								type="text" 
								name="correctAnswer"
								className="form-control" 
								placeholder="Enter the correct answer" 
								aria-label="Correct answer input"
								value={this.state.correctAnswer}
								onChange={this.handleChange} 
							/>
						</div>

						<div className="form-group">
							<label>Add points for the question</label>
							<input 
								type="number" 
								name="points"
								className="form-control" 
								placeholder="Enter the correct answer" 
								aria-label="Correct answer input"
								value={this.state.points}
								onChange={this.handleChange} 
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Add question
						</button>
					</form>
				</div>
				<div className="btn-home">
					<Link to="/QuizList" className="btn btn-warning mt-3"> 
						<span role="img" aria-label="A back arrow">🔙</span> 
						Back to list
					</Link>
				</div> 
				
				

				{
					this.state.questions.length > 0
					?
					<div>
						<h1>{ this.state.title }</h1>

						<div className="display-quiz">
							{ displayQuiz }
						</div>

						<button 
							className="btn btn-success mt-4 w-100"
							onClick={this.handleSubmitQuiz}>
								<Link to="/">Submit Quiz</Link>
						</button>
					</div>
					:
					''
				}
			</div>
		)
	}
}

export default AddQuestion