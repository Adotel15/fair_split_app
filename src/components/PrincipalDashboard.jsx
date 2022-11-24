
import styled from "styled-components"
import Options from "./Options"

const PrincipalDashboardWrapper = styled.main`

    grid-column: 1 / 6;
    grid-row: 2 / 20;

    background-color: #F4FBFF;

    height: 100%;
    width: 100%;

    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(15, 1fr);

    .title {
        grid-column: 2 / 5;
        grid-row: 2;

        display: flex;
        justify-content: center;
    }

`

const PrincipalDashboard = () => {
  return (
    <PrincipalDashboardWrapper>
        <div className = "title">
            <h1>Bienvenidos a FairSplit!</h1>
        </div>

        <Options />

    </PrincipalDashboardWrapper>
  )
}

export default PrincipalDashboard
