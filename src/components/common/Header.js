import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Search from 'components/Search';
import logo from 'assets/img/logo.png';

const Header = () => {
	return (
		<div className="header">
			<div className="wrap-1200">
				<Link to="/">
					<img src={logo} alt="" className="logo"/>
				</Link>

				<Search />

			</div>
		</div>
	);
};

export default Header;