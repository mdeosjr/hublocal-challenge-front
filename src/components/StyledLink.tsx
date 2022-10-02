import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
   all: unset;
   font: normal 500 16px/24px 'Barlow';
   letter-spacing: 0.15px;
   cursor: pointer;
   color: #000000;
   text-decoration-line: underline;
`

export default StyledLink
