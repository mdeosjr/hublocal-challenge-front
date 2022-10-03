import styled from 'styled-components'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'

export const HomePageButton = styled(ButtonUnstyled)`
	all: unset;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	:hover {
		background: #f2f2f2;
	}
	border: 2px solid black;
	border-radius: 4px;
	font: normal 500 16px/20px 'Barlow';
	color: #000000;
	letter-spacing: 1px;
	cursor: pointer;
`