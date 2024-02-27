import styled from 'styled-components';
import plus from '../../assets/아이콘_나도추천할래/나도추천할래플러스.svg';

export const Layout = styled.section`
	width: 100%;
	height: 884px;
`;

export const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 8px 15px 21px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	background-color: ${(props) => props.theme.color.lightGray};

	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: block;
		width: 5px;
		height: 100px;
		background-color: ${(props) => props.theme.color.gray};
	}

	&::-webkit-scrollbar-thumb {
		background-color: #000;
	}

	&::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.color.gray};
	}
`;

export const MainCont = styled.section`
	width: 100%;
	height: 100%;
	padding: 16px 0;
	border-radius: ${(props) => props.theme.borderRadius.lv4};
	background-color: #fff;
`;

export const Cont = styled(MainCont)`
	padding: 16px 16px 24px;
	background-color: #fff;
`;

export const Text = styled.p`
	font-size: ${(props) => props.theme.fontSize.lv2};
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const MainText = styled(Text)`
	font-size: ${(props) => props.theme.fontSize.lv4};
	padding-left: 16px;
`;

export const Icon = styled.img`
	width: 40px;
	height: 40px;
	position: relative;
	top: 10px;
	margin-right: 8px;
`;

export const Title = styled.p`
	font-family: 'DNFBitBitv2';
	font-size: 24px;
	height: 56px;
	line-height: 56px;
	display: inline-block;
`;

export const MainImg = styled.img`
	width: 100%;
	height: 98px;
	margin: 8px 0;
	border: none;
`;

export const FlexCont = styled.section`
	display: flex;
	justify-content: space-between;
`;

export const MyTypeImg = styled.img`
	width: 96px;
	height: 99px;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 16px;
`;

export const MyRecommedImg = styled.img`
	width: 75px;
	height: 99px;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 16px;
`;

export const CombiImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 14px;
`;

export const EmptyCombiImg = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.color.lightGray};
	margin-top: 14px;
`;

export const LockCont = styled.div`
	width: 96px;
	height: 99px;
	padding: 33px 32px 34px;
	background-color: #f5f5f5;
	border-radius: ${(props) => props.theme.borderRadius.lv2};
	margin-top: 16px;
`;

export const LockImg = styled.img`
	width: 32px;
	height: 32px;
`;

export const PlusIcon = styled.button`
	background-image: url(${plus});
	width: 24px;
	height: 24px;
`;

export const MyRecommendCont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Alter = styled.h1`
	padding: 40px 76px 45px;
	font-size: 18px;
	font-weight: 600;
`;
