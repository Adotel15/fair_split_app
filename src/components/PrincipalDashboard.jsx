
import styled from "styled-components"
import useHistory from "../hooks/useHistory"
import { useState } from "react"

const PrincipalDashboardWrapper = styled.main`

    height: calc(100% - 130px);
    width: 100%;

    background-color: #DCF2DE;

    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .container {
      height: 90%;
      width: 600px;
      
      background-color: white;
      border-radius: 20px;

      box-shadow: 1px 1px 10px 10px #d6d6d6;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .form  {

      padding-top: 40px;
      height: 90%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 35px;
      align-items: center;

      label {
        font-size: 20px;
        font-weight: 700;
      }

      .title {

          h1 {
            font-weight: 900;
            font-size: 25px;
            text-align: center;
            margin: 0;
          }

        span {
          color: #7FBE35;
        }

      }

      .submit {
        border: none;
        background-color: transparent;
        margin-top: 40px;

        background-color: #7FBE35;
        color: white;
        padding: 10px 80px;
        border-radius: 10px;

        font-weight: 600;
        text-transform: uppercase;

        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #4A9F55;
          transform: scale(1.05);
        }
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 50%;
        box-sizing: border-box;

        input {
       
          font-size: 15px;
          border: none;
          height: 40px;

          
          &:focus {
            outline: none;
            border-bottom: 1px solid #4A9F55;
        }
      }
    }
    }

    .added {
    }
`

const PrincipalDashboard = () => {

  const { history, setHistory } = useHistory()

  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")

  const handleSubmit = event => {

    event.preventDefault()

    if( [name, price].includes('') ) {
      alert("Please fill all the fields")
      return
    }

    console.log("AQui llegas")
    const newHistory = [...history, { name, price, description: description === "" ? "No description" : description } ]
    setHistory(newHistory)
    setName('')
    setPrice('')
    setDescription('')

  }

  return (
    <PrincipalDashboardWrapper>

      <div className = "container">

         <form
          className = "form"
          onSubmit = {handleSubmit}
        >

            <div className = "title">
              <h1>Crea Un Nuevo <span>Participante</span></h1>
            </div>

            <div> 
              <label htmlFor = "name" >Nombre: </label>
              <input
                type = "text" 
                name = "name" 
                id = "name"
                placeholder = "Introduce el nombre"
                value = {name}
                onChange = { event => setName(event.target.value) }
              />
            </div>

            <div>
              <label htmlFor = "price">Cantidad:</label>
              <input 
                type = "number" 
                name = "price" 
                id = "price" 
                placeholder = "Introduce la cantidad aportada"
                value = {price}
                onChange = { event => setPrice(event.target.value) }
              />
            </div>

            <div>
              <label htmlFor = "description">Descripción:</label>
              <input 
                type = "textarea" 
                name = "description" 
                id = "description" 
                placeholder = "Introduce una descripción (Opcional)"
                value = {description}
                onChange = { event => setDescription(event.target.value) }
              />
            </div>

            <input 
              type = "submit" 
              value = "Añadir" 
              className = "submit"
            />
         </form>
      </div>

      <div className = "container added">
        Añadidos

        <div>
          {
            history.map( (item, index) => (
              <div key = {index}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>

    </PrincipalDashboardWrapper>
  )
}

export default PrincipalDashboard
