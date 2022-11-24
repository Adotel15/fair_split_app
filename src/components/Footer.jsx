
import styled from "styled-components"

const FooterWrapper = styled.footer`

    grid-column: 1 / 6;
    grid-row: 20;

    margin: 0;
    padding: 0;
    padding: 0 10px;

    background-color: #F4FBFF;

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
