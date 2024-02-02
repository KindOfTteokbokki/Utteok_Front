import React, { useEffect, useState } from 'react';
import PickTypesView from './PickTypesView';
import { constants } from '../../constants/constants';
import { addPickType, deletePickType } from '../../slice/userPickSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';
import axios, { AxiosPromise } from 'axios';

export interface Props {
	headerText: string;
	alertText: string;
	selectText: string;
	questionList: Response[];
	answerList: Response[];
	onClickAdd: (type: [string, Response]) => void;
	onClickMove(): void;
	onClickDelete: (type: string) => void;
}

export type Response = {
	code: string;
	name_ko: string;
};

export default function PickTypes() {
	const navigator = useNavigate();
	const dispatch = useDispatch();

	const { response, error, loading, sendData } = useAxios({
		method: 'GET',
		url: 'http://118.67.132.171:8080/api/getQA',
		headers: {
			accept: '*/*',
		},
	});

	const questionList = response?.data.question;
	const answerList = response?.data.answer;

	const onClickAdd = (type: [string, Response]) => {
		dispatch(addPickType(type));
	};

	const onClickMove = () => {
		navigator('/loading');
	};

	const onClickDelete = (type: string) => {
		dispatch(deletePickType(type));
	};

	return (
		<>
			<PickTypesView
				headerText="같이 떡볶이 고르는 중"
				alertText="좋아하는 거 골라봐! 일부만 선택해도 돼."
				selectText="선택하기"
				questionList={questionList}
				answerList={answerList}
				onClickAdd={onClickAdd}
				onClickMove={onClickMove}
				onClickDelete={onClickDelete}
			/>
		</>
	);
}
