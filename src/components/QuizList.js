import React from 'react'
import { db } from '../modules/firebase'

class QuizList extends React.Component {

	componentDidMount = () => {
		this.getQuizList()
	}
	getQuizList = () => {
		db.collection("quizzes").get().then((collection) => {
			console.log('collection', collection)
			collection.forEach(doc => {
				console.log('doc', doc.data())
			})
		});

	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default QuizList