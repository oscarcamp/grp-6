import React from 'react'
import { db } from '../modules/firebase'

class SingleQuiz extends React.Component {
	state = {
		id: '',
		title: '',
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
		
		// const questionList = this.state.questions.map(question => {
		// 	console.log('question', question)
		// })
		return (
			<div className="singleTodo text-center mt-3">
			<h1>{this.state.title}</h1>

				{/* <h2>{this.state.title}</h2>
				<p>{this.state.description}</p>
				{this.state.completed ? <p>This todo is done</p> : <p>This todo is undone</p>}
				<Link to="/" className="btn btn-primary mt-3">Back to list</Link> */}
			</div>
		)
	}
}

export default SingleQuiz