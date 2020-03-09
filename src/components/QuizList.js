import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../modules/firebase'
import QuizItem from './QuizItem'

class QuizList extends React.Component {

	state = {
		quizzes: [],
	}

	componentDidMount() {
		this.getQuizList();
	}

	getQuizList = () => {
		db.collection("quizzes").get().then((querySnapshot) => {
			
			const quizzes = []

			querySnapshot.forEach(doc => {
				console.log(doc.data())
				quizzes.push({
					id: doc.id,
					title: doc.data().title,
				})
			})

			this.setState({
				quizzes: quizzes,
			})
		});

	}

	handleQuizToggle = (quiz) => {
		console.log('Want to toggle quiz with id ' + quiz.id);

		this.props.history.push('/AddQuizQuestion');


	}

	render() {
		const quiz = this.state.quizzes.map(quiz => {
			return (
				<QuizItem
					quiz={quiz}
					key={quiz.id}
					onToggle={this.handleQuizToggle}
				/>
			)
		})

		return (
			<div className="quizzes">
				<div className="container">

					<ul className="quiz-list">
						{quiz}
					</ul>
					<Link to="/" className="btn btn-danger mt-3">Home</Link>
				</div>
			</div>
		)
	}
}

export default QuizList