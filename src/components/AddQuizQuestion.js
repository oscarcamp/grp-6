import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../modules/firebase'

class AddQuizQuestion extends React.Component{

        state = {
            title: '',
            question: '',
            answer: '',
            correctAnswer: '',


            questions: [],

            answers: [],

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

        handleInput = (e) => {
            e.preventDefault();

            console.log("Want to add a new question which is: " + this.state.question);
            console.log("Want to add a new answer which is: " + this.state.answers);

            this.getQuizList();
            // Create a new document for our quizzes in the 'quizzes' collection
            const doc = {
                title: this.state.title,
                question: this.state.question,
            };

            db.collection('quizzes').add(doc)
            .then(docRef => {
                // redirect to quizlist
                this.props.history.push('/QuizList');
            })
            .catch(err => {
                console.error(err);
            });
        }

        handleChangeQuestion = (index, e) => {
            const options = [];
            const option = {
                option: e.target.value,
                index: index,
            }
            options.push(option)
            const quizItems = [];
            const quizItem = {
                question: this.state.question,
                correctAnswer: this.state.correctAnswer,
                options: options,
            }
            quizItems.push(quizItem)

            this.setState({
                quizItems: quizItems,
            })
        }

        handleChangeAnswer = (index, e) => {
            const options = [];
            const option = {
                option: e.target.value,
                index: index,
            }
            options.push(option)
            const quizItems = [];
            const quizItem = {
                answer: this.state.answer,
                correctAnswer: this.state.correctAnswer,
                options: options,
            }
            quizItems.push(quizItem)

            this.setState({
                quizItems: quizItems,
            })
        }

        handleInputChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value,
            });
        }

        // handleQuestionPlusClick = (e, index) => {
        //     this.setState({
        //         questions: [...this.state.questions, this.state.questions[index]]
        //     })
        // }

        addNextQuestion = () => {

            this.props.history.push('/AddNextQuestion');

        }

        handleAnswerPlusClick = (e, index) => {
            this.setState({
                answers: [...this.state.answers, this.state.answers[index]]
            })
        }
        
        render(){
            return(           
            <div>
            {/* första frågan med svar */}
            <form onSubmit={this.handleInput}> 
            <h1>Create a Quiz Question</h1>
            <div className="form-group">
                <div>
                {/* Question */}
                <div className="input-group mt-4">
                    <label htmlFor="Question" className="mr-3 ">Question:</label>
                    <input
                        type="text"
                        id="question"
                        aria-label="Type in your question"
                        placeholder="Type in a qustion.."
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
						value={this.state.question}
                    />
                    
                </div>
                
                {/* Answer */}
                <div className="input-group mt-4">
                    <label htmlFor="Answer" className="mr-4 ml-5">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        aria-label="Type in your answer"
                        placeholder="Type in a answer.."
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
						value={this.state.answer}
                    />
                    <div className="input-group-append">
                        <button onClick={this.handleAnswerPlusClick} className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                    
                </div>
               
                </div>
                 {/* lägga till ytterligare en answer fält */}
                 {
                            this.state.answers
                            ?
                            this.state.answers.map((item, index) => {
                                const i = index;
                                return (

                                    <div key={index}>
                                        
                                            {/* Answer */}
                                            <div className="input-group mt-4">
                                            <label htmlFor="Answer" className="mr-4 ml-5">Answer:</label>
                                            <input
                                                type="text"
                                                id="answer"
                                                aria-label="Type in your answer"
                                                placeholder="Type in a answer.."
                                                className="form-control"
                                                required
                                                onChange={(e) => {this.handleChangeAnswer(i, e)}}
                                                value={this.state.answer}
                                            />
                                            <div className="input-group-append">
                                                <button onClick={this.handleInputChange} className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                            </div>
                                            </div>
                                            </div>
            
                                
                                )
                            })
                            : ""
                        }
                
                

                {/* lägga till ytterligare fråga med svar */}
                {
                    this.state.questions
                    ?
                    this.state.questions.map((item, index) => {
                        const i = index;
                        
                        return (

                            <div key={index}>
                                 <br></br>
                                    {/* Question */}
                                    <div className="input-group mt-4">
                                    <label htmlFor="Question" className="mr-3 ">Question:</label>
                                    <input
                                        type="text"
                                        id="question"
                                        aria-label="Type in your question"
                                        placeholder="Type in a qustion.."
                                        className="form-control"
                                        required
                                        onChange={(e) => {this.handleChangeQuestion(i, e)}}
                                        value={this.state.question}
                                    />
                                    
                                    </div>
    
                                    {/* Answer */}
                                    <div className="input-group mt-4">
                                    <label htmlFor="Answer" className="mr-4 ml-5">Answer:</label>
                                    <input
                                        type="text"
                                        id="answer"
                                        aria-label="Type in your answer"
                                        placeholder="Type in a answer.."
                                        className="form-control"
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.answer}
                                    />
                                    <div className="input-group-append">
                                        <button onClick={this.handleAnswerPlusClick} className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                    </div>
                                      </div>
                                     
                                      </div>
                                      )
                    })
                    : ""
                    
                }
                
                
                <div className="btn-home">
                <Link to="/" className="btn btn-danger mt-3">Home</Link>
                <div className="input-group-append">
                     <button onClick={this.addNextQuestion} className="btn btn-outline-secondary mt-3" type="button" id="button-addon2">add next question</button>
                 </div>
                <button type="submit" className="btn btn-primary mt-3">Add to Quiz</button>
                </div> 
                

            </div>    
            </form>
            </div>
            )
        }
    }
export default AddQuizQuestion;