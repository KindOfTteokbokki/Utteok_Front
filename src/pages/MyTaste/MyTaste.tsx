import React, { useEffect, useState } from 'react';
import MyTasteView from './MyTasteView';
import { constants } from '../../constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function MyTaste() {
	const postFunc = usePost(`${baseUrl}/viewOneFromMyTaste`);

	const { id } = useParams();
	const [data, setData] = useState(['']);
	const navigator = useNavigate();
	const header = constants.MY_TASTE.header;
	const onClickBack = () => {
		navigator(-1);
	};

	useEffect(() => {
		postFunc({ store_seq: id }).then((res) => {
			console.log(res);
		});
	}, []);

	return <MyTasteView header={header} onClickBack={onClickBack} />;
}
