import React, {Component} from 'react';
import logo from 'assets/img/logo.png';
import {Link} from 'react-router-dom';
import Search from 'components/Search';
import Ranking from 'components/Ranking';

const Header = () => {
	return (
		<div className="header">
			<div className="wrap-1200">
				<Link to="/">
					<img src={logo} alt="" className="logo"/>
				</Link>

				<Search />

				<Ranking />
			</div>
		</div>
	);
};

export default Header;