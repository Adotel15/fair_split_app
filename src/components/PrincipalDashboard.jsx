
import styled from "styled-components"

import Options from "./Options"

const PrincipalDashboardWrapper = styled.main`

    grid-column: 1 / 6;
    grid-row: 2 / 20;
    background-color: #F4FBFF;
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(15, 1fr);
    gap: 5px;

    .content {
        border: 1px solid black;
        grid-column: 2 / 6;
        grid-row: 1 / 16;

        display: flex;
        justify-content: center;
        align-items: center;
    }

`

const PrincipalDashboard = () => {
  return (
    <PrincipalDashboardWrapper>
        <Options />

        <div className="content" >
            <h1> Bienvenido a FairSplit! </h1>
        </div>
    </PrincipalDashboardWrapper>
  )
}

export default PrincipalDashboard
