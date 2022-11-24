
import styled from "styled-components"

const OptionsWrapper = styled.nav`

    grid-column: 1 / 6;
    grid-row: 3 / 11;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 10px 50px;

    .card {
        width: 200px;
        height: 200px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        padding: 8px;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        transition: all 1s ease-out;

        cursor: pointer;

    }

    .card:hover {
        transform: scale(1.1);
    }

`

const Options = () => {

    return (
        <OptionsWrapper>
            <div className = "card">
                <h4>Presupuesto Nuevo</h4>
            </div>

            <div className = "card">
                <h4>Historial</h4>
            </div>

            <div className = "card">
                <h4>Cotizaciones</h4>
            </div>
        </OptionsWrapper>
    )
}

export default Options
