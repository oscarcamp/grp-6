import React from 'react'
import { db } from '../modules/firebase'
import Quiz from './Quiz'

class QuizList extends React.Component {

	state = {
		quizzes: [],
	}

	componentDidMount = () => {
		this.getQuizList()
	}
	getQuizList = () => {
		db.collection("quizzes").get().then((querySnapshot) => {
			
			const quizzes = []

			querySnapshot.forEach(doc => {
				console.log(doc.data().questions)
				quizzes.push({
					id: doc.id,
					title: doc.data().questions.title,
				})
			})

			this.setState({
				quizzes: quizzes,
			})

			console.log(quizzes)
		});

	}
	render() {
		const quiz = this.state.quizzes.map(quiz => {
			return (
				<Quiz
					quiz={quiz}
					key={quiz.id}
				/>
			)
		})

		return (
			<div className="quizzes">
				<div className="container">

					<ul className="quiz-list">
						{quiz}
					</ul>
				</div>
			</div>
		)
	}
}

export default QuizList