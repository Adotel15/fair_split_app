
import styled from "styled-components"

const FooterWrapper = styled.footer`

    margin: 0;
    padding: 0;
    padding: 0 10px;
    height: 40px;
    background-color: #DCF2DE;
    display: flex;
    justify-content: space-between;
    

    p {
        font-size: 10px;
        font-weight: 400;
    }

`

const Footer = () => {

    return (
        <FooterWrapper>
            <p>FairSplit alpha 0.0.1</p>
            <p>© All rights reserved. DotMan Company S.L.</p>
        </FooterWrapper>
    )
}

export default Footer
