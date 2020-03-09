import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home';
import AddQuiz from './components/AddQuiz';
import QuizList from './components/QuizList';
import SingleQuiz from './components/SingleQuiz';
import AddQuizQuestion from './components/AddQuizQuestion';


function App() {
	return (
		// <div className="App">
		// 	<QuizList />
		// </div>
		<BrowserRouter>
			<div id="App" className="container">
				<Switch> 
					<Route exact path='/' component={Home} />
					<Route path='/AddQuiz' component={AddQuiz} />
					<Route path='/AddQuizQuestion' component={AddQuizQuestion} />
					<Route path='/QuizList' component={QuizList} />
					<Route path='/quiz/:id' component={SingleQuiz} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
