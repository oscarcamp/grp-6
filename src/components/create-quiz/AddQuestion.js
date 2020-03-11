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
		});
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.addQuestion()
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
			points: 1,
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
			console.log('Your quiz is successfully added to the list!')
		})
		.catch(err => {
			console.error(err)
		})
	}
	

	render() {
		const displayQuiz = this.state.questions.map((question, i) => {
			return (
				<div key={i}>
					<div className="d-flex justify-content-between">
						<h4>{i + 1}. {question.question}</h4>
						<span className="delete-question" onClick={(e) => {this.deleteQuestion(e, i)}}><button className="btn btn-danger">x</button></span>
					</div>
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
			<div className="container ">
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

						<div className="d-flex justify-content-between">
							<div className="btn-home">
								<Link to="/QuizList" className="btn back"> 
									Back to list
								</Link>
							</div>
							<button type="submit" className="btn btn-primary">
								Add question
							</button>
							
						</div>
					</form>
				</div> 
				
				

				{
					this.state.questions.length > 0
					?
					<div className="mt-5">
						<h2>{ this.state.title }</h2>

						<div className="display-quiz">
							{ displayQuiz }
						</div>

						<button 
							className="btn back mt-4 mb-4 w-100"
							onClick={this.handleSubmitQuiz}>
								<Link className="submit-link" to="/QuizList">Submit Quiz</Link>
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