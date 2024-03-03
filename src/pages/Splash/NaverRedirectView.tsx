import React, { useEffect } from 'react';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { setUserToken } from '../../slice/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NaverRedirectView() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const code = new URL(window.location.href).searchParams.get('code');

	console.log(code);
	const getFunc = useGet(`${baseUrl}/auth/naver/?code=${code}`);

	useEffect(() => {
		getFunc().then((res: any) => {
			dispatch(setUserToken(res.data.accessToken));
			navigate('/setting');
		});
	}, []);

	return <></>;
}
