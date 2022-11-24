
import styled from "styled-components";
import { basicColors } from "../theme"

const HeaderWrapper = styled.header`

    grid-column: 1 / 6;
    grid-row: 1;

    box-sizing: border-box;

    padding: 0 40px;
    z-index: 0;

    box-shadow: 0px 10px 10px 0px rgba(156,156,156,0.61);

    display: flex;
    justify-content: flex-start;

    background-color: ${basicColors.principalColor};
    color: ${basicColors.white};
    
`

const Header = () => {

    return (
        <HeaderWrapper>
          <h1>Fair Split</h1>
        </HeaderWrapper>
    )
}

export default Header
