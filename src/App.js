import React from 'react'
import { Link } from 'react-router-dom'

import CartStat from './components/cart';
import RouterView from './routes'
import Authors from "./views/Authors";
import Genres from "./views/Genres";
import Books from "./views/Books";

export default function(){

	return <>
		<header>
		<Books/>
		</header>

					<main className="col col-9">
						{/*<RouterView />*/}
						<Authors/>
						<Genres/>
					</main>
		
	</>
}

