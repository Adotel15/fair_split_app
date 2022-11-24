
import styled from "styled-components"

const OptionsWrapper = styled.nav`

    grid-column: 1 / 2;
    grid-row: 1 / 16;

    display: flex;
    flex-direction: column;

    padding-top: 10px;
    padding-left: 40px;

    h6 {
        margin-bottom: 10px;
    }

`

const Options = () => {

    return (
        <OptionsWrapper>
            
                <h4>Presupuesto Nuevo</h4>
                <h4>Historial</h4>
                <h4>Cotizaciones</h4>
          
        </OptionsWrapper>
    )
}

export default Options
