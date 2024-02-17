import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout.jsx/MainLayout';
import Splash from './pages/Splash/Splash';
import PickTypes from './pages/PickTypes/PickTypes';
import Loading from './pages/Loading/Loading';
import Loaded from './pages/Loaded/Loaded';
import Home from './pages/Home/Home';
import Recommend from './pages/Recommend/Recommend';
import { KAKAO_AUTH_URL } from './components/Auth/OAuth';
import KakaoRedirectView from './pages/Splash/KakaoRedirectView';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Splash />} />
			<Route path="/pickTypes" element={<PickTypes />} />
			<Route path="/loading" element={<Loading />} />
			<Route path="/loaded" element={<Loaded />} />
			<Route path="/home" element={<Home />} />
			<Route path="/recommend" element={<Recommend />} />
			<Route path="/auth/kakao" element={<KakaoRedirectView />} />
		</Routes>
	);
}

export default App;
