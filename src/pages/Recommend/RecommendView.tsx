import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { HeadText, MessageLayout } from '../PickTypes/style';
import RecommendWrite from './RecommendWrite';
import { useGet } from '../../api/useFetch';
import { useNavigate } from 'react-router-dom';

export default function RecommendView() {
	const getFunc = useGet('http://118.67.132.171:8080/api/getRecommendToMain');
	const [keyboard, setKeyBoard] = useState(false);
	const [reviewData, setReviewData] = useState([]);
	const navigator = useNavigate();

	const renderWrite = () => {
		if (keyboard) {
			return <RecommendWrite setKeyBoard={setKeyBoard} />;
		}
	};

	useEffect(() => {
		getFunc().then((res) => {
			setReviewData(res?.data);
		});
	}, []);

	return (
		<S.Layout>
			<S.Head>
				<S.backButton
					onClick={() => {
						navigator(-1);
					}}
				/>
				<S.RecommHeadText>나도 추천할래</S.RecommHeadText>
			</S.Head>
			<S.Main>
				<S.Message>
					어떡 이용자들이 <S.BoldText>먹어보고</S.BoldText> 추천하는 <S.BoldText>내돈내산</S.BoldText> 후기들이야!
				</S.Message>
				<S.RecommCont>
					{reviewData.map((data: any) => {
						return (
							<S.RecommList>
								{data?.file_masking_name === null ? (
									<S.ReCommOnlyText>{data.content}</S.ReCommOnlyText>
								) : (
									<>
										<S.RecommImg src={data?.file_path + data?.file_masking_name} />
										<S.RecommText>{data?.content}</S.RecommText>
									</>
								)}
							</S.RecommList>
						);
					})}
				</S.RecommCont>
			</S.Main>
			<S.Button
				onClick={() => {
					setKeyBoard(true);
				}}
			/>
			{renderWrite()}
		</S.Layout>
	);
}
