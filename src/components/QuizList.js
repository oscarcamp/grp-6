import React from 'react'
import { db } from '../modules/firebase'
import QuizItem from './QuizItem'

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
	render() {
		const quiz = this.state.quizzes.map(quiz => {
			return (
				<QuizItem
					quiz={quiz}
					key={quiz.id}
				/>
			)
		})

		return (
			<div className="quizzes">
				<h1>Quizzes</h1>
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