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

	handleDeleteQuiz = (id) => {
		console.log('Want to delete todo with id ' + id);

		db.collection('quizzes').doc(id).delete()
		.then(() => {
			// firestore has successfully deleted the quiz
			this.getQuizList()
		}).catch(err => {
			console.error(err);
		});
	}

	render() {
		const quiz = this.state.quizzes.map(quiz => {
			return (
				<QuizItem
					quiz={quiz}
					key={quiz.id}
					onDelete={this.handleDeleteQuiz}
				/>
			)
		})

		return (
			<div className="quizzes">
				<div className="container">

					<h1 className="quiz-h1">Choose a quiz you want to play:</h1>
					<ul className="quiz-list">
						{quiz}
					</ul>
					<Link to="/" className=" homebtn"> Home</Link>
				</div>
			</div>
		)
	}
}

export default QuizList