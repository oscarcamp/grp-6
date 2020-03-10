import React from 'react'

class AddAnswer extends React.Component {

	deleteAnswer = (e, i) => {
		e.preventDefault()
		const answers = this.props.answers
		answers.splice(i, 1)

		this.setState({
			answers
		})
	}

	handleAddAnswer = (e) => {
		e.preventDefault()
		const answers = this.props.answers
		answers.push('')

		this.setState({
			answers
		})
	}

	handleInputChange = (e, i) => {
		const answers = this.props.answers
		answers[i] = e.target.value

		this.setState({
			answers
		})
	}
	

	render() {
	
		return (
			<div className="input-group answer-wrapper">
				{
					this.props.answers.map((answer, i) => (
						<div id="answer-inputs" className="input-group mb-3" key={i}>
							<input
								type="text"
								name="answer"
								aria-label="Type in your answer"
								placeholder="Type in a answer.."
								className="form-control"
								value={answer}
								onChange={e => {this.handleInputChange(e, i)}}
								required
							/>
							<div className="input-group-append">
								<button className="btn btn-danger" onClick={(e) => {this.deleteAnswer(e, i)}}>
									🗑
								</button>
							</div>
						</div>
					))
				}

				<button className="btn btn-primary" onClick={this.handleAddAnswer}>Add answer</button>
			
			</div>
		)

	}
	
}


export default AddAnswer