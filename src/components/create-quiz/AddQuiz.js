import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../modules/firebase'

class AddQuiz extends React.Component{

	state = {
		title: '',
		id: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()

		console.log("Want to add a new title which is: " + this.state.title);

		// Create a new document for our quizzes in the 'quizzes' collection

		db.collection('quizzes').add(this.state)
		.then(docRef => {
			// redirect to quizlist
			this.props.history.push('/AddQuestion/' + docRef.id);
		})
		.catch(err => {
			console.error(err);
		});

	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}
	
	render(){
		return(
		<div>
			<form onSubmit={this.handleSubmit}> 
				<div className="form-group container">
					<h1>Create a Quiz</h1>
					{/* Title */}
					<div className="input-group mt-4">
						<label htmlFor="Title">Title:</label>
						<div className="input-group">
								<input
									type="text"
									id="title"
									aria-label="Title of your Quiz"
									placeholder="Type in a quiz name.."
									className="form-control"
									required
									onChange={this.handleInputChange}
									value={this.state.title}
								/>
						</div>		
					</div>

					<div className="btn-home">
						<Link to="/" className="btn homebtn mt-3">Home</Link>
						<button type="submit" className="btn btn-primary create-quiz mt-3">Create quiz</button>
					</div> 

				</div>
			</form>
		</div>
		)
	}
}

export default AddQuiz;