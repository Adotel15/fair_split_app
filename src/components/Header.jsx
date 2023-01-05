
import styled from "styled-components";
import { basicColors } from "../theme"

const HeaderWrapper = styled.header`

    box-sizing: border-box;

    height: 90px;
    padding: 0 40px;
    z-index: 0;

    box-shadow: 0px 10px 10px 0px rgba(156,156,156,0.61);

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: rgb(33, 150, 243, 0.5);
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
