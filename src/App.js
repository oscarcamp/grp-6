import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import QuizList from './components/QuizList';
import SingleQuiz from './components/SingleQuiz';


function App() {
	return (
		// <div className="App">
		// 	<QuizList />
		// </div>
		<BrowserRouter>
			<div id="App" className="container">
				<Switch> 
					<Route exact path='/' component={QuizList} />
					<Route path='/quiz/:id' component={SingleQuiz} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
