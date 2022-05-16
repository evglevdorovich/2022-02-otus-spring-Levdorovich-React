import React from 'react';
import {Route, Routes} from 'react-router-dom'
import E404 from './views/E404';
import Comments from "./components/comment/comment";
import Library from "./views/Library";
import EditingBook from "./components/editingBook/book"

export default function () {
    return <Routes>
        <Route path="/" element={<Library/>}/>
        <Route path="/comments/:id" element={<Comments/>}/>
        <Route path="/books/:id" element={<EditingBook/>}/>
        <Route path="*" element={<E404/>}/>
    </Routes>
}

/* export default function(){
	return useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/product/:id", element: <Product /> }
	]);
} */