
import styled from "styled-components"

const PrincipalDashboardWrapper = styled.main`

    height: calc(100% - 130px);
    width: 100%;

    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .container {
      height: 80%;
      width: 600px;
      
      background-color: white;
      border-radius: 20px;

      box-shadow: 1px 1px 10px 10px #d6d6d6;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .form  {

      height: 60%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .submit {
        border: none;
        background-color: transparent;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 50%;

        input {
          border: none;
          height: 40px;
        }
      }
      
      
    }

    .added {
    }
`

const PrincipalDashboard = () => {

  return (
    <PrincipalDashboardWrapper>

      <div className = "container">
         <form className = "form">

            <div> 
              <label htmlFor = "name" >Nombre: </label>
              <input
                type = "text" 
                name = "name" 
                id = "name"
                placeholder = "Introduce el nombre"
              />
            </div>

            <div>
              <label htmlFor = "price">Cantidad:</label>
              <input 
                type = "text" 
                name = "price" 
                id = "price" 
                placeholder = "Introduce la cantidad aportada"
              />
            </div>

            <div>
              <label htmlFor = "description">Descripción:</label>
              <input 
                type = "text" 
                name = "description" 
                id = "description" 
                placeholder = "Introduce una descripción (Opcional)"
              />
            </div>

            <input type = "submit" value = "Añadir" className = "submit"/>
         </form>
      </div>

      <div className = "container added">
        Añadidos
      </div>

    </PrincipalDashboardWrapper>
  )
}

export default PrincipalDashboard
