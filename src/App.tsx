import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout.jsx/MainLayout';
import Splash from './pages/Splash/Splash';
import PickTypes from './pages/PickTypes/PickTypes';
import Loading from './pages/Loading/Loading';
import Loaded from './pages/Loaded/Loaded';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
			<Route path="/pickTypes" element={<PickTypes />} />
			<Route path="/loading" element={<Loading />} />
			<Route element={<MainLayout />}>
				<Route path="/loaded" element={<Loaded />} />
			</Route>
		</Routes>
	);
}

export default App;
