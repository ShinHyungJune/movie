import 'assets/css/default.css';
import 'assets/css/common.css';
import 'assets/css/style.css';

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Header from 'components/common/Header';
import Movies from './pages/Movies';
import Movie from "./pages/Movie";

function App() {
	return (
		<Provider store={store}>
			<div className="App">

				<div className="wrap-contents">
					<BrowserRouter>
						<Header />

						<Switch>
							<Route exact path="/" component={Movies} />
							<Route exact path="/movies" component={Movies} />
							<Route exact path="/movie/:id" component={Movie} />
						</Switch>

					</BrowserRouter>
				</div>

			</div>
		</Provider>
	);
}

export default App;
